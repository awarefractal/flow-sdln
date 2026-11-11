# Verificar

Chequeos que se corren al final del setup y cada vez que el usuario pida «verificar Flow». Reportan; no corrigen en silencio lo que no sea generado.

| Chequeo | Cómo | Está bien si |
|---|---|---|
| Citas válidas | Cada ruta citada en `INDEX.md` y en los `INDICE.md` | el archivo existe |
| Índices completos | Cada carpeta con 6 archivos o más, o que crece con el uso | tiene `INDICE.md`, y todo archivo de la carpeta aparece en él. Se exceptúan las carpetas del skill (`plantillas/`, `referencia/`): se leen por nombre desde `SKILL.md` |
| Enlaces internos | Enlaces entre archivos de `.flow/` | ninguno roto |
| Puntos | Cada punto en `doing` o `done` | tiene criterio de aceptación |
| Ida y vuelta | Cada entrada de bitácora ↔ su punto | la entrada declara un punto existente y el punto la enlaza |
| Matriz de decisiones | Áreas del catálogo del tipo de proyecto | todas aparecen en `decisiones/INDICE.md` |
| Config | `config.md` | ningún campo sin valor ni origen |
| Copias generadas | Cabecera «Generado por Flow vX» del archivo guía y del skill | coincide con `VERSION` del kit |
| Variables | Archivos generados | ningún `{{variable}}` sin resolver |
| Rastro en vivo | Cada punto `doing` | tiene `toma`, un plan activo con traza, y su `toma` está subida al remoto |
| Bloqueos | `toma`, `bloqueado_por`, `entornos` | ningún punto `doing` tomado por dos; ningún entorno exclusivo declarado por dos; ningún `bloqueado_por` hacia un punto que ya no está `doing` |
| Dependencias | `depende_de` | los IDs existen y no hay ciclos |
| Auditoría | Cada punto `done` | tiene entrada de bitácora con autor, criterios marcados con evidencia, y commits con su ID |
| Bandeja | `bandeja.md` | cada fila triada tiene destino; los pins vencidos se reportan |
| Errores | `errores.md` y «Reglas aprendidas» | toda fila con veces ≥ 2 está en el contrato, y cada regla aprendida cita su fila |
| Puertas | puntos `revision` y `done` | todo `done` pasó por sus puertas obligatorias con veredicto `aprobado`; lo que espera veredicto se reporta con su edad |
| Autonomía | `CONTEXT.md` | tiene «Reglas de autonomía» |
| Tope del contrato | `CONTEXT.md` | no pasa de unas 120 líneas ni de 25 reglas aprendidas; si pasa, se propone un punto `proceso` |
| Backlog externo | `config.md` con `fuente: externa` | todo punto tiene `externo` |
| Hooks | `.flow/hooks/INDICE.md` | todo hook `activo` tiene comando que existe y está conectado en el adaptador |
| Lectura por índices | `CONTEXT.md` y el archivo guía | contienen la regla de navegación |

Reporte corto: lo que falla, dónde y qué hacer. Si todo pasa, una línea.
