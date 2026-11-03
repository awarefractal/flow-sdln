# Contrato — {{nombre}}

> Reglas que valen en TODA tarea. Es corto a propósito: solo entra lo que debe cumplirse siempre. Lo que se consulta según el tema va en `dominio/`.

## Qué es

{{descripcion_en_3_lineas}}

## Invariantes

Lo que nunca se rompe en este proyecto. Una violación es un error de diseño, no un tradeoff.

{{invariantes}}

## Cómo se navega

1. Se lee `.flow/INDEX.md`.
2. Se entra a una carpeta por su `INDICE.md`.
3. Se abre solo el archivo necesario.

Toda carpeta con 6 archivos o más, o que crece con el uso, lleva `INDICE.md`. Todo archivo largo empieza con una tabla de contenido. Nunca se lee un historial completo (backlog, bitácora): se lee su índice y se abre el ítem puntual.

## Cómo se trabaja

- Plan escrito antes de tocar código. Si un chequeo falla, se para y se reporta.
- Quirúrgico (solo lo que la tarea pide), sistémico (se arregla la fuente, no la instancia), una cosa a la vez, sin inventar funcionalidades.
- Decidir temprano es barato; construir temprano es caro. Un área sin decidir se declara como brecha en `dominio/decisiones/INDICE.md`.
- Sesiones en paralelo sobre el mismo repo: cada una en su propio worktree.

{{ponytail_resumen}}

## Antes de cerrar cualquier tarea

- [ ] El criterio de aceptación del punto se cumple.
- [ ] Los invariantes se respetan.
- [ ] Los chequeos de `config.md` pasaron.
- [ ] Hay entrada en `bitacora/` enlazada al punto, si el cambio fue relevante.
- [ ] El PRD está al día.
- [ ] `dominio/` está al día si el cambio fue estructural.
- [ ] La versión subió, si `config.md` tiene el versionado activo.
{{checklist_extra}}

## Léxico

{{lexico}}
