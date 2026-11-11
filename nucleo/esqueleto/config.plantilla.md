# Configuración — {{nombre}}

Se edita a mano y se lee antes de cada ciclo. Columna **origen**: `dicho` (lo dijiste) · `inferido` (de tu relato o del código) · `asumido` (valor por defecto; corrígelo si no sirve) · `pendiente` (aún no se sabe).

## Proyecto

| Campo | Valor | Origen |
|---|---|---|
| nombre | {{nombre}} | |
| ia | {{ia}} | |
| idioma del copy | {{idioma}} | |
| registro | {{registro}} | |
| `.flow/` versionado en git | sí (el estado compartido y el rastro dependen de ello) | asumido |
| autor por defecto | persona o IA · sesión, en cada línea de rastro | asumido |

## Comandos

| Campo | Valor | Origen |
|---|---|---|
| test | | |
| e2e | | |
| lint | | |
| build | | |

## Entornos

| Campo | Valor | Origen |
|---|---|---|
| rama de trabajo | | |
| rama de producción | | |
| verificación de cambios observables | desplegado (o `local` si el usuario lo pide) | asumido |

| Entorno | URL o recurso | Exclusivo | Autonomía de la IA |
|---|---|---|---|
| desarrollo | | sí | libre dentro del plan |
| validación | | sí | ejecutar y reportar |
| producción | | — | preparar y esperar autorización cada vez |

`Exclusivo`: solo un punto `doing` puede declararlo en `entornos` (ver `coordinacion.md`). Un entorno compartido por varias sesiones, como una base de datos, se marca `sí`.

## Ciclo

| Campo | Valor | Origen |
|---|---|---|
| checkpoints | `automatico` si hay comando de test, si no `manual` | asumido |
| umbral de slicing | más de 3 áreas ({{areas_del_arbol}}) o más de una capa | asumido |
| agrupar puntos chicos | `preguntar` (`siempre`, `nunca`) | asumido |
| tamaño máximo de lote | 3 | asumido |

## Versionado

| Campo | Valor | Origen |
|---|---|---|
| activo | {{versionado_activo}} | |
| archivo de versión | | |

## Tipos de punto

| Tipo | Bump | Checkpoint | Criterios de aceptación base |
|---|---|---|---|
| feature | minor | test | el flujo funciona de punta a punta en el entorno de verificación · los casos límite del punto están cubiertos |
| bug | patch | test | una reproducción que fallaba ahora pasa · no se tocó el test para lograrlo |
| deuda técnica | patch | test | el comportamiento observable no cambió · los tests existentes pasan |
| seguridad | patch | test | el vector está cerrado y verificado · no se amplió la superficie |
| validación | patch | informe | hay informe con conclusión y fuentes · salen puntos, ADR o descarte |
| decisión | patch | ADR | hay ADR `aceptado` con fuentes y fecha · la matriz de decisiones está al día |
| docs, proceso | patch | revisión | lo escrito coincide con el estado real · los enlaces funcionan |

`major` queda reservado para la promoción a producción. Un lote usa el bump más alto de sus puntos; un slice siempre `patch`. Un tipo nuevo (por ejemplo `sitio`) se añade aquí con su bump, su checkpoint y sus criterios base. Los criterios base se copian al punto al crearlo; los propios se suman. Los criterios que valen para **todo** punto no van aquí: viven en el contrato (`CONTEXT.md`).

## Repos hermanos

| Nombre | Ruta | Para qué |
|---|---|---|

Un punto que cruza dos repos se parte en dos: uno por repo.

## Módulos y normativa

| Campo | Valor | Origen |
|---|---|---|
| módulos activos | | |
| normativa (país y tema) | no | asumido |
