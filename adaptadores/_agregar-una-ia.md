# Agregar una IA nueva

Crea `adaptadores/<ia>/ADAPTADOR.md` con una tabla que declare:

| Campo | Qué decir |
|---|---|
| Archivo guía | nombre y ubicación, y que se genera desde `nucleo/contexto/guia.base.md` |
| Carga | si la IA lo lee sola en cada sesión o hay que invocarlo |
| Ruta de skills | dónde busca skills (`{{ruta_skills}}`) y el formato que espera |
| Detección | cómo sabe el setup que esa IA es la que está ejecutándolo |
| Extras | archivos de configuración propios (plugins, servidor de desarrollo, memoria) |

Más una sección **Verificación**: cada dato con su estado (confirmado o sin confirmar), su fuente oficial y la fecha. Lo que no esté confirmado se dice, no se da por hecho. Ningún adaptador contiene contenido propio del método: solo dice dónde y con qué formato se coloca lo que el núcleo ya tiene.
