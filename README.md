# Flow

Framework de trabajo humano + IA. Convierte una idea en un producto con trazabilidad: un PRD que se mantiene vivo, un backlog que se lee por índices, planes escritos antes de tocar código y un cierre que deja todo al día. No depende del proyecto ni de la IA que se use.

> Estado: v0.1.0, primera versión completa, sin publicar (ver `CHANGELOG.md`). Cómo funciona, explicado para humanos: `PLAYBOOK.md`.

## Cómo se usa

En el proyecto, con tu IA abierta: «lee `setup/SETUP.md` del kit Flow y ejecútalo». El setup te hace una pregunta abierta, infiere el resto y genera `.flow/` más el archivo guía y el skill de tu IA.

## Mapa del kit

```
flow/
├─ README.md · PLAYBOOK.md · VERSION · CHANGELOG.md · LICENSE (fantasma)
├─ setup/
│  ├─ SETUP.md                     protocolo de entrevista, sin cuestionario
│  └─ verificar.md                 chequeos de coherencia
├─ nucleo/
│  ├─ contexto/
│  │  ├─ CONTEXT.plantilla.md      el contrato del proyecto
│  │  ├─ guia.base.md              fuente única del archivo guía de cualquier IA
│  │  └─ ponytail.md               la escalera de mínimo esfuerzo
│  ├─ motor/
│  │  ├─ SKILL.base.md             el ciclo; es el índice del mecanismo
│  │  └─ referencia/               bootstrap · dimensionado · checkpoints · cierre · worktrees
│  ├─ plantillas/                  formato de lo que la IA crea al trabajar
│  ├─ esqueleto/                   lo que el setup copia a .flow/
│  └─ catalogo/                    áreas de decisión por tipo de proyecto
├─ adaptadores/                    claude-code · codex · opencode · _agregar-una-ia.md
└─ modulos/                        diseno · qa-navegador · _agregar-un-modulo.md
```

## Qué genera en un proyecto

```
<proyecto>/
├─ CLAUDE.md | AGENTS.md           generado desde nucleo/contexto/guia.base.md
├─ <ruta de skills>/flow/          SKILL.md + referencia/ + plantillas/ + catalogo/
└─ .flow/                          config · INDEX · CONTEXT · PRD · capacidades
   ├─ dominio/                     INDICE · vigencia-docs · decisiones/ · (referencias/)
   ├─ bitacora/                    INDICE · entradas/
   ├─ motor/                       backlog/ (INDICE · puntos/) · planes/ (activos · hechos)
   └─ modulos/<m>/                 solo los activos
```

## Convenciones

- `{{variable}}` lo rellena el setup; la tabla de variables está en `setup/SETUP.md`.
- `*.plantilla.md` y `*.base.md` se copian al proyecto con las variables resueltas. Los archivos de `plantillas/` sin ese sufijo son el formato de documentos que la IA crea mientras trabaja.
- Una sola fuente: el proyecto recibe copias generadas; lo generado no se edita a mano, se vuelve a correr el setup.
- Minimalismo como regla general: ningún archivo, campo o paso que nadie haya pedido.
- Se navega por índices: `INDEX.md` → `INDICE.md` de la carpeta → solo el archivo necesario.
- Lo que depende de herramientas de terceros (adaptadores) declara qué está verificado y qué no, con fuente y fecha.
