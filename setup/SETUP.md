# Setup de Flow

Protocolo para instalar Flow en un proyecto. Es una conversación, no un cuestionario: si el usuario deja de responder después de la segunda pregunta, se pierde la mayor parte de la información.

Se ejecuta desde la raíz del proyecto, leyendo este kit.

## 0. Detectar (sin preguntar)

Lee el repo: manifiesto (`package.json`, `pyproject.toml`, `go.mod`…), árbol de carpetas, `git log`, documentación existente, comandos de test y build, ramas y archivos de ejemplo de entorno. Detecta qué IA está ejecutando el setup. Si ya existe `.flow/`, es una actualización: compara su `VERSION` con la del kit y regenera solo lo generado.

## 1. Una pregunta abierta

Haz una sola pregunta, con este espíritu:

> Cuéntame qué vas a construir (o qué ya tienes), para quién, y cómo te lo imaginas. Todo lo que se te ocurra, desordenado está bien.

No añadas nada más. Deja que se explaye.

## 2. Inferir

Del relato y de lo detectado, llena esta tabla marcando cada campo como `dicho`, `inferido`, `asumido` o `pendiente`. Infiere todo lo que puedas antes de preguntar.

| Campo | Se infiere de | Si falta | Bloqueante |
|---|---|---|---|
| nombre | relato, manifiesto, carpeta | preguntar | sí |
| qué es y para quién | relato | preguntar | sí |
| tipo de proyecto (web/SaaS, sitio público, API, móvil) | relato y código | asumir el más probable | no |
| ia | detección | preguntar solo si hay varias | no |
| idioma y registro del copy | relato, idioma del repo | asumir el idioma del repo y «tú» | no |
| comandos (test, e2e, lint, build) | manifiesto | `pendiente` | no |
| ramas y entornos | git, archivos de despliegue | `pendiente` | no |
| versionado | archivo de versión en el manifiesto | asumir «sí» si existe | no |
| repos hermanos | relato | ninguno | no |
| invariantes («esto nunca debe…») | relato | `pendiente`, queda como brecha | no |
| normativa (país y tema) | relato: datos personales, sector regulado | «no»; preguntar solo si el relato lo insinúa | no |
| estética | relato (referencias, adjetivos, marca) y estilos o tokens del código | preguntar una vez, solo si hay interfaz | sí, si hay interfaz |
| fuente del backlog | relato: nombra Jira, Trello u otra herramienta de backlog | `local` | no |
| promoción a producción | archivos de despliegue o CI (`.github/workflows`, scripts de deploy), relato | `nada`: se declara y queda trazado (`referencia/produccion.md`) | no |
| módulos | hay interfaz → `diseno`; hay URL desplegada → `qa-navegador` | se proponen en el resumen, no se preguntan | no |

## 3. Rondas cortas

Máximo 2 rondas, de 3 preguntas como máximo. Cada pregunta cabe en una línea y se responde en pocas palabras. Solo sobre campos **bloqueantes**, o sobre una señal fuerte que no se pueda resolver sola (por ejemplo, varias IAs detectadas). Ofrece siempre una opción por defecto («¿Asumo X?»). Todo lo demás se asume y se anota; lo pendiente se preguntará más adelante, cuando un punto lo necesite.

**Estética.** Si hay interfaz y ni el relato ni el código dan pista del estilo, pregúntalo aquí, antes de generar nada y en la primera ronda, en una línea:

> ¿Alguna idea del estilo? Una referencia (un sitio, una marca), un par de adjetivos, o algo que no quieras que parezca. Si no tienes, propongo yo una dirección concreta y me la apruebas.

Sin respuesta, no se asume un estilo por defecto: queda `pendiente` y el módulo `diseno` propone una dirección antes de diseñar. Lo que se responda va al PRD, en §4.

## 4. Generar

1. Crea `.flow/` copiando `nucleo/esqueleto/*.plantilla.md` con las variables resueltas y sin el sufijo, y `nucleo/contexto/CONTEXT.plantilla.md` como `.flow/CONTEXT.md`.
2. Crea las carpetas `dominio/`, `bitacora/entradas/`, `motor/backlog/puntos/`, `motor/planes/{activos,hechos}/` y `modulos/<m>/` de los módulos activos, y `hooks/` con `nucleo/hooks/INDICE.md`, `_agregar-un-hook.md` y `flow-hooks.mjs` copiados dentro. Para cada módulo activo, sigue su `modulos/<m>/MODULO.md`.
3. Genera el adaptador de la IA detectada, según `adaptadores/<ia>/ADAPTADOR.md`:
   - el archivo guía, desde `nucleo/contexto/guia.base.md`;
   - la conexión de los hooks de `.flow/hooks/INDICE.md` en estado `activo`;
   - el skill `flow`: `nucleo/motor/SKILL.base.md` como `SKILL.md`, más `nucleo/motor/referencia/`, `nucleo/plantillas/` y `nucleo/catalogo/` junto a él, en la ruta de skills de esa IA.
4. `.flow/` se versiona: no va al `.gitignore`, salvo que el usuario lo pida (y entonces se le advierte que pierde estado compartido, bloqueos y rastro entre sesiones y personas).
5. Todo lo generado (archivo guía y skill) lleva la cabecera «Generado por Flow vX. No editar».

### Variables

| Variable | Valor |
|---|---|
| `{{nombre}}` | nombre del proyecto |
| `{{descripcion_en_3_lineas}}` | qué es y para quién, en tres líneas |
| `{{invariantes}}` | lista de invariantes, o «Ninguno declarado todavía» |
| `{{ponytail_resumen}}` | los 7 escalones de `ponytail.md` y su referencia a ese archivo |
| `{{checklist_extra}}` | ítems propios del proyecto, o vacío |
| `{{lexico}}` | glosario, o «Sin términos fijos todavía» |
| `{{ia}}` | `claude-code`, `codex` u `opencode` |
| `{{idioma}}`, `{{registro}}` | idioma y registro del copy |
| `{{areas_del_arbol}}` | carpetas de primer nivel del código |
| `{{versionado_activo}}` | `sí` o `no` |
| `{{ruta_skills}}` | ruta de skills del adaptador |
| `{{flow_version}}` | contenido de `VERSION` |

## 5. Bootstrap

Ejecuta `nucleo/motor/referencia/bootstrap.md`.

## 6. Verificar

Ejecuta `setup/verificar.md`. Corrige lo generado; lo demás, repórtalo.

## 7. Resumen al usuario

Corto: qué se asumió (en lista), qué brechas hay, qué módulos propones y cómo activarlos, y cuál es el primer punto sugerido. No lo termines con una batería de preguntas.

## Cambiar de IA después

Vuelve a correr el setup: solo se regeneran el archivo guía y el skill. `.flow/` no se toca.

## Actualizar a una versión nueva del kit

Se regeneran el archivo guía y el skill. Los archivos de `.flow/` son del proyecto (`CONTEXT.md` incluye sus reglas aprendidas): nunca se sobrescriben. Cada versión del `CHANGELOG.md` trae una sección «Migración» con lo que cambia en `.flow/`, y esos cambios son siempre aditivos: un campo o una sección nueva con valor por defecto `asumido`. Con esa lista, propón un solo punto de tipo `proceso` y aplícalo cuando el usuario lo apruebe.
