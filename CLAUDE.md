# Flow — Software Development Life Network (SDLN): guía de trabajo del kit

Este repo es el kit de Flow: un framework de trabajo humano + IA, agnóstico de proyecto y de IA. Empieza por `README.md` (mapa) y `PLAYBOOK.md` (cómo funciona).

## Estado

v0.2.0 escrita, preparada para publicar (licencia MIT, docs, CI), sin remoto todavía y sin hacerse pública. El setup solo se probó en seco, nunca con una IA en un proyecto real.

## Reglas de este repo

- **Agnóstico:** ningún nombre, término, ruta o ID de un proyecto concreto. Los ejemplos son genéricos.
- **Una sola fuente:** el contenido vive una vez en `nucleo/`; los adaptadores solo dicen dónde se coloca. Nunca copias paralelas.
- **Minimalismo (Ponytail):** ningún archivo, campo o paso que nadie haya pedido. Todo archivo debe estar citado desde otro.
- **Terceros:** rutas, paquetes y formatos de otras herramientas se verifican en documentación oficial. Lo no confirmado se dice en la sección Verificación del adaptador, con fuente y fecha.
- **Idioma:** español, tuteo. Respuestas cortas y al grano.
- **Git:** commits en español, un cambio lógico cada uno. Sin remoto no hay push.

## Decisiones de diseño (detalle en `PLAYBOOK.md`)

- Flow es todo: archivo guía de la IA + `.flow/` + motor. La raíz del proyecto es `.flow/`, versionada en git junto al código (estado compartido, bloqueos, auditoría).
- La red de ciclos (captar, definir, explorar, decidir, entregar, aprender) reemplaza al ciclo lineal; cada ciclo corre con su combustible (`referencia/red.md`).
- Las reglas viven en el contrato del proyecto (`CONTEXT.plantilla.md`), no en el skill. Errores repetidos suben a regla; el detalle en `errores.md`.
- Un punto se toma y se sube antes de planificar; entornos exclusivos; conversaciones cortas recomendadas al cerrar.
- El PRD se arma al inicio y se actualiza en cada cierre; de él nacen los puntos del backlog.
- Navegación por índices. Backlog y bitácora separados; cada punto y cada entrada en su archivo, enlazados entre sí.
- Setup sin cuestionario: una pregunta abierta, inferir, máximo 2 rondas cortas; lo demás se asume y se anota.
- Catálogo de decisiones: responder es opcional y nada se restringe; lo no decidido queda como brecha. La investigación es a demanda.
- Lo de terceros entra como módulo (`modulos/_agregar-un-modulo.md`). Codex y OpenCode quedan como puente abierto: el usuario usa Claude Code.

## Pendiente

1. Probar el setup con una IA real en un proyecto vacío.
2. Módulo de diseño: confirmar que la skill de diseño acepte leer el contexto desde el PRD.
3. Remoto en GitHub: crear privado, configurar y publicar solo con orden explícita (checklist de la skill `publicar-repo`).
4. Comandos de los hooks (`nucleo/hooks/INDICE.md`, hoy `por implementar`) y cierre automático.
5. Escenarios de regresión del kit; hooks en el adaptador (verificar formato en documentación oficial); revisión independiente en contexto fresco.
