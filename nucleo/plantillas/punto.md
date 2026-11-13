---
id: P000
titulo: Una línea; es lo que aparece en el índice del backlog
tipo: feature
tamano: chico
prioridad: media
estado: todo
padre:
paralelo:
depende_de:
afecta:
entornos:
toma:
bloqueado_por:
externo:
---

# P000 — Título

Tipos y su bump: ver `config.md`. `prioridad` (`alta`, `media`, `baja`): la fija la IA con la «Priorización» de `config.md`. Estados: `todo`, `doing`, `revision` (solo si hay una puerta, ver `referencia/revision.md`), `done`, `descartado` (con motivo). `externo`: enlace o clave del ítem si el backlog vive en una herramienta (`referencia/backlog-externo.md`); vacío si es local. `padre` y `paralelo` (`si` o `no`) solo en slices. `depende_de`, `afecta`, `entornos`, `toma` y `bloqueado_por`: ver `referencia/coordinacion.md`.

## Origen

Sección del PRD, fila de la bandeja (B000) o «hallazgo» / «incidente» con fecha.

## Criterios de aceptación

Qué tiene que ser verdad para darlo por hecho. Cada uno medible y con casilla; al cerrar se marcan con su evidencia.

**Base del tipo** (copiados de `config.md`):
- [ ] …

**Propios de este punto:**
- [ ] …

## Áreas del catálogo que toca

Áreas de `dominio/decisiones/INDICE.md` (ej.: identidad, datos). Si alguna está en brecha, el primer paso del plan es cerrarla.

## Detalle

Contexto completo: qué, por qué, restricciones y decisiones tomadas.

## Preguntas abiertas

Lo que aún no se sabe y puede cambiar el plan. Vacío si no hay.

## Revisión

Solo si el punto pasó por una puerta. Una fila por veredicto: fecha · puerta · quién · veredicto (`aprobado`, `observado`, `rechazado`) · motivo · origen del dato.

## Enlaces

- Plan:
- Bitácora:
- Slices:
