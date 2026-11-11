# Agregar, ajustar o apagar un hook

Un hook se declara como una fila de `INDICE.md` de esta carpeta:

| Campo | Qué decir |
|---|---|
| Hook | nombre corto en minúsculas con guiones |
| Evento | uno de los eventos abstractos del catálogo; si hace falta uno nuevo, se agrega ahí con una línea |
| Garantiza | la regla que convierte en garantía, en una línea |
| Comando | el comando que corre y dónde vive; debe poder fallar con un mensaje que diga por qué |
| Origen | `Flow`, `proyecto` o el nombre del módulo que lo trae (con su licencia en `capacidades.md`) |
| Estado | `por implementar`, `activo` o `apagado` |

- **Ajustar:** se edita la fila y se vuelve a conectar con el adaptador.
- **Apagar:** estado `apagado`. No se borra la fila: queda dicho que existió.
- **De un módulo:** el módulo lo declara en su `MODULO.md` y se agrega aquí al activarlo; se apaga con el módulo.
- **Conectar:** el adaptador solo conecta los `activo`. Si su herramienta no tiene el evento, el hook cae a git o al CI y se anota en la fila.
- Un hook que ejecuta código de terceros se declara y pide el OK del usuario antes de activarse.
