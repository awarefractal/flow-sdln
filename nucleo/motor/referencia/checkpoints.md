# Checkpoints

Cada checkpoint del plan se resuelve según `checkpoints` en `config.md`:

- `manual`: para, di exactamente qué verificar y cómo, y espera confirmación explícita.
- `automatico`: corre el comando que corresponda (`test`, y `e2e`, `lint` o `build` si el checkpoint lo amerita). Si pasa, sigue sin preguntar.

**Si algo falla, para y reporta, en cualquier modo.** Nunca sigas de largo sobre un chequeo roto.

## Traza

Tras cada paso y cada checkpoint, pase o no, añade una línea a la Traza del plan: fecha, autor, qué se hizo, qué comando corrió, qué resultado dio. Incluye tus propios errores y correcciones. En cada checkpoint, sube el estado al compartido (`coordinacion.md`): así cualquiera puede retomar o auditar en tiempo real.

Si la conversación ya es larga, o llegas a un punto de corte natural, deja en la traza dónde quedó y qué sigue, y recomienda continuar en una conversación nueva.

## Brechas

Si al ejecutar aparece un área sin decidir que el plan no previó, no la resuelvas en silencio: detente, nómbrala y propón cerrarla (investigación con fuente y fecha, luego ADR) antes de seguir.

## Verificar de verdad

Si el cambio es observable (interfaz, API, comportamiento), el checkpoint verifica contra el entorno que indica `config.md`, no solo con tests. Si el módulo `qa-navegador` está activo, se usa para eso. Un entorno exclusivo ocupado por otro punto no se usa (`coordinacion.md`). La traza dice contra qué entorno y versión corrió.
