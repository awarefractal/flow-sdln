# Catálogo de decisiones — índice

Áreas que todo producto serio debe resolver. Es una lista de preguntas, no de respuestas: responder es opcional y nada se restringe. Lo que queda sin decidir se declara como brecha en `dominio/decisiones/INDICE.md`.

## Cómo se usa

1. El bootstrap elige los archivos que corresponden al tipo de proyecto y vuelca sus áreas a la matriz, todas en brecha.
2. La investigación es **a demanda**: cuando un punto toca una brecha o el usuario la pide. Se busca en la web con fuentes recientes, se presentan opciones con criterios, el usuario elige y queda un ADR.
3. Las fuentes sugeridas son un punto de partida: se verifica su versión vigente antes de citarlas.

## Formato de cada área

Pregunta · opciones comunes · costo de decidir tarde (`alto` o `bajo`) · fuentes sugeridas.

## Qué archivos según el tipo de proyecto

| Tipo | Archivos |
|---|---|
| Aplicación web o SaaS | `comun`, `datos`, `identidad-y-seguridad`, `ux-y-accesibilidad`, `privacidad-y-normativa`, y `plataforma` si atiende a varios clientes |
| Sitio público | `comun`, `ux-y-accesibilidad`, `web-publica`, `privacidad-y-normativa` |
| API o servicio | `comun`, `datos`, `identidad-y-seguridad`, `privacidad-y-normativa` |
| App móvil | `comun`, `datos`, `identidad-y-seguridad`, `ux-y-accesibilidad`, `privacidad-y-normativa` |

Un proyecto puede ser de más de un tipo.

## Archivos

| Archivo | Áreas |
|---|---|
| `comun.md` | stack, arquitectura, entornos, CI/CD, versionado, testing, observabilidad, rendimiento, costos, documentación, dependencias |
| `datos.md` | modelo, base de datos, aislamiento entre clientes, migraciones, backups, retención, almacenamiento |
| `identidad-y-seguridad.md` | login, recuperación, segundo factor, sesiones, permisos, secretos, amenazas, auditoría, límites de uso |
| `plataforma.md` | planes y límites, cuentas y equipos, onboarding, API pública, webhooks, facturación, notificaciones, soporte |
| `ux-y-accesibilidad.md` | navegación, menús, sistema de diseño, modos visuales, responsive, accesibilidad, idiomas, estados, formularios |
| `web-publica.md` | SEO, GEO, rendimiento web, analítica y consentimiento, contenido, cabeceras de seguridad |
| `privacidad-y-normativa.md` | datos personales, consentimiento, derechos, retención, proveedores, incidentes, normativa sectorial |
