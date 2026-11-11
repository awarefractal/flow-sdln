# Sesiones en paralelo

Si el usuario avisa que hay otra sesión trabajando en este repo, aísla esta en su propio worktree antes de tocar código. Dos sesiones escribiendo en el mismo directorio pisan ediciones sin commitear y compiten por el bloqueo del índice de git. No lo hagas por iniciativa propia: tiene costo.

## Costos

- El trabajo queda en una rama nueva que hay que integrar al terminar.
- Cada worktree necesita sus propias dependencias instaladas.
- Un servidor de desarrollo con puerto fijo solo puede correr en una sesión a la vez.
- Una base de datos compartida sigue compartida: los worktrees no la aíslan.

## Qué elimina

Las colisiones de archivos dentro del mismo directorio de trabajo.
