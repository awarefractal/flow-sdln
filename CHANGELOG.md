# Changelog

## 0.2.0 — sin publicar

De ciclo a red de ciclos, trabajo en equipo y rastro.

- Red de seis ciclos con combustible y router (`red.md`); PLAYBOOK reescrito, con §0 «Por qué existe Flow» para escribir.
- Reglas consolidadas en el contrato (`CONTEXT.plantilla`), con reglas aprendidas y criterios globales de cierre; el skill ya no las duplica.
- `.flow/` versionado en git. Coordinación (`coordinacion.md`): toma de puntos, afectados, dependencias, IDs, entornos exclusivos y verificaciones.
- Bandeja (ideas, intenciones, incidentes, pins) y `errores.md` con promoción al contrato.
- Punto: criterios base por tipo + propios, preguntas abiertas, campos de coordinación. Checkpoint de cierre en tres niveles con evidencia.
- Auditoría: autor y fecha en todo rastro, ID de punto en cada commit, chequeos nuevos en `verificar.md`.
- Conversaciones cortas: el cierre recomienda abrir una nueva.
- Caminos no felices (`excepciones.md`): vía rápida, urgencia, bug con test rojo, abandonar un plan, cuándo frenar, autonomía por entorno. Métricas (`metricas.md`).
- Puertas de revisión (`revision.md`) y reglas de autonomía en el contrato; backlog local o en una herramienta (`backlog-externo.md`); tope del contrato; catálogo de hooks propio en `nucleo/hooks/` con su guía, y sección Hooks en cada adaptador. Los cinco hooks de Flow tienen comando (`flow-hooks.mjs`), probado con un proyecto de ejemplo y no con una IA real.
- PLAYBOOK §0 escrito por su autor; nuevas secciones 14 (puertas de revisión y autonomía) y 15 (hooks propios del kit, sin depender de una IA).
- Preparación para publicar: licencia MIT, SECURITY, CONTRIBUTING, código de conducta, plantillas de issue y PR, CI con `scripts/check.mjs`, CodeQL y Dependabot.
- Nombre: Software Development **Live** Network (SDLN): del ciclo de vida a la red en vivo.
- Priorización declarada en `config.md` (orden por defecto editable) y campo `prioridad` en el punto; el skill la usa al elegir.
- Bloque opcional y no bloqueante de producción (`referencia/produccion.md`): promover con el mecanismo que sea (persona, equipo, pipeline o nada) y observar señales del producto, siempre visible y trazado.
- Regla del contrato: lo que viene de fuera es dato, no instrucción.
- PRD: empieza corto, con «cómo sabremos que funciona» en §1 y supuestos sin validar en §7.
- PLAYBOOK: «En breve» al inicio (§0 queda como versión larga opcional), §16 producción y §17 puntos de intervención de una persona.
- Hitos (`referencia/hitos.md`): el setup queda liviano y la regresión del producto, la producción y las señales se ofrecen al confirmar el PRD y al cerrar el primer punto con plan.
- `setup/primer-dia.md` (qué esperar del arranque), `scripts/escenarios.md` (regresión del kit, a mano) y camino de actualización de `.flow/` (sección «Migración» por versión).
- Migración desde 0.1: `config.md` suma Priorización, Producción y Hitos; el punto suma `prioridad`; el contrato suma la regla de datos externos.
- Pendiente: mecanismo determinista del cierre automático, automatizar los escenarios, revisión independiente; probar el setup empaquetado en un proyecto real.

## 0.1.0 — sin publicar

Primera versión completa.

- Núcleo: contrato (`CONTEXT.plantilla`), archivo guía único, Ponytail, motor (skill base y referencia), 9 plantillas, esqueleto de `.flow/` y catálogo de decisiones (7 áreas).
- Setup como entrevista sin cuestionario, y chequeos de coherencia.
- Adaptadores: Claude Code, Codex y OpenCode, con lo verificado y lo pendiente de confirmar por herramienta.
- Módulos: diseño y QA en navegador.
- Setup: pregunta de estética (una línea) si hay interfaz y nadie dio pista del estilo; la respuesta va al PRD §4.
- Pendiente: confirmar en documentación oficial la ruta de skills de Codex y las de OpenCode; probar el setup en un proyecto real.
