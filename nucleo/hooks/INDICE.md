# Hooks

Un hook es un comando que se dispara en un evento concreto, sin depender de que la IA se acuerde: convierte una regla escrita en una garantía. Este catálogo es la única fuente. Los eventos se nombran en abstracto; cada adaptador (`adaptadores/<ia>/ADAPTADOR.md`, sección «Hooks») dice a qué evento real de su herramienta corresponde. Lo que una herramienta no pueda disparar se cubre con hooks de git o con el CI del repositorio.

Estados: `por implementar` (declarado, sin comando) · `activo` (el adaptador lo conecta) · `apagado`. Cómo agregar, ajustar o apagar uno: `_agregar-un-hook.md`.

En un proyecto, este archivo y `flow-hooks.mjs` (los comandos de los hooks de Flow, en Node, sin dependencias) se copian a `.flow/hooks/`: los hooks propios del proyecto y los de módulos se agregan ahí.

| Hook | Evento | Garantiza | Comando | Origen | Estado |
|---|---|---|---|---|---|
| inicio-de-sesion | inicio de sesión | carga el estado, la bandeja de revisión y los pins vencidos | `node .flow/hooks/flow-hooks.mjs sesion` | Flow | activo |
| toma-antes-de-planificar | antes de editar | el punto está tomado por esta sesión y sin bloqueos | `node .flow/hooks/flow-hooks.mjs toma` | Flow | activo |
| proteccion-de-lo-generado | antes de editar | no se tocan archivos derivados, ni el test de un bug que se está corrigiendo | `node .flow/hooks/flow-hooks.mjs generado` | Flow | activo |
| id-en-commit | antes de un commit | el mensaje lleva el ID del punto | `node .flow/hooks/flow-hooks.mjs commit` | Flow | activo |
| bloqueo-de-cierre | antes de un commit de cierre · al terminar la respuesta | hay evidencia, bitácora y veredicto de las puertas que le tocan al punto | `node .flow/hooks/flow-hooks.mjs cierre` | Flow | activo |

## Eventos abstractos

`inicio de sesión` · `antes de editar` · `antes de un commit` · `al terminar la respuesta`.

## Qué comprueba cada comando

`flow-hooks.mjs` lee `.flow/` y, si la herramienta manda JSON por stdin, el evento. Sale con 0 (permite) o con 2 (bloquea, con el motivo en stderr).

| Comando | Comprueba | Límites |
|---|---|---|
| `sesion` | imprime puntos en curso, lo que espera veredicto, bandeja sin triar y pins vencidos | solo informa |
| `toma` | hay un punto `doing` (o `done` hoy, por la vía rápida) y no está bloqueado; no aplica a rutas ocultas ni fuera del proyecto | solo mira la sesión si existe la variable `FLOW_SESION` |
| `generado` | no se edita un archivo con la cabecera «Generado por Flow»; con un bug en curso, no se edita un test existente | un test se reconoce por su ruta (`test/`, `tests/`, `spec/`, `*.test.*`, `*.spec.*`) |
| `commit` | un `git commit -m` lleva el ID del punto | si el mensaje no va en `-m`, no lo puede leer y permite |
| `cierre` | todo punto `done` hoy tiene bitácora, criterios marcados y, si hay puertas obligatorias, un veredicto aprobado | omite los puntos de vía rápida; permite si la herramienta indica que ya está reintentando |
