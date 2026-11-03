# Agregar un módulo

Un módulo es una capacidad opcional: una herramienta, skill o método, propio o de terceros. Crea `modulos/<nombre>/MODULO.md` con:

| Campo | Qué decir |
|---|---|
| Qué aporta | una línea |
| Cuándo se propone | la señal que lo activa; el setup lo propone en el resumen, no lo pregunta |
| Qué instala | de dónde viene y su licencia; lo de terceros no se copia al kit |
| Ejecuta código | sí o no; si sí, se pide el OK del usuario antes de instalar |
| Cómo se conecta | qué lee de `.flow/` (PRD, dominio…) y qué escribe, siempre en `.flow/modulos/<nombre>/` |
| Fila para `capacidades.md` | capacidad, dónde vive, cuándo usarla |
| Por verificar | lo que no se pudo confirmar |

Un módulo no cambia el ciclo: aparece en `capacidades.md` y el plan lo anota en «Capacidades aplicables».

Si un punto necesita una capacidad que no existe (por ejemplo, ingeniería inversa), se aplica la regla última de `capacidades.md`: buscar opciones, traerlas al usuario y, si elige una, registrarla como módulo.
