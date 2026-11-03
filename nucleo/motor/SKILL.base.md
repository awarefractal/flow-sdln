---
name: flow
description: Motor de trabajo de {{nombre}}. Úsalo cuando el usuario invoque /flow o pida seguir con el backlog, «el próximo punto», crear o cerrar un punto, armar o ejecutar un plan, o hacer el setup o el bootstrap del proyecto.
---

<!-- Generado por Flow v{{flow_version}}. No editar: vuelve a correr el setup. -->

# Flow

Eres el motor de trabajo de este proyecto. El estado vive en `.flow/`; este skill es solo el mecanismo. El detalle de cada paso está en `referencia/` y se lee únicamente cuando el paso lo necesita. Las plantillas de documentos están en `plantillas/` y el catálogo de decisiones en `catalogo/`, junto a este archivo.

## Regla de lectura

Navega siempre por índices: `.flow/INDEX.md` → `INDICE.md` de la carpeta → solo el archivo necesario. Nunca leas completo el backlog ni la bitácora: lee su índice y abre el punto o la entrada puntual.

## Arranque

1. ¿Existe `.flow/motor/backlog/INDICE.md`?
   - **No** → bootstrap: `referencia/bootstrap.md`. Es de una sola vez; después solo corre si el usuario lo pide.
   - **Sí** → ciclo.
2. `/flow estado` (o «cómo viene el backlog»): reporta el índice del backlog y los planes activos. No ejecutes nada.
3. Texto libre que no corresponde a ningún punto («arregla X»): créalo como punto nuevo (ver abajo) y sigue el ciclo sobre él.

## Ciclo (un punto)

1. **Elegir.** El punto pedido o el abierto de mayor prioridad. Di en una línea cuál y por qué.
2. **Dimensionar** → `referencia/dimensionado.md`. Grande: propón slices y espera el OK. Chico agrupable: propón un lote.
3. **Plan.** Archivo nuevo en `motor/planes/activos/<ID>-<slug>.md` con la plantilla `plan`. Sin plan no se toca código. Si el punto es grande o ambiguo, muéstralo antes.
4. **Ejecutar con checkpoints** → `referencia/checkpoints.md`. Una línea de traza por paso y por checkpoint.
5. **Cerrar** → `referencia/cierre.md`. Plan a hechos, punto marcado, bitácora, PRD, versión, commit.

Antes de empezar mira `capacidades.md`: el plan anota qué herramientas aplican. Si falta una que serviría, aplica su regla última.

## Crear un punto

Un punto es un archivo en `motor/backlog/puntos/<ID>.md` (plantilla `punto`) y una fila en `motor/backlog/INDICE.md`. Está **listo para planificar** cuando tiene criterio de aceptación, tipo y áreas del catálogo que toca. Pregunta solo lo que falte, en ese momento y de forma corta. Si el punto toca un área en brecha de `dominio/decisiones/INDICE.md`, el primer paso del plan es cerrarla: investigar con fuente y fecha, el usuario elige y queda un ADR (plantilla `adr`). Los puntos de validación o POC terminan con un informe (plantilla `informe-poc`).

## Reglas que no se rompen

- Plan antes de código.
- Un chequeo roto detiene el trabajo y se reporta, en cualquier modo.
- No partas un punto grande sin mostrar antes la propuesta.
- Lo irreversible (borrar datos, `push --force`, cambios de esquema en producción) siempre se pregunta, en cualquier modo.
- La traza se escribe mientras se trabaja, no al final.
- No se cierra sin bitácora ni PRD al día.
- El cierre (commit y push de lo ya verificado) es mecánica: no dispara verificaciones nuevas.
- Sesiones en paralelo sobre el mismo repo → `referencia/worktrees.md`.

## Referencia

| Archivo | Cuándo |
|---|---|
| `referencia/bootstrap.md` | No existe el backlog |
| `referencia/dimensionado.md` | Paso 2 |
| `referencia/checkpoints.md` | Paso 4 |
| `referencia/cierre.md` | Paso 5 |
| `referencia/worktrees.md` | Hay otra sesión trabajando en el repo |
