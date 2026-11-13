# Producción (opcional)

Dos bloques que se conectan cuando haga falta. Ninguno bloquea construir ni exige nada: sin declarar, el mecanismo es `nada` y así queda dicho. Lo que se decida aquí queda trazado. Se declaran en «Producción» de `config.md`.

## Promover

Pasar a producción es un bloque aparte de Entregar: un punto `done` no se promueve solo. Lo hace el mecanismo que `config.md` declare: una persona, un equipo, un pipeline de CI/CD u otro, o nadie. Flow no lo construye: lo conecta, lo hace visible y lo anota.

1. **Visibilizar.** Los cambios `done` sin promover aparecen en `/flow estado` como «listos para promover», con su edad. No bloquean nada.
2. **Verificar.** Antes de promover se cumplen los criterios de release del PRD §7, con evidencia.
3. **Promover.** Lo ejecuta el mecanismo declarado. Si es un pipeline, `quién o qué` es el comando o workflow que se dispara. Si es una persona o un equipo, la IA prepara (versión, notas, criterios con evidencia) y espera su autorización cada vez (ver «Autonomía por entorno» en `excepciones.md`).
4. **Anotar.** Una entrada de bitácora marcada como promoción: fecha, versión, mecanismo, quién o qué, criterios con evidencia y resultado. Una promoción que falló o se revirtió se anota igual, y el motivo entra a Aprender. Si es la primera, corre el hito 3 (`hitos.md`).

Con `nada` no se promueve: queda declarado. Elegir un mecanismo es la decisión de CI/CD y despliegue del catálogo (`catalogo/comun.md`), con su ADR cuando alguien quiera cerrarla. Armar el pipeline es un punto más del backlog, no un requisito para seguir construyendo.

## Observar

Para cuando el producto ya está en uso. Se activa en `config.md` (`observar: sí`) y se apaga igual.

Cada **señal** es una fila de `config.md`: qué se mira, dónde, el umbral y qué pasa al cruzarlo. Hay tres familias: salud (errores, caídas, latencia), uso (activación, retención, lo que el PRD §1 diga que es éxito) y costo.

- **Leer.** `/flow metricas` (o `/flow estado`) pide leer las señales, a mano o desde la herramienta que las produzca. Una señal sin lectura queda `pendiente`, nunca se asume sana.
- **Cruzar un umbral.** Entra a la bandeja: una de salud como incidente (urgencia, ver `excepciones.md`), una de uso como intención a triar. No ejecuta nada por sí sola.
- **Incidente grave.** Además de su fila en `errores.md`, una entrada de bitácora con la línea de tiempo, la causa y lo que cambia: es el postmortem, sin culpables. Si el error se repite, sube a regla como cualquier otro. El primer incidente corre además el hito 4 (`hitos.md`).
- **Objetivo de nivel de servicio (SLO).** Si lo declaras («99,5 % de respuestas correctas al mes»), es una señal con umbral. Incumplirlo es un incidente, y mantenerlo puede pasar a ser un criterio de release del PRD §7: así se vuelve regla.
