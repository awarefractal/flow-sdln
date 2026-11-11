# Adaptador: Codex

| Campo | Valor |
|---|---|
| Archivo guía | `AGENTS.md` en la raíz del proyecto, generado desde `nucleo/contexto/guia.base.md` |
| Ruta de skills (`{{ruta_skills}}`) | `.agents/skills/` (ver verificación) |
| Formato de skill | carpeta `<nombre>/SKILL.md` con frontmatter `name` y `description` |
| Detección | la sesión que ejecuta el setup es de Codex |

## Generar

1. `AGENTS.md` ← `guia.base.md` con las variables resueltas.
2. `.agents/skills/flow/SKILL.md` ← `nucleo/motor/SKILL.base.md`, y junto a él `referencia/`, `plantillas/` y `catalogo/`.
3. Los skills de los módulos activos, en `.agents/skills/<módulo>/`.

## Verificación

| Dato | Estado | Fuente | Fecha |
|---|---|---|---|
| Skill como carpeta con `SKILL.md` (`name`, `description`) | confirmado | developers.openai.com/codex/skills | 2026-11-01 |
| `AGENTS.md` como archivo de instrucciones del proyecto | formato abierto (agents.md); página oficial de Codex no abierta | — | 2026-11-01 |
| Ruta de proyecto `.agents/skills/` | **sin confirmar en la documentación oficial**: una lista comunitaria la indica y un proyecto real con Codex la usa | — | 2026-11-01 |

Antes de depender de la ruta, confirmarla en la documentación oficial vigente.

## Hooks

Sin verificar: no se confirmó en su documentación oficial qué eventos ofrece. Mientras tanto, los hooks de `.flow/hooks/INDICE.md` se cubren con hooks de git (`pre-commit`, `commit-msg`) o con el CI del repositorio, y se anota en la fila de cada hook. Al verificar la herramienta, se agrega aquí la tabla de eventos y la fuente con su fecha.
