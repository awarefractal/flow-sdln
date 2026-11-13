# Cerrar un punto

Estos pasos los ejecuta la IA sola. La persona ve un resumen mínimo (qué se cierra, evidencia, lo que falta) y lo aprueba; con eso corre todo lo demás, sin que nadie recorra el checklist a mano.

Se cierra cuando se cumplen los criterios de aceptación del punto y los globales del contrato. En este orden:

1. **Checkpoint de cierre.** Tres niveles, todos con evidencia literal (salida, respuesta, captura), no «funciona»:
   - los criterios de aceptación del punto: marca cada casilla y anota su evidencia;
   - los criterios globales de cierre de `CONTEXT.md`;
   - si el cambio promueve a producción, además los criterios de release del PRD §7.

   Si `config.md` declara una puerta de revisión que aplica, el punto pasa a `revision` y no a `done` hasta el veredicto (`revision.md`).

   Compara el diff con el plan. Si se apartó, el plan se corrige y la desviación se anota. Si algo no se cumple, no se cierra: se reporta qué falta.
2. **Plan.** Mueve `planes/activos/<ID>-<slug>.md` a `planes/hechos/`.
3. **Punto.** `estado: done` en su archivo, con enlace al plan, y actualiza su fila en `backlog/INDICE.md`.
4. **Bitácora.** Crea `bitacora/entradas/AAAA-MM-DD-<ID>.md` (plantilla `entrada-bitacora`), añade su fila en `bitacora/INDICE.md` y enlázala desde el punto. Si el cambio fue estructural, actualiza también el tema de `dominio/` que corresponda.
5. **PRD.** Actualiza las secciones afectadas, siempre; como mínimo §7 (madurez actual).
6. **Errores y bandeja.** Pasa a `errores.md` los errores y correcciones de la traza (fila nueva, o `veces` + 1). Si una fila llega a 2, escribe su regla de una línea en «Reglas aprendidas» de `CONTEXT.md` y márcala en la columna «En contrato». Lo que quedó pendiente y merece trabajo va a `bandeja.md`.
7. **Capacidades.** Si el punto instaló o quitó una herramienta, actualiza `capacidades.md`.
8. **Versión.** Si `config.md` tiene el versionado activo, sube la versión según el tipo del punto (tabla de `config.md`; no se vuelve a evaluar):
   - Lote: el bump más alto de sus puntos.
   - Slice: siempre `patch`; el cierre del padre aplica el suyo.
   - `major`: solo en la promoción a producción.

   El bump va en el mismo commit de cierre, no en uno aparte.
9. **Liberar** (`coordinacion.md`): limpia `toma` y los `bloqueado_por` que puso este punto.
10. **Commit y push** a la rama de trabajo de `config.md`, con el ID del punto en el mensaje.
11. **Hito.** Si es el primer punto `done` que tuvo plan y `config.md` no tiene la fecha del hito, ya hecho el commit corre el hito 2 (`hitos.md`).
12. **Recomendar conversación nueva.** Dilo en una línea: todo quedó escrito en `.flow/`, así que la siguiente conversación retoma con `/flow estado` sin arrastrar esta. Recomiéndalo con firmeza.

## El cierre es mecánica

Si los checkpoints del plan ya pasaron, el commit y el push se hacen directo: no se re-corren tests, no se re-revisa el diff, no se revisa la revisión. Solo se vuelve a verificar si pasó algo nuevo después del último checkpoint.

## Brechas

Si el punto tocó un área todavía en brecha, avísalo en el resumen del cierre. No bloquea.

## Después

Cuando el cambio es observable, verificarlo contra el entorno de desarrollo forma parte del punto. Promover a producción es una decisión aparte, con los criterios de release del PRD §7; no es parte del ciclo diario. Es un bloque opcional y no bloqueante: `produccion.md`.
