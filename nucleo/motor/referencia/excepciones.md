# Caminos que no son el feliz

## Vía rápida (cambio trivial)

Typo, copy, una constante, un enlace roto: un archivo, sin riesgo, criterio evidente. Se hace sin plan aparte: el punto se crea ya `done` con una línea en su detalle, una fila en el índice y el commit con su ID. No lleva bitácora salvo que el cambio sea estructural. Si al empezar resulta no ser trivial, se sale de la vía rápida y se planifica.

## Urgencia (incidente o hotfix)

Un incidente entra por la bandeja (tipo `incidente`, con evidencia literal) y se convierte en punto `bug` de prioridad máxima. Plan mínimo de dos líneas, la corrección más chica que contenga el daño, checkpoint real y cierre. La causa de fondo no se arregla ahí: queda como punto aparte. Después, el ciclo Aprender: ¿es un error que ya vimos? Se registra en `errores.md`.

## Bug

El primer paso del plan es un test (o reproducción) que falle y queda escrito antes de corregir. Se corrige el código, no el test. El criterio de aceptación es que esa reproducción pase.

## Pivotar o abandonar un plan

Si el plan dejó de tener sentido a medias:

1. Para y nómbralo en la traza, con la razón.
2. Decide con el usuario: pivotar (plan nuevo, el viejo pasa a `hechos/` con «abandonado») o descartar el punto.
3. Lo ya commiteado se queda o se revierte según lo que diga la reversión del plan; nada se borra en silencio.
4. El punto se libera (`coordinacion.md`) y, si se descarta, queda `descartado` **con motivo**.

## Cuándo frenar y preguntar

La IA para y pregunta, en cualquier modo, cuando:

- algo es irreversible (borrar datos, `push --force`, cambios de esquema en producción);
- aparece una brecha que el plan no previó;
- el trabajo real se aparta del plan o del criterio;
- un requisito se contradice con el PRD o con un invariante;
- lleva dos intentos fallidos sobre el mismo chequeo.

## Autonomía por entorno

Se gradúa por el riesgo del entorno, no por ánimo: en desarrollo, libre dentro del plan; en validación, ejecutar y reportar; en producción, preparar y esperar autorización explícita cada vez. Un entorno puede restringir más, nunca menos, que `checkpoints` en `config.md`.

## Investigar sin ensuciar

La investigación de una brecha (fuentes, comparativas, probar opciones) es larga y desordenada. Si la herramienta permite subagentes, se delega y vuelve solo la tabla de opciones con fuentes; si no, se hace en una conversación aparte y se trae el ADR.
