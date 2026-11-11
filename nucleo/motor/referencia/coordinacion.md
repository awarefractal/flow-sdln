# Coordinación: varias sesiones, IAs y personas

`.flow/` está versionado: el estado compartido es el de la rama de trabajo en el remoto. Una sesión que no lo sube, no existe para las demás. Aplica igual a dos sesiones tuyas, a dos IAs distintas y a un equipo.

## Tomar un punto

Antes de planificar:

1. Trae lo último (`pull`) y relee la fila del punto.
2. No lo tomes si tiene `toma` ajena, `bloqueado_por` lleno o un `depende_de` que no esté `done`. Di cuál es la causa y cuál es la salida.
3. Márcalo: `estado: doing`, `toma: <autor> · <sesión> · <fecha>`. Si declara `afecta`, marca esos puntos con `bloqueado_por: <ID>`. Si usa un entorno exclusivo, anótalo en `entornos` (ver abajo).
4. Commit chico, solo de estado, con el ID en el mensaje, y `push` **antes** de seguir. Si el push se rechaza, alguien llegó antes: `pull`, relee y re-evalúa; no fuerces.

## Mientras se trabaja

El estado se mantiene casi en tiempo real: la traza del plan y los cambios de estado se suben en cada checkpoint. Es lo que permite abrir una sesión nueva sin perder nada (ver `cierre.md`).

## Liberar

Al cerrar, o al abandonar o pausar: limpia `toma` y quita el `bloqueado_por` que este punto puso. Al pausar, deja en la traza dónde quedó y qué sigue.

## Dependencias

- Hacia atrás: `depende_de` lista lo que debe estar `done` antes. No se empieza antes.
- Hacia adelante: lo que depende de este punto queda esperando solo; el índice lo muestra. Un punto que cambia lo que otro asume se declara en `afecta`.
- Slices: el padre los marca `paralelo` o `serial` al partirlos (ver `dimensionado.md`); solo los paralelos pueden tomarse a la vez.

## IDs y conflictos

Un ID nuevo es el siguiente correlativo del remoto. Si dos sesiones crean el mismo, se renumera el que llegó después, nunca el ya subido. Los conflictos en índices son filas sueltas: se resuelven conservando ambas.

## Entornos y verificaciones

Un entorno compartido (desarrollo desplegado, base de datos, un puerto fijo) puede pisarse. En `config.md`, cada entorno dice si es `exclusivo`.

- Un punto que va a desplegar o verificar contra un entorno exclusivo lo declara en `entornos`. Dos puntos `doing` no pueden declarar el mismo.
- Si está ocupado: espera, pide al dueño de la `toma`, o verifica en local. No verifiques contra un entorno que otro está cambiando: el resultado no vale.
- Toda verificación dice contra qué entorno y qué versión corrió; es parte de la traza.

## Mismo directorio

Dos sesiones en el mismo directorio de trabajo pisan ediciones sin commitear y compiten por el bloqueo del índice de git. Cada sesión escribe en su propio worktree.

- El trabajo queda en una rama nueva que hay que integrar al terminar.
- Cada worktree necesita sus propias dependencias.
- Un servidor con puerto fijo corre en una sola sesión a la vez.
- Una base de datos compartida sigue compartida: los worktrees no la aíslan, por eso existe `entornos`.
