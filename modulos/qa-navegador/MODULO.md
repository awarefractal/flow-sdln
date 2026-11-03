# Módulo: QA en navegador

Pruebas exploratorias reales de la interfaz contra un entorno desplegado. Lo propone el setup al detectar una URL de desarrollo; no lo pregunta.

## Principio

Se verifica contra el **entorno desplegado**, no contra un servidor local, porque lo local puede divergir en datos, marca o código que aún no llegó. `config.md` indica las URLs; `verificacion: local` solo si el usuario lo pide.

## Entornos

- **Desarrollo:** el de todos los días. Se actualiza solo con cada push. Romper cosas aquí está bien.
- **Validación:** para validar un paquete completo antes de promover a producción. Solo cuando el usuario lo pide.

## Dos modos

| Modo | Para qué |
|---|---|
| **Interactivo** (panel de navegador de la IA) | Verificar algo puntual ahora, barato |
| **Grabado** (spec descartable con video e informe) | Cuando hace falta un artefacto para mostrar |

Lo que deba volver a verificarse en cada cambio no es QA exploratoria: pasa a la suite de regresión automatizada del proyecto.

## Sesión

- Nunca se guardan credenciales ni tokens en el repo.
- Si el usuario autoriza guardar una sesión, va a la memoria de la IA o a un archivo local ignorado por git, y se reutiliza mientras siga vigente. Solo si no hay una sesión vigente se pide al usuario que inicie sesión.

## Ahorro de tokens

1. Leer la página (`read_page`, texto) por defecto; capturas solo para lo visual.
2. Agrupar secuencias predecibles en una sola llamada.
3. Reusar una pestaña.
4. No repetir un login con sesión vigente.

## Salida

Informes con la plantilla `reporte-qa` en `.flow/modulos/qa-navegador/informes/`, con su `INDICE.md` cuando la carpeta crezca.

## Fila para `capacidades.md`

| Capacidad | Dónde vive | Úsala cuando… |
|---|---|---|
| qa-navegador | `.flow/modulos/qa-navegador/` | Hay que ver la interfaz real funcionando o un checkpoint lo pide |
