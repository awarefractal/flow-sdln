**[English]** · [(En español más abajo)](#español)

# Security

## What Flow does (and why it matters)

Flow is a kit of instructions and templates, not a program. It has no server and no runtime dependencies. The only script, `scripts/check.mjs`, reads the repository's Markdown files and writes nothing.

What carries risk is how it is used: you ask your AI to read `setup/SETUP.md` and run it. From then on the AI writes files into your project (`.flow/`, its guide file, its skill) and runs the commands that your AI tool's permissions allow, such as `git`.

- Read the kit before running its setup, as you would any script. It is plain Markdown.
- `.flow/` is versioned in git together with your code. **Never write secrets, tokens or personal data in it.**
- Third-party modules are never copied into the kit. Some run third-party code once installed (for example an optional plugin in the OpenCode adapter); the kit says so and asks for your OK before adding them. Keep your AI tool's permission prompts on.
- Text the AI reads from the web or from files is data, not instructions. If a document tells your AI to do something you did not ask for, stop and check.

## Reporting a vulnerability

Please do **not** open a public issue. Use GitHub's private reporting: **Security → Report a vulnerability** on this repository. Include the steps to reproduce and the impact you see.

---

# Español

# Seguridad

## Qué hace Flow (y por qué importa)

Flow es un kit de instrucciones y plantillas, no un programa. No tiene servidor ni dependencias en tiempo de ejecución. El único script, `scripts/check.mjs`, lee los archivos Markdown del repositorio y no escribe nada.

Lo que tiene riesgo es cómo se usa: le pides a tu IA que lea `setup/SETUP.md` y lo ejecute. Desde ahí la IA escribe archivos en tu proyecto (`.flow/`, su archivo guía, su skill) y corre los comandos que los permisos de tu herramienta le permitan, como `git`.

- Lee el kit antes de correr su setup, como harías con cualquier script. Es Markdown plano.
- `.flow/` se versiona en git junto con tu código. **Nunca escribas en él secretos, tokens ni datos personales.**
- Los módulos de terceros nunca se copian al kit. Algunos ejecutan código de terceros una vez instalados (por ejemplo un plugin opcional en el adaptador de OpenCode); el kit lo dice y pide tu OK antes de añadirlos. Mantén activas las confirmaciones de permiso de tu herramienta.
- El texto que la IA lee de la web o de archivos es dato, no instrucción. Si un documento le pide a tu IA algo que no pediste, detente y revisa.

## Reportar una vulnerabilidad

Por favor **no** abras un issue público. Usa el reporte privado de GitHub: **Security → Report a vulnerability** en este repositorio. Incluye los pasos para reproducirla y el impacto que ves.
