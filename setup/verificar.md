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
| Lectura por índices | `CONTEXT.md` y el archivo guía | contienen la regla de navegación |

Reporte corto: lo que falla, dónde y qué hacer. Si todo pasa, una línea.
