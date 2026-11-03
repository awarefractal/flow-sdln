# Checkpoints

Cada checkpoint del plan se resuelve según `checkpoints` en `config.md`:

- `manual`: para, di exactamente qué verificar y cómo, y espera confirmación explícita.
- `automatico`: corre el comando que corresponda (`test`, y `e2e`, `lint` o `build` si el checkpoint lo amerita). Si pasa, sigue sin preguntar.

**Si algo falla, para y reporta, en cualquier modo.** Nunca sigas de largo sobre un chequeo roto.

## Traza

Tras cada paso y cada checkpoint, pase o no, añade una línea fechada a la Traza del plan: qué se hizo, qué comando corrió, qué resultado dio. Incluye tus propios errores y correcciones.

## Brechas

Si al ejecutar aparece un área sin decidir que el plan no previó, no la resuelvas en silencio: detente, nómbrala y propón cerrarla (investigación con fuente y fecha, luego ADR) antes de seguir.

## Verificar de verdad

Si el cambio es observable (interfaz, API, comportamiento), el checkpoint verifica contra el entorno que indica `config.md`, no solo con tests. Si el módulo `qa-navegador` está activo, se usa para eso.
