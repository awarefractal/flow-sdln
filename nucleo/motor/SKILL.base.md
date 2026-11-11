---
name: flow
description: Motor de trabajo de {{nombre}}. Úsalo cuando el usuario invoque /flow o pida seguir con el backlog, «el próximo punto», crear o cerrar un punto, armar o ejecutar un plan, captar una idea o un incidente, o hacer el setup o el bootstrap del proyecto.
---

<!-- Generado por Flow v{{flow_version}}. No editar: vuelve a correr el setup. -->

# Flow

Eres el motor de trabajo de este proyecto. El estado vive en `.flow/`; este skill es solo el mecanismo. Las reglas y los criterios de cierre están en `.flow/CONTEXT.md`: léelo. El detalle de cada paso está en `referencia/` y se lee únicamente cuando el paso lo necesita. Las plantillas de documentos están en `plantillas/` y el catálogo de decisiones en `catalogo/`, junto a este archivo.

## Regla de lectura

Navega siempre por índices: `.flow/INDEX.md` → `INDICE.md` de la carpeta → solo el archivo necesario. Nunca leas completo el backlog ni la bitácora: lee su índice y abre el punto o la entrada puntual.

## Arranque

1. ¿Existe `.flow/motor/backlog/INDICE.md`?
   - **No** → bootstrap: `referencia/bootstrap.md`. Es de una sola vez; después solo corre si el usuario lo pide.
   - **Sí** → la red de ciclos: `referencia/red.md`. Ahí está el router que decide qué ciclo corre según su combustible.
2. `/flow estado` (o «cómo viene el backlog»): reporta el índice del backlog, los puntos tomados y por quién, los planes activos, la bandeja sin triar y los pins vencidos. No ejecutes nada.
3. `/flow metricas`: `referencia/metricas.md`.
4. Algo que surge sin ser trabajo todavía («se me ocurrió», «pasó esto»): captar, una fila en `bandeja.md`.
5. Texto libre que pide trabajo («arregla X»): créalo como punto y sigue el ciclo Entregar sobre él. Si es trivial, vía rápida; si es urgente, urgencia: `referencia/excepciones.md`.

## Entregar (un punto)

1. **Elegir.** El punto pedido o el abierto de mayor prioridad que esté libre. Di en una línea cuál y por qué.
2. **Tomar** → `referencia/coordinacion.md`. Se marca y se sube antes de planificar.
3. **Dimensionar** → `referencia/dimensionado.md`. Grande: propón slices y espera el OK. Chico agrupable: propón un lote.
4. **Plan.** Archivo nuevo en `motor/planes/activos/<ID>-<slug>.md` con la plantilla `plan`. Sin plan no se toca código. Si el punto es grande o ambiguo, muéstralo antes. Revisa `errores.md` por si algún error conocido aplica.
5. **Ejecutar con checkpoints** → `referencia/checkpoints.md`. Una línea de traza por paso y por checkpoint.
6. **Cerrar** → `referencia/cierre.md`. Checkpoint de cierre, plan a hechos, bitácora, PRD, errores, versión, liberar, commit, y recomendar conversación nueva.

Antes de empezar mira `capacidades.md`: el plan anota qué herramientas aplican. Si falta una que serviría, aplica su regla última.

## Crear un punto

Un punto es un archivo en `motor/backlog/puntos/<ID>.md` (plantilla `punto`) y una fila en `motor/backlog/INDICE.md`. Está **listo para planificar** cuando tiene criterios de aceptación (los base de su tipo en `config.md`, más los propios), tipo y áreas del catálogo que toca. Pregunta solo lo que falte, en ese momento y de forma corta. Si el punto toca un área en brecha de `dominio/decisiones/INDICE.md`, el primer paso del plan es cerrarla: investigar con fuente y fecha, el usuario elige y queda un ADR (plantilla `adr`). Los puntos de validación terminan con un informe (plantilla `informe-poc`).

## Referencia

| Archivo | Cuándo |
|---|---|
| `referencia/red.md` | Decidir qué ciclo corre; combustible; triaje; rastro |
| `referencia/bootstrap.md` | No existe el backlog |
| `referencia/coordinacion.md` | Tomar, liberar, dependencias, entornos exclusivos, worktrees |
| `referencia/dimensionado.md` | Dimensionar |
| `referencia/checkpoints.md` | Ejecutar |
| `referencia/cierre.md` | Cerrar |
| `referencia/excepciones.md` | Cambio trivial, urgencia, bug, abandonar un plan, cuándo frenar, autonomía |
| `referencia/metricas.md` | `/flow metricas`, poda del contrato |
