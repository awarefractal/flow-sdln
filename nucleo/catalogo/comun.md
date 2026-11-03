# Común a todo proyecto

## Stack y lenguaje
- **Pregunta:** ¿qué lenguaje, framework y plataforma de ejecución, y por qué esos?
- **Opciones comunes:** el que domina el equipo; el que exige el ecosistema; el que minimiza operación.
- **Costo de decidir tarde:** alto
- **Fuentes sugeridas:** documentación oficial de cada candidato (versión y soporte vigentes); criterios de selección en un ADR.

## Arquitectura
- **Pregunta:** ¿monolito, monolito modular o servicios? ¿Dónde están las fronteras?
- **Opciones comunes:** monolito modular como punto de partida; servicios solo con una razón medible.
- **Costo de decidir tarde:** alto
- **Fuentes sugeridas:** modelo C4 para describirla; ADR (Michael Nygard) para registrarla.

## Estructura del repositorio
- **Pregunta:** ¿un repo o varios? ¿Cómo se organizan las carpetas?
- **Opciones comunes:** un repo; monorepo con herramientas de espacio de trabajo; repos separados por frontera.
- **Costo de decidir tarde:** bajo

## Entornos y despliegue
- **Pregunta:** ¿qué entornos existen (desarrollo, validación, producción) y cómo se despliega a cada uno?
- **Opciones comunes:** despliegue automático desde rama; promoción manual a producción.
- **Costo de decidir tarde:** bajo
- **Fuentes sugeridas:** 12-factor app (configuración, procesos, paridad dev/prod).

## CI/CD
- **Pregunta:** ¿qué corre en cada cambio y qué bloquea una integración?
- **Opciones comunes:** tests + lint + build en cada push; chequeos de seguridad de dependencias.
- **Costo de decidir tarde:** bajo
- **Fuentes sugeridas:** métricas DORA para medir la entrega.

## Ramas y versionado
- **Pregunta:** ¿qué estrategia de ramas y qué esquema de versiones?
- **Opciones comunes:** una rama de trabajo y una de producción; versionado semántico; commits convencionales.
- **Costo de decidir tarde:** bajo
- **Fuentes sugeridas:** Semantic Versioning; Conventional Commits.

## Testing
- **Pregunta:** ¿qué se prueba, en qué capa y qué cobertura se exige?
- **Opciones comunes:** unitarias para la lógica, e2e para los flujos críticos, contrato para integraciones.
- **Costo de decidir tarde:** bajo

## Observabilidad
- **Pregunta:** ¿cómo se sabe que algo falla en producción antes que el usuario?
- **Opciones comunes:** logs estructurados, métricas, trazas, alertas con responsable.
- **Costo de decidir tarde:** alto
- **Fuentes sugeridas:** OpenTelemetry; el libro de SRE de Google (señales de oro).

## Rendimiento y capacidad
- **Pregunta:** ¿qué carga debe aguantar y qué latencia es aceptable?
- **Opciones comunes:** presupuesto de rendimiento por flujo; pruebas de carga antes de un hito.
- **Costo de decidir tarde:** bajo

## Costos
- **Pregunta:** ¿cuál es el costo por usuario o por operación y qué lo dispara?
- **Opciones comunes:** límites por plan; alertas de gasto en proveedores.
- **Costo de decidir tarde:** bajo

## Documentación
- **Pregunta:** ¿qué se documenta, dónde y quién la mantiene?
- **Opciones comunes:** documentación junto al código; decisiones como ADR.
- **Costo de decidir tarde:** bajo

## Dependencias
- **Pregunta:** ¿cómo se eligen, se fijan y se actualizan las dependencias?
- **Opciones comunes:** versiones fijadas con archivo de bloqueo; revisión periódica.
- **Costo de decidir tarde:** bajo
