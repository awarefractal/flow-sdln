# Identidad y seguridad

## Autenticación (login)
- **Pregunta:** ¿cómo entra un usuario? ¿Contraseña, enlace o código por correo, proveedor externo, passkeys?
- **Opciones comunes:** acceso sin contraseña por código; proveedor gestionado (OIDC); contraseña con política y hash adecuado.
- **Costo de decidir tarde:** alto
- **Fuentes sugeridas:** NIST SP 800-63B; OWASP ASVS (V2) y hojas de autenticación; OpenID Connect; WebAuthn (W3C).

## Recuperación de acceso
- **Pregunta:** ¿cómo recupera el acceso quien lo pierde sin abrir una puerta de ataque?
- **Opciones comunes:** enlace o código de un solo uso con expiración; verificación adicional en cuentas sensibles.
- **Costo de decidir tarde:** alto

## Segundo factor
- **Pregunta:** ¿se exige, para quién y con qué método?
- **Opciones comunes:** opcional para todos y obligatorio para administración; passkeys.
- **Costo de decidir tarde:** bajo

## Sesiones y tokens
- **Pregunta:** ¿cómo se mantiene y se revoca una sesión?
- **Opciones comunes:** sesión en servidor con cookie segura; tokens de vida corta con renovación.
- **Costo de decidir tarde:** alto
- **Fuentes sugeridas:** OWASP Session Management Cheat Sheet.

## Autorización (roles y permisos)
- **Pregunta:** ¿qué roles existen y cómo se decide quién puede hacer qué?
- **Opciones comunes:** roles fijos por sección; roles más excepciones por usuario.
- **Costo de decidir tarde:** alto

## Secretos
- **Pregunta:** ¿dónde viven las claves y cómo se rotan?
- **Opciones comunes:** variables de entorno del proveedor; gestor de secretos; cifrado de secretos guardados.
- **Costo de decidir tarde:** alto

## Modelo de amenazas
- **Pregunta:** ¿qué se protege, de quién y qué pasa si falla?
- **Opciones comunes:** lista corta de activos y atacantes; revisión antes de cada hito.
- **Costo de decidir tarde:** alto
- **Fuentes sugeridas:** OWASP Top 10; OWASP ASVS como lista de verificación.

## Validación de entradas
- **Pregunta:** ¿dónde y cómo se valida todo lo que entra al sistema?
- **Opciones comunes:** validación de esquema en cada frontera; salida codificada.
- **Costo de decidir tarde:** alto

## Auditoría y trazabilidad
- **Pregunta:** ¿qué acciones quedan registradas, quién puede verlas y por cuánto tiempo?
- **Opciones comunes:** registro inmutable de acciones sensibles; acceso restringido.
- **Costo de decidir tarde:** alto

## Cadena de suministro
- **Pregunta:** ¿cómo se detectan dependencias vulnerables o comprometidas?
- **Opciones comunes:** escaneo automático; actualizaciones revisadas; lockfile.
- **Costo de decidir tarde:** bajo

## Límites de uso
- **Pregunta:** ¿cómo se frena el abuso y la fuerza bruta?
- **Opciones comunes:** límite de intentos y de peticiones por IP o cuenta.
- **Costo de decidir tarde:** bajo
