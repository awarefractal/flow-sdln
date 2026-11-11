// Comandos de los hooks de Flow. Uso: node flow-hooks.mjs <hook>
// Hooks: sesion · toma · generado · commit · cierre
// Lee `.flow/` desde el directorio de trabajo hacia arriba. Si la herramienta manda JSON por stdin
// (evento, herramienta, entrada), lo usa; si no, trabaja solo con el estado. Sin dependencias.
// Salida: 0 = permite; 2 = bloquea, con el motivo en stderr (el adaptador lo traduce si su herramienta usa otra convención).
import { readdirSync, readFileSync, existsSync, statSync } from 'node:fs';
import { join, dirname, resolve, relative, sep } from 'node:path';

const hoy = new Date().toISOString().slice(0, 10);
const bloquear = (motivo) => { console.error(`Flow: ${motivo}`); process.exit(2); };
const leer = (ruta) => (existsSync(ruta) ? readFileSync(ruta, 'utf8') : '');

function buscarFlow(desde) {
  for (let dir = resolve(desde); ; dir = dirname(dir)) {
    if (existsSync(join(dir, '.flow'))) return dir;
    if (dirname(dir) === dir) return null;
  }
}

function entrada() {
  if (process.stdin.isTTY) return {};
  try { return JSON.parse(readFileSync(0, 'utf8') || '{}'); } catch { return {}; }
}

function puntos(flow) {
  const dir = join(flow, 'motor', 'backlog', 'puntos');
  if (!existsSync(dir)) return [];
  return readdirSync(dir).filter((n) => n.endsWith('.md')).map((n) => {
    const ruta = join(dir, n);
    const texto = readFileSync(ruta, 'utf8');
    const meta = {};
    const bloque = texto.match(/^---\r?\n([\s\S]*?)\r?\n---/);
    for (const linea of (bloque?.[1] ?? '').split(/\r?\n/)) {
      const m = linea.match(/^([a-z_]+):\s*(.*)$/);
      if (m) meta[m[1]] = m[2].trim();
    }
    return { id: meta.id || n.replace(/\.md$/, ''), meta, texto, ruta, hoy: statSync(ruta).mtime.toISOString().slice(0, 10) === hoy };
  });
}

const seccion = (texto, titulo) =>
  (texto.match(new RegExp(`^## ${titulo}[^\\n]*\\n([\\s\\S]*?)(?=^## |$(?![\\s\\S]))`, 'm')) ?? [])[1] ?? '';

function filasTabla(texto, titulo) {
  return seccion(texto, titulo).split(/\r?\n/)
    .filter((l) => l.startsWith('|') && !/^\|[-\s|]+\|?$/.test(l))
    .map((l) => l.split('|').slice(1, -1).map((c) => c.trim()))
    .slice(1);
}

function puertasObligatorias(flow) {
  return filasTabla(leer(join(flow, 'config.md')), 'Puertas de revisión').filter((f) => f[4]?.toLowerCase().startsWith('s'));
}

function sesion(flow) {
  const todos = puntos(flow);
  const lineas = [`Flow: estado al ${hoy}`];
  for (const p of todos.filter((x) => x.meta.estado === 'doing')) lineas.push(`- ${p.id} en curso · toma: ${p.meta.toma || 'sin toma'}${p.meta.bloqueado_por ? ` · bloqueado por ${p.meta.bloqueado_por}` : ''}`);
  for (const p of todos.filter((x) => x.meta.estado === 'revision')) lineas.push(`- ${p.id} espera veredicto`);
  const filas = leer(join(flow, 'bandeja.md')).split(/\r?\n/).filter((l) => /^\|\s*B\d+/.test(l)).map((l) => l.split('|').slice(1, -1).map((c) => c.trim()));
  const sinTriar = filas.filter((f) => !f[6]).length;
  const vencidos = filas.filter((f) => /^\d{4}-\d{2}-\d{2}$/.test(f[5]) && f[5] <= hoy && f[6] === 'pin');
  if (sinTriar) lineas.push(`- bandeja sin triar: ${sinTriar}`);
  for (const f of vencidos) lineas.push(`- pin vencido ${f[0]}: ${f[4]}`);
  console.log(lineas.join('\n'));
}

function toma(flow, raiz, e) {
  const ruta = e.tool_input?.file_path;
  if (!ruta) return;
  const rel = relative(raiz, resolve(raiz, ruta));
  if (rel.startsWith('..') || rel.split(sep)[0].startsWith('.')) return;
  const todos = puntos(flow);
  const activos = todos.filter((p) => p.meta.estado === 'doing' || (p.meta.estado === 'done' && p.hoy));
  if (!activos.length) bloquear('no hay un punto tomado. Toma uno (o créalo) y súbelo antes de editar código.');
  const libres = activos.filter((p) => !p.meta.bloqueado_por);
  if (!libres.length) bloquear(`el punto ${activos[0].id} está bloqueado por ${activos[0].meta.bloqueado_por}. Resuelve el bloqueo antes de editar.`);
  const sesionPropia = process.env.FLOW_SESION;
  if (sesionPropia && !libres.some((p) => (p.meta.toma || '').includes(sesionPropia))) {
    bloquear(`ningún punto está tomado por la sesión ${sesionPropia}.`);
  }
}

const esTest = (rel) => /(^|[\\/])(tests?|__tests__|spec)[\\/]|\.(test|spec)\./i.test(rel);

function generado(flow, raiz, e) {
  const ruta = e.tool_input?.file_path;
  if (!ruta) return;
  const abs = resolve(raiz, ruta);
  if (!existsSync(abs)) return;
  if (/Generado por Flow/.test(readFileSync(abs, 'utf8').split(/\r?\n/).slice(0, 5).join('\n'))) {
    bloquear(`${relative(raiz, abs)} es un archivo generado: no se edita, se vuelve a correr el setup.`);
  }
  if (esTest(relative(raiz, abs)) && puntos(flow).some((p) => p.meta.estado === 'doing' && p.meta.tipo === 'bug')) {
    bloquear(`${relative(raiz, abs)} es un test existente y hay un bug en curso: se corrige el código, no el test. Si es la reproducción, créala en un archivo nuevo.`);
  }
}

function commit(flow, e) {
  const orden = e.tool_input?.command ?? '';
  if (!/\bgit\s+commit\b/.test(orden)) return;
  const mensaje = orden.match(/(?:-m|--message)[ =]+(?:"([^"]*)"|'([^']*)'|(\S+))/);
  if (!mensaje) return;
  if (!/\bP\d+(-[A-Z])?\b/.test(mensaje[1] ?? mensaje[2] ?? mensaje[3])) bloquear('el mensaje del commit debe llevar el ID del punto (por ejemplo P012).');
}

function cierre(flow, e) {
  if (e.stop_hook_active) return;
  const obligatorias = puertasObligatorias(flow);
  const faltas = [];
  for (const p of puntos(flow).filter((x) => x.meta.estado === 'done' && x.hoy)) {
    if (/vía rápida/i.test(p.texto)) continue;
    const bitacora = join(flow, 'bitacora', 'entradas');
    if (!(existsSync(bitacora) && readdirSync(bitacora).some((n) => n.includes(p.id)))) faltas.push(`${p.id}: sin entrada de bitácora`);
    if (/^- \[ \]/m.test(seccion(p.texto, 'Criterios de aceptación'))) faltas.push(`${p.id}: criterios sin marcar`);
    if (obligatorias.length && !/aprobado/i.test(seccion(p.texto, 'Revisión'))) faltas.push(`${p.id}: sin veredicto aprobado de una puerta obligatoria`);
  }
  if (faltas.length) bloquear(`no se puede cerrar todavía:\n${faltas.map((f) => `  - ${f}`).join('\n')}`);
}

const hook = process.argv[2];
const e = entrada();
const raiz = buscarFlow(e.cwd ?? process.cwd());
if (!raiz) process.exit(0);
const flow = join(raiz, '.flow');
const acciones = { sesion: () => sesion(flow), toma: () => toma(flow, raiz, e), generado: () => generado(flow, raiz, e), commit: () => commit(flow, e), cierre: () => cierre(flow, e) };
if (!acciones[hook]) { console.error(`Flow: hook desconocido «${hook}». Usa: ${Object.keys(acciones).join(' · ')}`); process.exit(1); }
acciones[hook]();
