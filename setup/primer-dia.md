# Tu primer día con Flow

Qué vas a ver, en orden, cuando instales Flow en un proyecto. Sirve para saber qué esperar; lo que la IA ejecuta está en `SETUP.md`.

## Antes

Tu IA abierta en la carpeta del proyecto, nuevo o existente, y el kit de Flow a mano.

## La primera conversación

1. **Tú:** «lee `setup/SETUP.md` del kit Flow y ejecútalo».
2. **La IA lee tu repo** sin preguntarte nada: manifiesto, carpetas, historial, comandos.
3. **Una pregunta abierta.** Cuéntale qué vas a construir, para quién y cómo te lo imaginas, desordenado está bien.
4. **Hasta dos rondas cortas**, de tres preguntas como máximo, solo sobre lo que bloquea seguir y siempre con una opción por defecto («¿asumo X?»). Si hay interfaz y nadie insinuó el estilo, una pregunta más sobre eso.
5. **Se genera todo.** `.flow/` con el estado del proyecto, el archivo guía de tu IA y el skill de Flow.
6. **Bootstrap.** La IA arma un PRD borrador, una matriz con lo que falta decidir y un backlog inicial. Te resume qué encontró, qué asumió y qué brechas hay, y te pregunta si confirmas el PRD como primera versión. Ese es el primer hito.

Después se detiene. No ejecuta nada sin que se lo pidas.

## Tu primer punto

La IA te sugiere uno. Dile «sigue con ese». Toma el punto, hace un plan, trabaja con checkpoints y, al terminar, te muestra un resumen mínimo: qué se cierra, la evidencia y lo que falta. Apruebas y todo se actualiza solo: bitácora, PRD, versión, liberación. Si es tu primer punto terminado, es el segundo hito: la IA te ofrece, de a una cosa, regresión, producción y señales del producto. Tú decides cuándo.

## Mañana

Abre una conversación nueva y escribe `/flow estado`. Todo lo que importa quedó escrito en `.flow/`, así que no hace falta arrastrar la conversación anterior.

## Qué verás en tu carpeta

- Un archivo guía de tu IA (`CLAUDE.md` o `AGENTS.md`) y el skill `flow`, generados: no se editan a mano.
- `.flow/`, que va versionado en git junto al código.
