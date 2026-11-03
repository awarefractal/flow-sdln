# Configuración — {{nombre}}

Se edita a mano y se lee antes de cada ciclo. Columna **origen**: `dicho` (lo dijiste) · `inferido` (de tu relato o del código) · `asumido` (valor por defecto; corrígelo si no sirve) · `pendiente` (aún no se sabe).

## Proyecto

| Campo | Valor | Origen |
|---|---|---|
| nombre | {{nombre}} | |
| ia | {{ia}} | |
| idioma del copy | {{idioma}} | |
| registro | {{registro}} | |
| `.flow/` versionado en git | no | asumido |

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
| URL de desarrollo | | |
| URL de validación | | |
| verificación de cambios observables | desplegado (o `local` si el usuario lo pide) | asumido |

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

| Tipo | Bump | Checkpoint |
|---|---|---|
| feature | minor | test |
| bug, deuda técnica, seguridad, validación, decisión, docs, proceso | patch | test |

`major` queda reservado para la promoción a producción. Un lote usa el bump más alto de sus puntos; un slice siempre `patch`. Un tipo nuevo (por ejemplo `sitio`) se añade aquí con su bump y su checkpoint propios.

## Repos hermanos

| Nombre | Ruta | Para qué |
|---|---|---|

Un punto que cruza dos repos se parte en dos: uno por repo.

## Módulos y normativa

| Campo | Valor | Origen |
|---|---|---|
| módulos activos | | |
| normativa (país y tema) | no | asumido |
