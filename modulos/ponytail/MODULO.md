# Módulo: Ponytail original

La escalera de mínimo esfuerzo como plugin del agente. Es opcional: Flow ya trae la regla en texto (`.flow/ponytail.md`, una carilla), y con eso basta.

## Cuándo se propone

Una sola vez, al empezar a construir: en el primer plan de un punto que escribe código, si `ponytail` en `config.md` sigue con origen `asumido`. El setup no lo propone ni lo pregunta.

Dos opciones, con la regla en texto por defecto:

| Opción | Qué pasa |
|---|---|
| `regla` | No se instala nada. Sigue la carilla `.flow/ponytail.md`. |
| `externo` | Se instala el original como fuente externa (abajo). La carilla se queda: si el plugin falta, la regla sigue ahí. |

Cualquier respuesta se anota en `config.md` (`ponytail`, origen `dicho`) y no se vuelve a preguntar. Se cambia editando esa fila.

## Qué instala

El proyecto de Dietrich Gebert, `github.com/DietrichGebert/ponytail`, licencia MIT. Lo de terceros no se copia al kit ni al proyecto: se instala desde su origen.

## Ejecuta código

Sí: el plugin de Claude Code y el de Codex corren dos hooks de Node, y necesitan `node` en el PATH. Se pide el OK del usuario antes de instalar (regla última de `capacidades.md`).

## Cómo se instala

| IA | Pasos (según el `INSTALL.md` de Ponytail) |
|---|---|
| Claude Code | El usuario escribe, en dos mensajes separados, `/plugin marketplace add DietrichGebert/ponytail` y `/plugin install ponytail@ponytail`. |
| OpenCode | `opencode plugin add @dietrichgebert/ponytail`, o el plugin en `opencode.json`. |
| Codex | `codex plugin marketplace add DietrichGebert/ponytail` y `codex plugin add ponytail@ponytail`; después revisar y confiar sus hooks en `/hooks`. |
| Otra | Copiar su `AGENTS.md`, o pedirle a la IA que instale su `skills/ponytail/SKILL.md` como skill. |

## Cómo se conecta con Flow

No lee ni escribe `.flow/`. Al elegir `externo`: `config.md` dice `externo` y `capacidades.md` suma la fila de abajo.

## Fila para `capacidades.md`

| Capacidad | Dónde vive | Úsala cuando… |
|---|---|---|
| Ponytail (plugin) | el de la IA, instalado desde su origen | Siempre, antes de escribir código |

## Verificación

| Dato | Estado | Fuente | Fecha |
|---|---|---|---|
| Licencia MIT, repositorio activo | confirmado | github.com/DietrichGebert/ponytail | 2026-11-14 |
| Pasos de instalación de la tabla | confirmado en el `INSTALL.md` del propio proyecto; no en la documentación de cada IA | github.com/DietrichGebert/ponytail/blob/main/INSTALL.md | 2026-11-14 |
