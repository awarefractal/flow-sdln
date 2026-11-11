# Backlog propio o en una herramienta

`config.md` declara dónde vive el backlog, campo `fuente`:

| Fuente | Dónde vive el ítem | Qué guarda Flow |
|---|---|---|
| `local` | `.flow/motor/`: un archivo por punto y un índice | todo |
| `externa` | la herramienta de la organización (Jira, Trello, SwiftKanban u otra) | el enlace al ítem (campo `externo` del punto), y el plan, la traza y la bitácora ligados a su clave. El estado, la prioridad y la asignación los manda la herramienta |

## Reglas

- Cada dato tiene una sola fuente. Si los criterios de aceptación viven en el ítem externo, se leen de ahí; no se mantiene una copia.
- La IA solo trabaja con lo que alcanza a leer y escribir, por conector o línea de comandos. Lo que quede fuera de su alcance se sincroniza a mano: agrega trabajo y se anota.
- Los estados `todo`, `doing`, `revision` y `done` corresponden a las columnas por hacer, en curso, en revisión y hecho.

## Equivalencias aproximadas

Flow simplifica a propósito: un solo tipo de ítem, el punto, con tipo y tamaño. Dependen de cómo cada organización configure su herramienta.

| Flow | Scrum | Kanban | Jira |
|---|---|---|---|
| Punto grande con slices | Épica o historia grande | Tarjeta padre | Epic |
| Slice | Historia | Tarjeta | Story o Sub-task |
| Punto chico | Tarea | Tarjeta | Task |
| Lote | Tarea con subtareas | Tarjetas agrupadas | Task con Sub-tasks |
| feature | Historia de usuario | Clase estándar | Story |
| bug | Defecto | Clase estándar, o expedite si es urgente | Bug |
| deuda técnica | Historia técnica | Clase estándar | Task con etiqueta |
| seguridad | Defecto o historia de seguridad | Expedite si es una vulnerabilidad | Bug o Story con etiqueta |
| validación | Spike | Tarjeta de investigación | Task tipo spike |
| decisión | Spike con ADR | Tarjeta de decisión | Task con ADR enlazado |
| docs, proceso | Tarea | Clase estándar | Task |
| Incidente de la bandeja | Defecto de prioridad máxima | Expedite | Incident o Bug con prioridad Highest |
| Idea de la bandeja | Ítem sin refinar | Tarjeta en la columna de ideas | Idea o Backlog |

## Clasificación

Si la organización necesita distinguir más (componente, equipo, prioridad, clase de servicio), se agrega un campo de clasificación al punto, mapeado a lo que ya usan, sin cambiar el modelo. No se agrega hasta que alguien lo pida.
