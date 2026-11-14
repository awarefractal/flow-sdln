// Chequeo del kit (lo corre el CI y se puede correr a mano): node scripts/check.mjs
// 1) los enlaces relativos de los .md existen; 2) no hay rutas locales ni emails personales;
// 3) la versión está escrita una sola vez: VERSION manda y el CHANGELOG, el badge y la portada coinciden.
import { readdirSync, readFileSync, existsSync, statSync } from 'node:fs';
import { join, dirname, resolve } from 'node:path';

const raiz = resolve(import.meta.dirname, '..');
const ignorar = new Set(['.git', 'node_modules']);
const fallos = [];

function* archivos(dir) {
  for (const nombre of readdirSync(dir)) {
    if (ignorar.has(nombre)) continue;
    const ruta = join(dir, nombre);
    if (statSync(ruta).isDirectory()) yield* archivos(ruta);
    else yield ruta;
  }
}

for (const ruta of archivos(raiz)) {
  if (!ruta.endsWith('.md')) continue;
  const rel = ruta.slice(raiz.length + 1).replaceAll('\\', '/');
  const texto = readFileSync(ruta, 'utf8');

  for (const [, destino] of texto.matchAll(/\]\(([^)\s]+)\)/g)) {
    if (/^(https?:|mailto:|#)/.test(destino)) continue;
    const sinAncla = destino.split('#')[0];
    if (sinAncla && !existsSync(resolve(dirname(ruta), sinAncla))) {
      fallos.push(`${rel}: enlace roto → ${destino}`);
    }
  }
  if (/[A-Za-z]:\\Users\\|\/Users\/[a-z]+\/|@gmail\.com/i.test(texto)) {
    fallos.push(`${rel}: ruta local o email personal`);
  }
}

const leer = (r) => readFileSync(join(raiz, r), 'utf8');
const version = leer('VERSION').trim();
const primera = leer('CHANGELOG.md').match(/^## (\d+\.\d+\.\d+)/m)?.[1];
if (primera !== version) fallos.push(`CHANGELOG.md: la primera sección es ${primera}, VERSION dice ${version}`);
const badge = leer('README.md').match(/badge\/version-(\d+\.\d+\.\d+)-/)?.[1];
if (badge !== version) fallos.push(`README.md: el badge dice ${badge}, VERSION dice ${version}`);
if (!leer('docs/index.html').includes(`Versión <span>${version}</span>`)) fallos.push(`docs/index.html: la portada no dice la versión ${version}`);
for (const r of ['README.md', 'CLAUDE.md', 'PLAYBOOK.md', 'docs/index.html']) {
  for (const [, v] of leer(r).matchAll(/\b(\d+\.\d+\.\d+)\b/g)) {
    if (v !== version) fallos.push(`${r}: versión suelta ${v}; solo VERSION manda`);
  }
}

if (fallos.length) {
  console.error(fallos.join('\n'));
  process.exit(1);
}
console.log('check: ok');
