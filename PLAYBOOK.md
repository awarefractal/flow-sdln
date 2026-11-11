# Flow — Software Development Life Network: cómo funciona (para humanos)

Este documento explica el método. Las reglas que la IA sigue viven en el contrato de cada proyecto (`CONTEXT.md`) y en el skill; esto es para que tú lo entiendas y no se te olvide.

## Índice

0. Por qué existe Flow · 1. Las tres capas · 2. Qué hay en `.flow/` · 3. La red de ciclos · 4. Forma de trabajo · 5. Equipo: estado compartido y bloqueos · 6. Un punto y sus criterios · 7. Bandeja, backlog y PRD · 8. Errores que no se repiten · 9. Auditoría · 10. Setup sin cuestionario · 11. Decisiones y brechas · 12. Navegación por índices · 13. Dónde viven las reglas · 14. Puertas de revisión y autonomía · 15. Hooks

## 0. Por qué existe Flow

### Un par de alcances sobre los modelos de trabajo

1. El "Happy path" es, de hecho, un caso de borde. El usuario adapta el producto a su contexto, una mentalidad de producto edge case first es una buena idea.
2. Todo playbook debiera ser solo un setup inicial, la primera foto, la evolución 0.
3. La incertidumbre es la primera, inevitable e inherente característica sobreviviente desde los primeros procesos analógicos, que siempre prevalecerá.

### La paradoja de la hiperconexión y la desconexión de las organizaciones

A medida que una organización escala en tamaño, las conexiones entre los miembros experimentan un crecimiento polinómico, y si a esto sumamos la formación de áreas, equipos, frentes, y/o tribus, squads, chapters y cualquier otra topología, el crecimiento se transforma en exponencial (2ⁿ). Esto implica que un mensaje es cada vez más propenso a llegar tarde y deformado, por lo que se establecen formas, estándares, cadencias, sistemas, etc etc = burocracia.

Cuando el costo es el tiempo y la moneda es la burocracia, la red empieza a aislar partes (los equipos se desconectan, las personas se desconectan, los sistemas se llenan de reglas, los procesos se hacen pesados) y comienza el fenómeno del tironeo entre los "expertos" (roles consultivos o de diseño cuya labor es pensar los procesos, ej: Arquitectura de software, área de procesos, área de estrategia) y los "operadores" (roles dedicados a usar esos procesos para realizar su trabajo, ej: desarrolladores, equipos de producto).

Parte de los problemas de estas dinámicas es que si los operadores no tienen un mecanismo propio de regulación de los procesos, estos se vuelven ley universal, inalterable, lo que es obsoleto en entornos de alta incertidumbre. Además si los expertos no deben transitar los procesos que ellos mismos crean, caen en un mar de sesgos donde los resultados sin consecuencias para ellos alimentan el modelo.

Para graficar con un ejemplo: si las tropas del general San Martín hubieran tenido un equipo de expertos diciéndoles cómo viajar a los operadores, estos bien podrían haber recomendado un cruce en ponis y cabras (consumen menos recursos, son más fáciles de guarecer, causan ternura, y ni hablar del desempeño de las cabras en senderos montañeses, además de dar leche y abrigo), habrían tenido razón pero habiéndoles faltado mucha información.

### La llegada de la inteligencia artificial

El santo grial de los procesos siempre ha sido la automatización, ha habido numerosos intentos, y siempre hemos ganado alguna ventaja, pero ahora va en serio, producir código, revisarlo, productivizarlo, nunca había sido tan accesible. Como dice el playbook [The AI-Native SDLC](https://claude.com/es/resources/articles/the-ai-native-sdlc-playbook) de Anthropic, "el cuello de botella ya no es el código", pero ojo, lo que no dicen es que esto se cumple siempre y cuando entendamos, mantengamos, mejoremos, y tengamos claro el propósito de ese código, de lo contrario puede volverse una pesadilla, el collar más caro que el perro, otra vez pensadores vs hacedores.

Aunque la IA sea una gran herramienta potenciadora, agregar el prefijo "Ai" al inicio de tu SDLC, no te acerca en lo más mínimo a sacar buen software, o buenos productos, sin el cuidado suficiente, puede ser un espejismo que te aleja cada vez más.

Volviendo a San Martín, ahora los expertos estarían recomendando ponerle un motor al pony, y montar las cabras en un dron. Estaríamos potenciando algo que es desde las raíces, incorrecto.

### Volver a las raíces.

Al final siempre se trató de lo más simple, solo que está sumergido en capas y capas de brillo, la mayoría de las veces innecesario.

- El trabajo es tan pesado como lo sean sus procesos.
- Siempre necesitaremos buenos insumos y materia prima.
- Decidir temprano abarata, construir de más encarece.
- No decidir es una decisión (y en muy pocos casos es una buena).
- Cambiar de rumbo no es un defecto, es una parte sana del proceso.
- La claridad y la incertidumbre son cualidades que deben ser declaradas.
- La exploración y experimentación importan mucho.
- Las conversaciones importan mucho.
- La trazabilidad importa mucho.

### Para desarrollar un producto enterprise no hace falta una gran herramienta

Ya hablamos del gran coste de un gobierno interno pesado, lo corrosivo de la burocracia y el doble filo de la complejidad organizacional.

Aquí vive un modelo, que como se dijo antes, debe ser un setup inicial, sujeto de cambios y evoluciones, siempre en pos de bajar la complejidad, mantener la grasa de procesos a raya y entregar calidad (Calidad se lee como lo que el usuario realmente necesita, y va a usar, y no va a renegar), y su nombre es flow.

Flow no viene estrictamente de "flujo", como una imposición, sino de "fluir", el comportamiento de un líquido avanzando por los caminos óptimos, sin prisa y sin pausa, de manera orgánica e inherentemente "correcta".

### Flow

A continuación vienen varias hojas con propuestas de uso, bloques organizados que pueden ser reemplazados por conveniencia, por gusto, por relevancia, por políticas, por gestión del cambio o porque se te canten las ganas, la idea es buscar que las cosas fluyan, que lleguen a puerto y que el resultado sea útil.

Si bien flow está diseñado para que pueda ser usado por una persona sola, por una persona con su IA favorita, por una persona con varias IAs, por equipos de personas con equipos de IAs, es, desde sus cimientos, agnóstico de cualquier LLM, de cualquier proyecto, o de cualquier tipo de producto digital, aunque está probado en diversos proyectos de desarrollo de software.

La experimentación/exploración tiene protagonismo aquí, explorar es uno de los ciclos de primera clase de esta denominada red de ciclos, no es costo hundido. Esto nos ayuda a saber qué se decide, qué se asume, qué falta (claridad + incertidumbre medidas), nos ayuda a aprender de los errores y transformarlos sistémicamente en nuevos buenos acuerdos, nos ayuda a tener un baúl de cosas con sentido por hacer.

Las intenciones son una chispa que debe atenderse, también son parte del combustible de nuestra red de ciclos.

Tener conversaciones cortas y frecuentes dentro de cualquier parte de la red, ahorra tokens y nos hace ganar en precisión.

Tenemos una nueva ventaja, la memoria compartida de los proyectos, podemos tener trazabilidad, auditoría, timonazos seguros, y esto es una ventaja de borde para el escalamiento organizacional, es la manera en que esto le puede servir a una sola persona, o a un entorno colaborativo completo metiendo las manos, y "entorno" no significa solamente devs mergeando sin cesar, significa también que herramientas de desarrollo, de calidad, de gestión, de comunicación, de versionamiento, o de apoyo en cualquier parte del flujo, expertos y consultores, pueden ser incluidos y combinados de forma sana. La visión organizacional de ecosistema que siempre se ha buscado, está más a mano que nunca.

Siéntase libre de encontrar referencias de otros modelos, comparar, sacar conclusiones y proponer mejoras, flow es un descendiente de modelos tradicionales de desarrollo, de shop floor management, de modelos de agilidad, de agilidad escalada, de heridas de guerra corporativa, de energía de las startups y de muchos años de hacer producto, condensados y ordenados con intención, con propósito, y con mucho cariño.

✍︎ Escrito letra a letra por un humano · [verificar en gutmbrg](https://app.gutmbrg.com/p/djruNccm)

## 1. Las tres capas

```
KIT (este repo)            la fuente; se escribe una vez
   │  setup, una vez por proyecto
   ▼
PROYECTO                   archivo guía de tu IA + skills + carpeta .flow/   (generados)
FUERA DEL REPO             memoria de la IA, skills personales               (tuyo)
```

El estado vive en un solo lugar (`.flow/`), **versionado en git junto al código**. El archivo guía de cada IA (`CLAUDE.md`, `AGENTS.md`…) se genera desde el núcleo: nunca se mantienen copias paralelas. Si cambias de IA, se vuelve a correr el setup.

## 2. Qué hay en `.flow/`

| Pieza | Para qué |
|---|---|
| `config.md` | tus respuestas, perillas del ciclo, entornos y tipos de punto con sus criterios base; cada campo dice si fue dicho, inferido, asumido o pendiente |
| `INDEX.md` | el router: carpeta o archivo → qué hay → cuándo leerlo |
| `CONTEXT.md` | el contrato: reglas, reglas aprendidas y criterios globales de cierre |
| `PRD.md` | qué es el producto; se arma al inicio y se actualiza en cada cierre |
| `bandeja.md` | lo que aún no es trabajo: ideas, intenciones, incidentes, pins |
| `errores.md` | errores recurrentes y la regla que los evita |
| `capacidades.md` | índice de herramientas y skills disponibles |
| `dominio/` | conocimiento del sistema, referencias externas y decisiones (ADR) |
| `bitacora/` | qué cambió y por qué, ligado al punto de origen |
| `motor/` | el backlog (un archivo por punto) y los planes; si el backlog vive en una herramienta externa (campo `fuente` de `config.md`), aquí queda el enlace a cada ítem y Flow guarda el plan, la traza y la bitácora ligados a su clave |
| `modulos/` | estado de los módulos opcionales activos |

## 3. La red de ciclos

Flow no es una línea PRD → código → cierre. Es una **red de seis ciclos** que se alimentan entre sí. Cada uno se activa cuando tiene **combustible**: los documentos y el estado que necesita (un PRD claro, un punto con criterio, una decisión tomada, un backlog listo). Sin combustible no corre; corre el ciclo que lo produce.

```
                    ┌──────────── Captar ◀──── cualquier cosa que aparezca
                    │          (bandeja)       (idea · intención · incidente · pin)
                    ▼                ▼
               Definir ◀───────▶ Explorar
                (PRD)          (preguntas, POC)
                    │                │
                    ▼                ▼
                 puntos ──────▶ Decidir ──▶ ADR
                    │          (brechas)
                    ▼
                Entregar  (elegir → tomar → plan → ejecutar → cerrar)
                    │
                    ▼
                Aprender ──▶ reglas del contrato ──▶ todos los ciclos
              (errores.md)
```

| Ciclo | Se activa con | Produce |
|---|---|---|
| Captar | cualquier cosa que aparezca | una fila en la bandeja |
| Definir | relato inicial; una intención madura; un cierre que cambió la madurez | PRD al día, puntos nuevos |
| Explorar | una pregunta abierta o una idea | un informe que termina en ADR, puntos o descarte |
| Decidir | un punto que toca una brecha | un ADR con fuente y fecha |
| Entregar | un punto listo | código, bitácora, PRD, versión |
| Aprender | una corrección o un incidente | una regla en el contrato |

Ejemplo: pides «login con Google». Entregar mira el punto: está listo en criterios, pero toca identidad, que está en brecha. Falta combustible, así que corre **Decidir**: se investiga, eliges y queda un ADR. Recién ahí corre Entregar. Al cerrar, el error que tuviste se anota; es la segunda vez, así que **Aprender** lo sube al contrato. Una idea que surgió a mitad de camino entró a la bandeja sin interrumpir nada.

El router completo, el combustible y el triaje están en `nucleo/motor/referencia/red.md`.

## 4. Forma de trabajo: conversaciones cortas

Una conversación larga arrastra todo lo anterior en cada mensaje: cuesta más y se vuelve menos precisa. Flow existe para que no haga falta, porque el estado se escribe mientras se trabaja:

- Mantén las iteraciones de una misma conversación **lo más bajas posible**.
- Al cerrar un punto, la IA te recomienda abrir una conversación nueva. Hazlo apenas puedas. La nueva retoma con `/flow estado`, sin perder nada.
- A mitad de camino, si la conversación ya es larga, la IA deja en la traza dónde quedó y qué sigue, y sugiere el corte.

## 5. Equipo: estado compartido y bloqueos

Todo lo vivo (backlog, bitácora, bandeja, errores, planes) está versionado. Eso escala la forma de trabajo a varias sesiones, IAs y personas sin que se pisen:

- Al tomar un punto, la sesión lo marca (`toma`) y lo **sube antes de planificar**. Si alguien llegó antes, el push se rechaza y se re-evalúa.
- Si el punto afecta a otros, también los bloquea mientras dure. Si depende de otros que no están hechos, no se toma. Cada causa y su salida se dicen.
- Los entornos compartidos (desarrollo desplegado, base de datos) se declaran **exclusivos** en `config.md`: un solo punto a la vez los usa, y las verificaciones se hacen sobre un entorno que nadie está cambiando.
- Al cerrar o pausar, se libera todo.

Detalle: `nucleo/motor/referencia/coordinacion.md`.

## 6. Un punto y sus criterios

Cada punto del backlog es su propio archivo. Sus campos clave:

- **Criterios de aceptación:** los base de su tipo (en `config.md`) más los propios, cada uno medible y con casilla.
- **Origen:** de qué sección del PRD, fila de la bandeja o incidente nace.
- **Áreas del catálogo que toca:** enlaza con las brechas (ver 11).
- **Dependencias, afectados y entornos:** para coordinar (ver 5).

Hay tres niveles de criterios, de arriba hacia abajo:

| Nivel | Qué valida | Vive en |
|---|---|---|
| Release | si el producto puede promoverse a producción | PRD §7 |
| Globales | lo que todo punto cumple para cerrar | `CONTEXT.md` |
| Del punto | lo que ese punto debe lograr | su archivo, con base por tipo |

El **checkpoint de cierre** verifica los tres con evidencia literal, y compara lo entregado con el plan.

## 7. Bandeja, backlog y PRD

| | Qué es | Cuándo entra | Cuándo sale |
|---|---|---|---|
| **Bandeja** | material crudo: ideas, intenciones, incidentes, pins | al instante, una fila | por triaje: punto, explorar, PRD, descarte o pin |
| **Backlog** | trabajo comprometido, con criterio y tipo | cuando alguien decide hacerlo | al cerrarse o descartarse con motivo |
| **PRD** | qué es el producto hoy y por qué | al inicio y en cada cierre | nunca; se actualiza |

Los pins tienen fecha o disparador de revisión: `/flow estado` avisa cuando vencen. Un incidente es la entrada de una urgencia.

## 8. Errores que no se repiten

La IA anota los errores y correcciones de la traza en `errores.md` al cerrar. A la segunda vez, el error sube al contrato como una regla simple de una línea que cita su fila. El contrato queda corto; el detalle vive en `errores.md`, que pasa a carpeta con índice si crece. Cada cierto tiempo se poda lo que ya no sirve.

## 9. Auditoría

Todo tramo de cualquier ciclo se puede reconstruir, en vivo y después:

- **En vivo:** el estado se escribe cuando cambia y se sube al compartido; la traza y las tomas dicen qué pasa ahora y quién.
- **Histórico:** bitácora, planes hechos, ADR, `errores.md` y el historial de git, con el ID del punto en cada commit.
- **Atribuido:** todo rastro lleva fecha y autor (persona o IA, y sesión).

La tabla por ciclo está en `red.md`.

## 10. Setup sin cuestionario

```
Una pregunta abierta ─▶ se infiere del relato y del código ─▶ máximo 2 rondas cortas
        ─▶ lo demás se asume y se anota ─▶ después, cada punto pregunta lo que le falta
```

Nunca una lista de preguntas. Solo se pregunta lo que bloquea seguir; el resto se asume y queda corregible. Con interfaz, bloquea también el estilo: si nadie lo insinuó, se pregunta una vez, para no caer en el diseño genérico.

## 11. Decisiones y brechas

El catálogo del kit lista las áreas que todo producto serio debe resolver (stack, datos, identidad, seguridad, accesibilidad…). Responderlas es opcional y nada se restringe. Toda área sin decidir queda **declarada como brecha** en `dominio/decisiones/INDICE.md`, con su «costo de decidir tarde» (alto o bajo).

La investigación de buenas prácticas ocurre **a demanda**: cuando un punto toca una brecha, o cuando tú la pides. Entonces se investiga con fuente y fecha, tú eliges, y queda un ADR. Decidir temprano es barato; construir temprano es caro.

## 12. Navegación por índices

`INDEX.md` → `INDICE.md` de la carpeta → solo el archivo necesario. Toda carpeta con 6 archivos o más, o que crece con el uso, lleva `INDICE.md`. Todo archivo largo empieza con una tabla de contenido. Nunca se lee un historial completo. Backlog y bitácora se leen por su índice (ID + resumen de una línea) y se abre solo el punto o la entrada necesaria; cada entrada declara su punto y el punto enlaza de vuelta.

## 13. Dónde viven las reglas

| Capa | Qué contiene | Dónde vive | Quién la cambia |
|---|---|---|---|
| Reglas de Flow | proceso, rastro, colaboración, código, sesiones | `CONTEXT.md`, sección «Reglas de Flow» (viene de `CONTEXT.plantilla.md` del kit) | el kit |
| Invariantes | lo que nunca se rompe en *este* proyecto | `CONTEXT.md` | tú |
| Reglas aprendidas | una línea por error repetido | `CONTEXT.md`, con el detalle en `errores.md` | Aprender |
| Criterios globales | qué debe cumplir todo cierre | `CONTEXT.md` | tú |
| Reglas de autonomía | quién puede aprobar sin una persona detrás, por puerta o por entorno (§14) | `CONTEXT.md` | tú |
| Mecanismo | cómo se ejecuta cada paso | el skill `flow` (`referencia/`) | el kit |

La IA lee `CONTEXT.md` al empezar cualquier tarea; por eso las reglas están ahí y no solo en el skill. Aquí no se copian: se explican. La lista autoritativa es la del contrato.

Excepciones, caminos no felices, métricas y autonomía por entorno: `excepciones.md` y `metricas.md` en la referencia del skill.

## 14. Puertas de revisión y autonomía

Cualquier transición de la red puede tener una **puerta de revisión**: al pasar un punto a hecho, al aceptar un ADR, al cambiar el PRD, al triar la bandeja. Cada puerta dice dónde, qué revisa, quién revisa (tú, un agente en contexto fresco, una persona, un equipo o un área externa), qué veredictos admite (aprobado, observado, rechazado, siempre con motivo, autor y fecha) y si es obligatoria. Se declaran en `config.md`, y lo que espera veredicto aparece en una sola bandeja de revisión.

**Quién aprueba sin una persona detrás es una regla de autonomía.** Vive donde viven las demás reglas (§13): en el contrato, que la IA lee antes de cualquier tarea. La escribes tú, por puerta, por tipo de punto o por entorno, y puede decir que un agente aprueba solo (incluso uno externo) o que una parte siempre lleva a una persona.

**Lo que falta se declara, como todo lo demás:**

- El veredicto de un área externa es información como cualquier otra: tiene estado (dicho, inferido, asumido, pendiente), fuente, autor y fecha. Da igual si se registra a mano o entra desde su herramienta; sin veredicto queda pendiente y nunca se lee como aprobado.
- Una puerta obligatoria sin atender es una decisión que falta: se declara la brecha (§11). La transición queda detenida, aparece en la bandeja de revisión y en `/flow estado` con su edad, y no se aprueba sola ni vence en silencio. Lo que se hace mientras tanto lo dice la regla de autonomía de esa puerta.

## 15. Hooks

Un hook es un comando que se dispara en un evento concreto, sin depender de que la IA se acuerde: convierte una regla escrita en una garantía. Flow los define en un catálogo propio del kit, declarados uno por uno (evento, garantía, comando, origen, si está activo), con eventos en abstracto. Cada adaptador dice a qué evento real de su herramienta corresponde; lo que una herramienta no puede disparar cae a hooks de git o al CI.

Se agregan, se ajustan o se apagan editando su declaración. Un módulo de terceros (Ponytail, un sistema de diseño) puede traer los suyos al mismo catálogo, con su origen y licencia, y se gobiernan igual que los propios.

Estado: el catálogo y su guía para agregar un hook están en el kit (`nucleo/hooks/`); los comandos de cada hook están por implementar.
