# Escenarios de regresión del kit

Especificación para comprobar que un cambio al kit no rompe lo que ya funciona. Se corre a mano, con una IA, sobre un proyecto de ejemplo desechable.

| # | Escenario | Arranque | Resultado esperado |
|---|---|---|---|
| 1 | Setup en un repo vacío | carpeta vacía, relato de dos líneas | `.flow/` completo, archivo guía y skill con la cabecera «Generado por Flow», `verificar.md` sin fallas, y la IA se detiene tras el bootstrap |
| 2 | Tomar un punto | dos sesiones sobre el mismo punto | la segunda recibe el push rechazado, relee y no lo toma |
| 3 | Cierre completo | un punto con plan y criterios | resumen mínimo, plan en `hechos/`, bitácora enlazada, PRD §7 al día, ID en el commit |
| 4 | Puerta obligatoria sin veredicto | una puerta declarada en `config.md` | el punto queda en `revision`, `/flow estado` lo muestra con su edad y no se cierra solo |
| 5 | Incidente | una fila de tipo incidente en la bandeja | se trata como urgencia: bug de prioridad máxima, plan de dos líneas, causa de fondo como punto aparte |
| 6 | Entorno exclusivo | dos puntos que declaran el mismo entorno | el segundo no se toma y se dice la causa y la salida |
| 7 | Hito 2 | un punto de vía rápida y después uno con plan | el hito no corre con el primero; corre al cerrar el segundo, una sola vez |
| 8 | Hito 3 | la primera promoción de un proyecto, exitosa o fallida | la IA ofrece vuelta atrás, verificación posterior, señales y criterios de release, de a una, y no vuelve a ofrecerlo en la segunda promoción |
| 9 | Hito 4 | el primer incidente cerrado y después un segundo | solo el primero ofrece postmortem, regresión y señal; el segundo incidente va por la urgencia normal |
| 10 | Promoción sin mecanismo | `mecanismo de promoción: nada` | no se promueve, queda declarado y trazado, y la construcción no se frena |
