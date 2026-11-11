# Adaptador: Claude Code

| Campo | Valor |
|---|---|
| Archivo guía | `CLAUDE.md` en la raíz del proyecto, generado desde `nucleo/contexto/guia.base.md` |
| Carga del archivo guía | automática en cada sesión |
| Ruta de skills (`{{ruta_skills}}`) | `.claude/skills/` |
| Formato de skill | carpeta `<nombre>/SKILL.md` con frontmatter `name` y `description` |
| Detección | la sesión que ejecuta el setup es de Claude Code |

## Generar

1. `CLAUDE.md` ← `guia.base.md` con las variables resueltas.
2. `.claude/skills/flow/SKILL.md` ← `nucleo/motor/SKILL.base.md`, y junto a él `referencia/`, `plantillas/` y `catalogo/`.
3. Los skills de los módulos activos, en `.claude/skills/<módulo>/`.

## Extras opcionales

- `.claude/launch.json` si el proyecto tiene servidor de desarrollo.
- Memoria persistente de la IA (fuera del repo) para las decisiones del usuario sobre cómo trabaja.
- `.claude/` suele estar en `.gitignore`. Si el equipo quiere compartir los skills, se versionan de forma explícita.

## Verificación

| Dato | Estado | Fuente | Fecha |
|---|---|---|---|
| Skill en `.claude/skills/<nombre>/SKILL.md` con `name` y `description` | confirmado | code.claude.com/docs/en/skills | 2026-11-01 |
| Importar archivos desde `CLAUDE.md` con `@ruta` | no verificado; no se usa, el archivo guía apunta por texto | — | — |

## Hooks

Se conectan solo los hooks `activo` de `.flow/hooks/INDICE.md`, en `.claude/settings.json` (o en el `hooks/hooks.json` de un plugin).

| Evento abstracto | Evento de Claude Code |
|---|---|
| inicio de sesión | `SessionStart` |
| antes de editar | `PreToolUse`, matcher `Edit\|Write` |
| antes de un commit | `PreToolUse`, matcher `Bash`; el comando está en `tool_input.command` |
| al terminar la respuesta | `Stop` |

Forma de una entrada: `{"hooks": {"PreToolUse": [{"matcher": "Bash", "hooks": [{"type": "command", "command": "<comando>"}]}]}}`. Un `PreToolUse` que sale con código 2 bloquea la acción y su stderr le llega a Claude.

| Dato | Estado | Fuente | Fecha |
|---|---|---|---|
| Eventos, ubicación de la configuración, forma de la entrada, bloqueo con código 2 en `PreToolUse`, nombres de herramienta `Edit`, `Write`, `Bash` y campo `tool_input.command` | confirmado | code.claude.com/docs/en/hooks | 2026-11-11 |
| Cómo `Stop` impide terminar (JSON con `decision: block`) | no verificado; solo se leyó que el código de salida 2 lo devuelve a trabajar | code.claude.com/docs/en/hooks | 2026-11-11 |
| Herramienta `PowerShell` como matcher de comandos en Windows | no verificado | code.claude.com/docs/en/hooks | 2026-11-11 |
