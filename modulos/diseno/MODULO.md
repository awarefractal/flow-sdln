# Módulo: diseño

Para proyectos con interfaz. Lo propone el setup al detectar una; no lo pregunta.

## Qué instala

Skills de diseño de interfaz de terceros: criterio contra el diseño genérico, y datos de apoyo (paletas, tipografía, guías UX). El kit no los copia: se instalan desde su origen y se anotan su enlace y su licencia en `capacidades.md`. Si no hay uno instalado, el módulo aplica la regla última de `capacidades.md`.

## Declaración de ejecución

- Un skill de solo texto no ejecuta nada.
- Un skill con scripts (por ejemplo datos más Python) ejecuta código local. Se declara y se pide el OK del usuario antes de instalarlo.

## Cómo se conecta con Flow

- **Contexto de producto:** el skill lee el PRD (§2 a §5) en vez de un `PRODUCT.md` aparte. Al instalar, se ajusta la línea de carga de contexto del skill para que apunte a `.flow/PRD.md`.
- **Sistema de diseño:** `.flow/modulos/diseno/DESIGN.md` (colores, tipografía, espaciado, estados, modos). Si el código ya tiene tokens, el código manda y `DESIGN.md` se deriva de él.
- **Cuándo se usa:** cualquier trabajo de diseño (pantalla, componente, revisión, pulido, copy de interfaz) lo consulta antes de cerrar, y el plan lo anota en «Capacidades aplicables».
- **Límite:** el diseño no justifica ampliar el diff de un arreglo chico; manda Ponytail.

## Fila para `capacidades.md`

| Capacidad | Dónde vive | Úsala cuando… |
|---|---|---|
| diseño | `{{ruta_skills}}/<skill>/` | Hay que diseñar, revisar o pulir una interfaz |

## Por verificar al construirlo

- Que el skill elegido acepte otra ruta de contexto que no sea la raíz del proyecto.
