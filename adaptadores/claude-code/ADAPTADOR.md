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
