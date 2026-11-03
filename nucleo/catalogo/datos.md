# Datos

## Modelo de datos
- **Pregunta:** ¿cuáles son las entidades, sus relaciones y su ciclo de vida?
- **Opciones comunes:** modelo relacional normalizado; documentos con esquema validado.
- **Costo de decidir tarde:** alto

## Base de datos
- **Pregunta:** ¿qué motor y qué servicio gestionado?
- **Opciones comunes:** relacional gestionada; documental gestionada; combinación con caché.
- **Costo de decidir tarde:** alto
- **Fuentes sugeridas:** documentación oficial del motor candidato; límites del plan contratado.

## Aislamiento entre clientes
- **Pregunta:** si hay varios clientes, ¿cómo se garantiza que uno no vea los datos de otro?
- **Opciones comunes:** filtro obligatorio por cliente en toda consulta; esquema por cliente; base por cliente.
- **Costo de decidir tarde:** alto
- **Fuentes sugeridas:** OWASP (control de acceso a nivel de objeto).

## Migraciones
- **Pregunta:** ¿cómo evoluciona el esquema sin perder datos ni parar el servicio?
- **Opciones comunes:** migraciones versionadas e idempotentes; ensayo con copia de datos.
- **Costo de decidir tarde:** bajo

## Backups y recuperación
- **Pregunta:** ¿qué se respalda, cada cuánto y cuánto tarda recuperarse?
- **Opciones comunes:** copias automáticas con prueba periódica de restauración.
- **Costo de decidir tarde:** alto

## Retención y borrado
- **Pregunta:** ¿cuánto tiempo se guarda cada dato y cómo se borra de verdad?
- **Opciones comunes:** política por tipo de dato; borrado lógico con purga posterior.
- **Costo de decidir tarde:** alto

## Almacenamiento de archivos
- **Pregunta:** ¿dónde viven archivos e imágenes y con qué límites?
- **Opciones comunes:** almacenamiento de objetos; solo texto extraído en la base.
- **Costo de decidir tarde:** bajo
