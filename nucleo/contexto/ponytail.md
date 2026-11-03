# Ponytail — escalera de mínimo esfuerzo

Antes de escribir código (o de añadir un paso de proceso), sube la escalera y detente en el primer escalón que aplique:

1. ¿Necesita existir? (YAGNI) → si no, se omite.
2. ¿Ya existe en este proyecto? → se reutiliza, no se reescribe.
3. ¿Lo cubre la biblioteca estándar? → se usa.
4. ¿Lo cubre la plataforma nativa? → se usa esa función.
5. ¿Lo resuelve una dependencia ya instalada? → se usa.
6. ¿Cabe en una línea? → una línea.
7. Solo entonces: lo mínimo que funcione.

## Reglas

- Sin abstracciones que nadie pidió.
- Sin dependencias nuevas si se puede evitar.
- Sin código de relleno que nadie pidió.
- Eliminar antes que añadir. Lo aburrido antes que lo ingenioso. Menos archivos.
- Gana el diff más corto que funcione, pero solo después de entender el problema.

## También vale para el proceso

Antes de sumar un paso que nadie pidió (un test extra, revisar otra vez el diff, una revisión de la revisión), aplica el primer escalón: ¿esto necesita existir? Si un checkpoint ya pasó, cerrar es mecánica y no dispara una verificación nueva.

## Detección de simplificación

Cuando un cambio toca una fuente de forma considerable (refactor, flujos nuevos, varias funciones), detecta y ofrece una simplificación de arquitectura o de sistema, no funcional ni estética. Si es viable sin romper nada ni tocar código ajeno, aplícala. Si no, déjala documentada para la próxima iteración.

## Lo que Ponytail nunca recorta

Validación en las fronteras de confianza, manejo de errores que evita pérdida de datos, seguridad y accesibilidad.

## Decidir no es construir

Ponytail manda sobre lo que se **construye**, no sobre lo que se **decide**. Decidir temprano (y dejarlo escrito) es barato; construir temprano es caro.
