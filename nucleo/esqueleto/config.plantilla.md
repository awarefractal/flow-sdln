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

## Priorización

Con qué criterio la IA elige qué sigue y fija la `prioridad` (alta, media o baja) de cada punto. Gana el primer criterio que desempata. Es un orden por defecto: cámbialo a tu gusto.

| Orden | Criterio | Origen |
|---|---|---|
| 1 | un incidente o un hueco de seguridad abierto | asumido |
| 2 | lo que desbloquea a otros puntos | asumido |
| 3 | lo que cierra una brecha de costo alto de decidir tarde | asumido |
| 4 | más valor para el usuario (PRD §1 y §6) por esfuerzo | asumido |
| 5 | el más antiguo | asumido |

La IA propone y dice en una línea por qué. Si el valor no se ve en el PRD, o dos puntos empatan de verdad, pregunta una vez.

## Versionado

| Campo | Valor | Origen |
|---|---|---|
| activo | {{versionado_activo}} | |
| archivo de versión | | |

## Backlog

| Campo | Valor | Origen |
|---|---|---|
| fuente | `local` (`externa` si vive en una herramienta; ver `referencia/backlog-externo.md`) | asumido |
| herramienta | | |

## Puertas de revisión

| Puerta | Dónde | Qué revisa | Quién revisa | Obligatoria |
|---|---|---|---|---|

Sin filas, no hay puertas. Mecanismo: `referencia/revision.md`. Quién puede aprobar sin una persona detrás: «Reglas de autonomía» de `CONTEXT.md`.

## Producción (opcional)

Ninguna fila bloquea construir. Sin declarar, no se promueve y así queda dicho. Mecanismo: `referencia/produccion.md`.

| Campo | Valor | Origen |
|---|---|---|
| mecanismo de promoción | `nada` (`persona`, `equipo`, `pipeline` u otro) | asumido |
| quién o qué | | |
| disparador | a pedido | asumido |
| cómo se vuelve atrás | sin definir | asumido |
| observar (señales) | no | asumido |

| Señal | Familia | Dónde se mira | Umbral | Al cruzarlo |
|---|---|---|---|---|

Familias: salud, uso, costo. Sin filas, no hay señales.

## Hitos

Momentos que ocurren una vez y en los que la IA ofrece lo que da robustez (`referencia/hitos.md`). Sin fecha, no han ocurrido.

| Hito | Fecha | Origen |
|---|---|---|
| PRD confirmado | | pendiente |
| primer punto terminado | | pendiente |

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
