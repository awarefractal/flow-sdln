# Puertas de revisión

Una puerta es un control en una transición de la red: al pasar un punto a `done`, al aceptar un ADR, al cambiar el PRD, al triar la bandeja. Sin puertas declaradas en `config.md`, no hay revisión aparte y el punto cierra con su checkpoint.

## Qué define una puerta

Una fila de «Puertas de revisión» en `config.md`:

| Campo | Qué dice |
|---|---|
| Dónde | la transición y a qué tipos de punto o nodo se aplica |
| Qué revisa | diff contra plan, criterios con evidencia, un ADR, un cambio al PRD, un diseño |
| Quién revisa | el usuario, un agente en contexto fresco, una persona, un equipo o un área externa |
| Obligatoria | `sí` bloquea la transición; `no` solo avisa |

Quien revisa evalúa contra los criterios de aceptación del punto. Un agente revisor corre en contexto fresco, no en la sesión que escribió el cambio.

## Transiciones

`doing` → `revision` (entrega con plan, traza y evidencia) → `done` (veredicto `aprobado`). Con `observado` o `rechazado`, el punto vuelve a `doing` con el motivo escrito en la traza.

## Veredicto

`aprobado`, `observado` (se corrige y vuelve) o `rechazado`. Se anota en la sección «Revisión» del documento revisado (el punto, el ADR…): fecha, puerta, quién, veredicto, motivo y origen del dato (`dicho`, `inferido`, `asumido` o `pendiente`, como en `config.md`).

## Bandeja de revisión

No es un archivo: es lo que `/flow estado` lista como esperando veredicto, con su edad. Una persona la mira ahí; un agente puede recorrerla en loop.

## Quién puede aprobar

Lo dice una regla de autonomía en «Reglas de autonomía» de `CONTEXT.md`, por puerta, por tipo de punto o por entorno. Puede aprobar un agente, incluso uno externo. **Sin regla escrita, aprueba una persona.**

## Lo que falta se declara

- **Veredicto de un área externa:** es información como cualquier otra, con su origen de dato, autor y fecha. Da igual si se registra a mano o entra desde su herramienta; se anota cuál. Sin veredicto queda `pendiente` y nunca se lee como aprobado.
- **Puerta obligatoria sin atender:** es una brecha, como cualquier decisión que falta. El punto sigue en `revision`; se anota en sus «Preguntas abiertas» (`brecha: puerta <nombre> sin veredicto desde <fecha>`) y `/flow estado` la muestra con su edad. No se aprueba sola ni vence en silencio. Lo que se hace mientras tanto (esperar, avisar al responsable, pedir a otro que revise) lo dice la regla de autonomía de esa puerta.
- **Puerta que solo avisa:** el aviso queda en la traza y el trabajo sigue.
