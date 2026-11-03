# Cerrar un punto

Se cierra cuando el criterio de aceptación del punto se cumple. En este orden:

1. **Plan.** Mueve `planes/activos/<ID>-<slug>.md` a `planes/hechos/`.
2. **Punto.** `estado: done` en su archivo, con enlace al plan, y actualiza su fila en `backlog/INDICE.md`.
3. **Bitácora.** Crea `bitacora/entradas/AAAA-MM-DD-<ID>.md` (plantilla `entrada-bitacora`), añade su fila en `bitacora/INDICE.md` y enlázala desde el punto. Si el cambio fue estructural, actualiza también el tema de `dominio/` que corresponda.
4. **PRD.** Actualiza las secciones afectadas, siempre; como mínimo §7 (madurez actual).
5. **Capacidades.** Si el punto instaló o quitó una herramienta, actualiza `capacidades.md`.
6. **Versión.** Si `config.md` tiene el versionado activo, sube la versión según el tipo del punto (tabla de `config.md`; no se vuelve a evaluar):
   - Lote: el bump más alto de sus puntos.
   - Slice: siempre `patch`; el cierre del padre aplica el suyo.
   - `major`: solo en la promoción a producción.

   El bump va en el mismo commit de cierre, no en uno aparte.
7. **Commit y push** a la rama de trabajo de `config.md`.

## El cierre es mecánica

Si los checkpoints del plan ya pasaron, el commit y el push se hacen directo: no se re-corren tests, no se re-revisa el diff, no se revisa la revisión. Solo se vuelve a verificar si pasó algo nuevo después del último checkpoint.

## Brechas

Si el punto tocó un área todavía en brecha, avísalo en el resumen del cierre. No bloquea.

## Después

Cuando el cambio es observable, verificarlo contra el entorno de desarrollo forma parte del punto. Promover a producción es una decisión aparte, con los criterios de release del PRD §7; no es parte del ciclo diario.
