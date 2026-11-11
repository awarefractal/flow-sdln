# Métricas

Se calculan de lo que ya existe; no se guarda nada nuevo. Se piden con `/flow metricas` y no se calculan solas. Se mira la tendencia, no el valor suelto: un backlog que crece al descubrir es sano.

## Agilidad

| Métrica | De dónde sale |
|---|---|
| Tiempo de ciclo | `todo` → `done`, por las fechas de `toma` y de la bitácora |
| Trabajo en curso | puntos en `doing` |
| Reaperturas | puntos que volvieron de `done` |
| Costo por punto | tokens o tiempo, si la herramienta los informa; si no, no se estima |

## Incertidumbre (nunca llega a cero; en cero sería falsa confianza)

| Métrica | De dónde sale |
|---|---|
| Incertidumbre decisional | brechas abiertas ponderadas por costo de decidir tarde (alto 3, bajo 1), sobre las áreas del catálogo, en `decisiones/INDICE.md` |
| Incertidumbre de conocimiento | campos `asumido` o `pendiente` de `config.md` y «sin confirmar» del PRD, sobre el total |
| Edad de brechas de costo alto | fecha de cada brecha |
| Tasa de sorpresa | brechas imprevistas aparecidas en ejecución, por punto cerrado |

La tasa de sorpresa expone lo que el catálogo no ve. Si sube, el proceso falla antes que el producto: se hace una retrospectiva del proceso (qué se asumió mal, qué regla falta) y entra a Aprender.

## Cautelas

Cerrar brechas rápido con ADR mediocres baja el número y empeora el producto: contrapesa con ADR reemplazados y con `revisar` vencidos.

## Poda del contrato

Con las métricas, o cada cierto tiempo, se revisa `CONTEXT.md`: una regla que nunca evitó nada se elimina; una sección que crece sin freno se parte hacia `errores.md` o `dominio/`. El contrato corto es el que se lee.
