# Dimensionar un punto

Lee en `config.md`: umbral de slicing, agrupar puntos chicos y tamaño máximo de lote.

## Grande → slices

Un punto es grande si toca más áreas que el umbral o cruza más de una capa (UI, API, datos, integración externa). No se ejecuta entero:

1. Propón cómo partirlo en slices ejecutables uno por uno, cada uno con su propio criterio de aceptación.
2. Espera la confirmación del usuario antes de planificar el primer slice.
3. Cada slice es un punto propio (`P012-A`, con `padre: P012`) y tiene su fila en el índice. Marca cada uno `paralelo: si` (puede tomarse a la vez que otros) o `no` (depende de otro slice: lo anota en `depende_de`).
4. Cerrar el último slice no cierra el padre: el padre se cierra con su propio criterio.

## Chico → lote

Un archivo, criterio angosto y otros puntos abiertos del mismo tipo: según `agrupar puntos chicos` (`preguntar`, `siempre` o `nunca`), propón o arma un lote, hasta el tamaño máximo. Un lote tiene un solo plan: `<ID1+ID2>-<slug>.md`.

## Cruza repos

Un punto que toca dos repos se parte en dos puntos, uno por repo. No se cierra un punto con commits en dos repos.

## Ni uno ni otro

Un punto, un plan.
