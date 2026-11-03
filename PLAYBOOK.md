# Flow — cómo funciona (para humanos)

Este documento explica el método completo. Las reglas que la IA sigue están en el skill y en el contrato de cada proyecto; esto es para que tú lo entiendas y no se te olvide.

## 1. Las tres capas

```
KIT (este repo)            la fuente; se escribe una vez
   │  setup, una vez por proyecto
   ▼
PROYECTO                   archivo guía de tu IA + skills + carpeta .flow/   (generados)
FUERA DEL REPO             memoria de la IA, skills personales               (tuyo)
```

El estado vive en un solo lugar (`.flow/`). El archivo guía de cada IA (`CLAUDE.md`, `AGENTS.md`…) se genera desde el núcleo: nunca se mantienen copias paralelas. Si cambias de IA, se vuelve a correr el setup.

## 2. Qué hay en `.flow/`

| Pieza | Para qué |
|---|---|
| `config.md` | tus respuestas y las perillas del ciclo; cada campo dice si fue dicho, inferido, asumido o pendiente |
| `INDEX.md` | el router: carpeta o archivo → qué hay → cuándo leerlo |
| `CONTEXT.md` | el contrato: reglas que valen en toda tarea |
| `PRD.md` | qué es el producto; se arma al inicio y se actualiza en cada cierre |
| `capacidades.md` | índice de herramientas y skills disponibles |
| `dominio/` | conocimiento del sistema, referencias externas y decisiones (ADR) |
| `bitacora/` | qué cambió y por qué, ligado al punto de origen |
| `motor/` | el backlog (un archivo por punto) y los planes |
| `modulos/` | estado de los módulos opcionales activos |

## 3. El ciclo

```
PRD ──▶ Backlog ──▶ Plan ──▶ Ejecutar ──▶ Cerrar
 ▲                              │            │
 │                     checkpoint: si falla, │
 │                     se detiene y reporta  │
 └───────────────────────────────────────────┘
        el cierre actualiza PRD, bitácora, versión y backlog
```

1. **Elegir** el punto pedido, o el de mayor prioridad abierto.
2. **Dimensionar.** Grande (toca más de 3 áreas o cruza capas): se propone partirlo en slices y se espera tu OK. Chico y agrupable: se propone un lote.
3. **Plan** en un archivo, antes de tocar código. Su traza se escribe mientras se ejecuta, no al final.
4. **Ejecutar** con checkpoints. Manual: para y espera. Automático: corre los comandos de `config.md`; si algo falla, para y reporta, siempre.
5. **Cerrar:** mover el plan a hechos, marcar el punto, escribir la bitácora (con enlace al punto), actualizar el PRD, subir la versión si está activa, y commit.

El commit de cierre es mecánica: si los checkpoints ya pasaron, no se vuelve a verificar nada por las dudas.

## 4. Un punto

Cada punto del backlog es su propio archivo. Sus campos clave:

- **Criterio de aceptación:** qué debe ser verdad para darlo por hecho.
- **Origen:** de qué sección del PRD o de qué intención nace.
- **Áreas del catálogo que toca:** enlaza con las brechas (ver 6).

Está listo para planificar cuando tiene criterio, tipo y áreas. Si falta algo, la IA pregunta solo eso, al crearlo.

## 5. El setup, sin cuestionario

```
Una pregunta abierta ─▶ se infiere del relato y del código ─▶ máximo 2 rondas cortas
        ─▶ lo demás se asume y se anota ─▶ después, cada punto pregunta lo que le falta
```

Nunca una lista de preguntas. Solo se pregunta lo que bloquea seguir; el resto se asume y queda corregible.

## 6. Decisiones y brechas

El catálogo del kit lista las áreas que todo producto serio debe resolver (stack, datos, identidad, seguridad, accesibilidad…). Responderlas es opcional y nada se restringe. Toda área sin decidir queda **declarada como brecha** en `dominio/decisiones/INDICE.md`, con su «costo de decidir tarde» (alto o bajo).

La investigación de buenas prácticas ocurre **a demanda**: cuando un punto toca una brecha, o cuando tú la pides. Entonces se investiga con fuente y fecha, tú eliges, y queda un ADR. Decidir temprano es barato; construir temprano es caro.

## 7. Navegación por índices

`INDEX.md` → `INDICE.md` de la carpeta → solo el archivo necesario. Toda carpeta con 6 archivos o más, o que crece con el uso, lleva `INDICE.md`. Todo archivo largo empieza con una tabla de contenido. Nunca se lee un historial completo.

El backlog y la bitácora se leen siempre por su índice (ID + resumen de una línea) y se abre solo el punto o la entrada que hace falta. Cada entrada de bitácora declara a qué punto pertenece, y el punto enlaza de vuelta.

## 8. Reglas que no se rompen

- Plan antes de código.
- Test o chequeo roto: parar y reportar.
- Un punto grande no se ejecuta entero sin mostrarte antes cómo se parte.
- La traza es bitácora real, escrita mientras se trabaja.
- No se cierra sin bitácora y sin actualizar el PRD.
- Ponytail: la solución más simple que funcione; también vale para el proceso.
- Un punto que cruza dos repos se parte en dos.
