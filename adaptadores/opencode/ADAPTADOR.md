# Adaptador: OpenCode

| Campo | Valor |
|---|---|
| Archivo guía | `AGENTS.md` en la raíz del proyecto, generado desde `nucleo/contexto/guia.base.md` |
| Ruta de skills (`{{ruta_skills}}`) | `.opencode/skills/`; si el proyecto también usa Codex, `.agents/skills/` sirve a ambos |
| Formato de skill | carpeta `<nombre>/SKILL.md` |
| Configuración | `opencode.json` en la raíz |
| Detección | la sesión que ejecuta el setup es de OpenCode |

## Generar

1. `AGENTS.md` ← `guia.base.md` con las variables resueltas.
2. El skill `flow` y los de los módulos activos en la ruta de skills elegida, con `referencia/`, `plantillas/` y `catalogo/` junto a `flow/SKILL.md`.
3. Opcional: `opencode.json` con el plugin Ponytail, que aplica la escalera de mínimo esfuerzo. Es un paquete de terceros que ejecuta código: se declara y se pide el OK del usuario antes de añadirlo (regla última de `capacidades.md`).

## Verificación

| Dato | Estado | Fuente | Fecha |
|---|---|---|---|
| `AGENTS.md` como reglas del proyecto, buscado hasta la raíz de git | por fuente de terceros; documentación oficial no abierta | opencode.ai/docs/rules (por abrir) | 2026-11-01 |
| Skills en `.opencode/skills/`, y lectura de `.claude/skills` y `.agents/skills` por compatibilidad | por las docs v2 de opencode.ai, vistas solo en resultados de búsqueda | opencode.ai/v2/docs/skills | 2026-11-01 |
| Plugin Ponytail (`@dietrichgebert/ponytail`) | nombre visto en la configuración de un proyecto real; paquete no verificado | — | 2026-11-01 |

Confirmar las rutas y el paquete en la documentación oficial antes de generar.

## Hooks

Sin verificar: no se confirmó en su documentación oficial qué eventos ofrece. Mientras tanto, los hooks de `.flow/hooks/INDICE.md` se cubren con hooks de git (`pre-commit`, `commit-msg`) o con el CI del repositorio, y se anota en la fila de cada hook. `flow-hooks.mjs commit` puede llamarse desde `commit-msg`; el resto de los hooks no tiene respaldo todavía. Al verificar la herramienta, se agrega aquí la tabla de eventos y la fuente con su fecha.
