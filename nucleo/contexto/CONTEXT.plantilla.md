# Contrato — {{nombre}}

> Reglas y criterios que valen en TODA tarea. Es corto a propósito: solo entra lo que debe cumplirse siempre. Lo que se consulta según el tema va en `dominio/`; el detalle de los errores, en `errores.md`. Las secciones «Reglas de Flow» y «Criterios globales de cierre» vienen del kit; «Invariantes», «Reglas aprendidas» y los criterios extra son del proyecto y crecen con el uso.

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

## Reglas de Flow

**Proceso**
- Plan escrito antes de tocar código.
- Un chequeo roto detiene el trabajo y se reporta, en cualquier modo.
- Un punto grande no se ejecuta entero sin mostrar antes cómo se parte. Un punto que cruza dos repos se parte en dos.
- Una brecha imprevista no se resuelve en silencio: se para, se nombra y se cierra con un ADR.
- Lo irreversible (borrar datos, `push --force`, cambios de esquema en producción) siempre se pregunta.
- No se cierra sin bitácora, evidencia y PRD al día. El cierre es mecánica: no dispara verificaciones nuevas.

**Rastro**
- La traza se escribe mientras se trabaja, con fecha y autor, y se sube al compartido.
- Todo commit lleva el ID del punto.
- Decidir temprano es barato; construir temprano es caro: lo no decidido se declara como brecha.

**Colaboración**
- Un punto se toma y se sube **antes** de planificar; nadie toma lo tomado, lo bloqueado ni lo que depende de algo abierto.
- Un entorno exclusivo lo usa un solo punto a la vez; no se verifica contra uno que otro está cambiando.
- Sesiones en el mismo repo: cada una en su worktree.

**Cómo se escribe código**
- Quirúrgico (solo lo que la tarea pide), sistémico (se arregla la fuente, no la instancia), una cosa a la vez, sin inventar funcionalidades.
- Se corrige el código, no el test que lo delata.

**Sesiones**
- Conversaciones cortas: con el punto cerrado y todo al día, se abre una nueva. Es lo que hace barato trabajar así.

{{ponytail_resumen}}

## Reglas aprendidas

Una línea por regla, en imperativo, con el error que la originó. Nace de una repetición en `errores.md`; si deja de evitar algo, se poda.

Ninguna todavía.

## Criterios globales de cierre

Valen para todo punto, además de sus criterios de aceptación propios. Todos deben cumplirse, con evidencia, para cerrar.

- [ ] Los criterios de aceptación del punto están marcados, cada uno con su evidencia.
- [ ] Los invariantes se respetan.
- [ ] Los chequeos de `config.md` pasaron.
- [ ] Lo entregado coincide con el plan, o la desviación está anotada.
- [ ] Hay entrada en `bitacora/` enlazada al punto.
- [ ] El PRD está al día.
- [ ] `dominio/` está al día si el cambio fue estructural.
- [ ] Los errores y correcciones de la traza están en `errores.md`.
- [ ] El punto y lo que bloqueaba quedaron liberados.
- [ ] La versión subió, si `config.md` tiene el versionado activo.
{{checklist_extra}}

Los criterios de release del producto (promover a producción) viven en el PRD §7.

## Léxico

{{lexico}}
