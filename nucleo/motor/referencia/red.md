# La red de ciclos

Flow no es una línea; es una red de seis ciclos. Cada uno se activa cuando tiene **combustible**: los documentos y el estado que necesita para correr. Sin combustible, no corre; en su lugar corre el ciclo que lo produce.

## Combustible

| Combustible | Dónde vive | Qué es «listo» |
|---|---|---|
| Relato y PRD claro | `PRD.md` | la sección que importa no dice «sin confirmar» |
| Material crudo | `bandeja.md` | ideas, intenciones, incidentes y pins sin procesar |
| Punto listo | `motor/backlog/puntos/` | criterio, tipo y áreas; sin bloqueo, sin dependencia abierta |
| Decisión | `dominio/decisiones/` | el área tocada está `decidida`, no en brecha |
| Conocimiento | `dominio/` | el tema tocado está al día |
| Errores vistos | `errores.md` | filas con repeticiones y su regla |
| Rastro | traza, bitácora, git | lo ocurrido está escrito |

## Los ciclos

| Ciclo | Se activa con | Produce | Alimenta a |
|---|---|---|---|
| **Captar** | cualquier cosa que aparezca: idea, intención, incidente, algo a revisar | fila en `bandeja.md` | Definir, Explorar, Entregar (un incidente es urgencia) |
| **Definir** | relato inicial; una intención madura; un cierre que cambió la madurez | PRD al día; puntos nuevos en el backlog | Entregar, Decidir |
| **Explorar** | una pregunta abierta o una idea de la bandeja | un punto `validación` con su informe; termina en ADR, puntos nuevos o descarte con motivo | Decidir, Definir |
| **Decidir** | un punto que toca un área en brecha | ADR con fuente y fecha; matriz de decisiones al día | Entregar |
| **Entregar** | un punto listo | código, plan en `hechos/`, bitácora, PRD, versión | Aprender, Definir, Captar (lo que quedó pendiente) |
| **Aprender** | una corrección o error en la traza; un incidente | fila en `errores.md`; con repetición, regla en el contrato | todos, a través del contrato |

Explorar, Decidir y Entregar usan la misma unidad, el **punto**: así todo queda en backlog, bitácora y git. Captar es la excepción: es instantáneo y sin ceremonia.

## Router: qué hacer ahora

Mira el estado y toma el primer caso que aplique:

1. No existe el backlog → bootstrap.
2. Hay incidente en la bandeja sin triar → es urgencia: ver `excepciones.md`.
3. El usuario pidió algo concreto → Entregar sobre ese punto. Si no está listo, corre el ciclo de su combustible faltante: sin criterio, Definir; en brecha, Decidir; con pregunta abierta, Explorar.
4. Sin pedido → `estado`: backlog abierto, pins vencidos, bandeja sin triar. Propón uno; no ejecutes.

Un ciclo nunca se salta su combustible: no se planifica un punto sin criterio ni se construye sobre una brecha abierta.

## Triaje de la bandeja

Cada fila sale con un destino: **punto** (con criterio y tipo), **Explorar** (punto de validación), **PRD** (la intención ya es parte del producto), **descartado** (con motivo) o **pin** (se queda con fecha o disparador de revisión). En la bandeja se anota el destino; no se borra.

## Rastro: todo auditable

Cualquier tramo de cualquier ciclo debe poder reconstruirse, en vivo y a posteriori.

| Ciclo | En vivo | Histórico |
|---|---|---|
| Captar | fila con fecha y autor | git |
| Definir | PRD y puntos nuevos, en el commit de su punto de origen | bitácora, git |
| Explorar | traza del plan | informe, bitácora |
| Decidir | ADR en `propuesto` | ADR `aceptado`/`reemplazado`, con fuentes |
| Entregar | `toma` en el punto, traza del plan | bitácora, plan en `hechos/`, git |
| Aprender | fila en `errores.md` | git, bitácora |

Reglas del rastro: toda línea de traza, entrada, ADR y fila lleva **fecha y autor** (persona o IA, y sesión). El estado se escribe cuando cambia, no al cerrar, y se sube al compartido (ver `coordinacion.md`). El ID del punto va en el mensaje de cada commit.
