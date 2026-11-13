# Hitos

El setup es liviano a propósito. Lo que da robustez no se pregunta de entrada: se ofrece cuando tiene sentido, en momentos que ocurren una vez. Un hito se celebra con una línea, la IA propone lo que corresponde y la persona decide. `config.md` guarda la fecha de cada uno («Hitos»); sin fecha no ocurrió, y `/flow estado` lo muestra como pendiente.

## Reglas de todo hito

- **Se ofrece, no se impone.** Cada oferta admite «ahora», «después» o «no». «Después» deja un pin en la bandeja con su disparador. «No» queda declarado, con fecha, y no se vuelve a preguntar.
- **Una cosa a la vez**, en una línea y con una propuesta por defecto.
- **Fuera del resumen mínimo.** Corre después del cierre o de la confirmación, nunca dentro de ellos.
- **Solo lo que falta.** Si `config.md` ya lo resuelve, se omite.

## Hito 1 — PRD confirmado

Al terminar el bootstrap, la IA pregunta una vez si el usuario confirma el PRD como primera versión. Lo que quede «sin confirmar» puede seguir así. Si responde «después», el hito queda pendiente.

Al confirmar: una línea que celebra lo definido (propósito, usuarios, flujos clave), el primer punto sugerido y la fecha en «Hitos».

## Hito 2 — primer punto terminado

El primer punto `done` que tuvo plan (la vía rápida no cuenta). Una vez hecho el commit de cierre, la IA celebra con una línea y ofrece, de a una, lo que da robustez desde ahí:

1. **Escenarios de regresión del producto.** Propone los primeros a partir de los criterios de ese punto y de los flujos clave del PRD §6, y los guarda como tema `regresion` en `dominio/`. Desde entonces, el checkpoint corre los que cada punto toca.
2. **Promoción a producción.** Propone un mecanismo (persona, equipo, pipeline o nada) según lo que haya en el repo, y lo anota en «Producción» de `config.md`. Si elige un pipeline, propone el punto para armarlo (`produccion.md`).
3. **Señales y objetivos de servicio.** Si el producto ya está en uso, propone señales de salud y uso y, si el usuario quiere, un objetivo de servicio (SLO), y activa `observar`. Si aún no hay usuarios, ofrece dejarlo con el disparador «antes de la primera promoción».
4. **Lo barato que falte.** Comandos de test o lint sin declarar, puertas de revisión, reglas de autonomía, criterios de release del PRD §7. Solo lo que aplica a este proyecto.

Cada respuesta se escribe donde corresponde (`config.md`, `dominio/`, la bandeja) y queda anotada en la bitácora del punto. Con eso se marca la fecha del hito.

## Hito 3 — primera promoción a producción

Una vez anotada la primera promoción, salga bien o mal (`produccion.md`), la IA ofrece, de a una:

1. **Cómo se vuelve atrás.** Confirmar o definir «cómo se vuelve atrás» en `config.md` y, si se puede, probarlo.
2. **Verificación posterior.** Un chequeo corto que corre después de cada promoción y queda como parte del mecanismo.
3. **Señales de salud.** Si `observar` está en `no`, activar al menos errores y caídas, con dónde se miran y su umbral.
4. **Criterios de release.** Ajustar los del PRD §7 con lo que esta promoción mostró.

## Hito 4 — primer incidente

Una vez cerrado el primer incidente del proyecto (el bug de urgencia, ver `excepciones.md`), la IA ofrece, de a una:

1. **Postmortem sin culpables.** Una entrada de bitácora con la línea de tiempo, la causa y qué cambia.
2. **Su reproducción como escenario de regresión**, en el tema `regresion` de `dominio/`.
3. **Una señal que lo habría detectado antes**, con su umbral (`observar`).
4. **La regla que lo dejó pasar.** Si vino de una promoción o de algo aprobado sin una persona, revisar la regla de autonomía o el criterio de release correspondiente.

Si la causa de fondo quedó, es otro punto. Si el error se repite, Aprender lo sube a regla.
