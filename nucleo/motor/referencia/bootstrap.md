# Bootstrap (una sola vez)

Arma el terreno y **para**. No ejecuta puntos.

Entradas: `config.md` (ya generado por el setup), el repo y lo que el usuario contó.

1. **Leer** `.flow/CONTEXT.md`, `config.md`, la guía de la IA, `dominio/` y el PRD si existen, y el `git log` reciente si hay historial.
2. **PRD.** Si no existe, créalo con la plantilla `prd` a partir del relato del usuario y del código; lo que no se sabe queda marcado «sin confirmar», no inventado. Si existe, no lo reescribas: léelo. Si hay interfaz, §4 lleva la dirección estética; si el setup no la obtuvo y el relato tampoco la da, pregúntala ahora, antes de seguir, con una sola línea. En §7 (madurez actual) escribe una foto honesta, no aspiracional, con la fuente de cada afirmación.
3. **Dominio.** Deja `dominio/INDICE.md` al día. Crea un tema (plantilla `tema-dominio`) por cada área del sistema que ya exista en el código y valga la pena documentar. No rellenes con temas vacíos.
4. **Matriz de decisiones.** Genera `dominio/decisiones/INDICE.md` con las áreas de `catalogo/` que corresponden al tipo de proyecto, todas en `brecha`, cada una con su costo de decidir tarde. Si el código ya evidencia una decisión (el stack, la base de datos), márcala `decidido` y crea su ADR con la fuente «inferido del código».
4b. **Bandeja y errores.** Deja `bandeja.md` y `errores.md` (ya copiados por el setup). Lo que el usuario contó y aún no es trabajo (ideas, intenciones) entra a la bandeja, con fecha y autor.
5. **Backlog inicial.** Siembra puntos reales encontrados en los pasos anteriores: huecos del PRD, riesgos, deuda visible, brechas de costo alto. Nada genérico. Un archivo por punto (plantilla `punto`) y una fila en el índice. Marca candidatos a slicing o lote; no los ejecutes.
6. **Normativa** (solo si `config.md` la declara). Investiga en la web las normas del país y tema indicados, con fuentes oficiales. Una ficha por norma (plantilla `referencia`) con fuente, versión y fecha de consulta, más `dominio/referencias/INDICE.md`. Son resúmenes con fuente, no asesoría legal.
7. **Avisar** al usuario qué se encontró, qué se asumió, qué brechas hay y cuál es el primer punto sugerido. **Parar.**
