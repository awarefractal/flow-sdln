# Hooks

Un hook es un comando que se dispara en un evento concreto, sin depender de que la IA se acuerde: convierte una regla escrita en una garantía. Este catálogo es la única fuente. Los eventos se nombran en abstracto; cada adaptador (`adaptadores/<ia>/ADAPTADOR.md`, sección «Hooks») dice a qué evento real de su herramienta corresponde. Lo que una herramienta no pueda disparar se cubre con hooks de git o con el CI del repositorio.

Estados: `por implementar` (declarado, sin comando) · `activo` (el adaptador lo conecta) · `apagado`. Cómo agregar, ajustar o apagar uno: `_agregar-un-hook.md`.

En un proyecto, este archivo se copia a `.flow/hooks/INDICE.md`: los hooks propios del proyecto y los de módulos se agregan ahí.

| Hook | Evento | Garantiza | Comando | Origen | Estado |
|---|---|---|---|---|---|
| inicio-de-sesion | inicio de sesión | carga el estado, la bandeja de revisión y los pins vencidos | — | Flow | por implementar |
| toma-antes-de-planificar | antes de editar | el punto está tomado por esta sesión y sin bloqueos | — | Flow | por implementar |
| proteccion-de-lo-generado | antes de editar | no se tocan archivos derivados, ni el test de un bug que se está corrigiendo | — | Flow | por implementar |
| id-en-commit | antes de un commit | el mensaje lleva el ID del punto | — | Flow | por implementar |
| bloqueo-de-cierre | antes de un commit de cierre · al terminar la respuesta | hay evidencia, bitácora y veredicto de las puertas que le tocan al punto | — | Flow | por implementar |

## Eventos abstractos

`inicio de sesión` · `antes de editar` · `antes de un commit` · `al terminar la respuesta`.
