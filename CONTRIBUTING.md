**[English]** · [(En español más abajo)](#español)

# Contributing to Flow

Thanks for wanting to help! Issues and pull requests are welcome. Please read the [Code of Conduct](CODE_OF_CONDUCT.md) first. Start with [README.md](README.md) (map) and [PLAYBOOK.md](PLAYBOOK.md) (how it works).

## Before you start

- For anything bigger than a small fix, open an issue first so we can agree on the idea.
- **Security problems:** do not open a public issue. Use **Security → Report a vulnerability** (see [SECURITY.md](SECURITY.md)).
- **Conduct problems:** open an issue titled "Conduct report" with no details and ask for a private channel; the maintainer will arrange one.

## Ground rules

- **Agnostic:** no name, term, path or ID from a specific project. Examples are generic.
- **One source:** content lives once in `nucleo/`; adapters only say where it goes. Never parallel copies.
- **Minimalism:** no file, field or step that nobody asked for. Every file is cited from another.
- **Third parties:** paths, packages and formats of other tools are verified in their official docs. Anything unconfirmed goes in the adapter's Verification section, with source and date.
- **Language:** the kit is written in Spanish. Documentation of the repository itself (README, SECURITY, CONTRIBUTING) is English first with Spanish below.

## Check your changes

```bash
node scripts/check.mjs
```

It checks that relative links in the Markdown files exist and that no local paths or personal emails slipped in. The CI runs the same command. There is no build step and no dependency.

## Pull requests

- Branch from `main`, keep the change focused, and describe what and why.
- Your commits publish the email in your git config. Use your GitHub `noreply` address if you want to keep it private.
- By contributing you agree that your work is released under the project's [MIT license](LICENSE).
- The maintainer reviews every pull request; the CI check must pass.

---

# Español

# Contribuir a Flow

¡Gracias por querer ayudar! Los issues y pull requests son bienvenidos. Lee antes el [Código de Conducta](CODE_OF_CONDUCT.md). Empieza por [README.md](README.md) (mapa) y [PLAYBOOK.md](PLAYBOOK.md) (cómo funciona).

## Antes de empezar

- Para algo más grande que un arreglo pequeño, abre primero un issue y acordemos la idea.
- **Problemas de seguridad:** no abras un issue público. Usa **Security → Report a vulnerability** (ver [SECURITY.md](SECURITY.md)).
- **Problemas de conducta:** abre un issue titulado "Conduct report" sin detalles y pide un canal privado; el administrador lo coordinará.

## Reglas básicas

- **Agnóstico:** ningún nombre, término, ruta o ID de un proyecto concreto. Los ejemplos son genéricos.
- **Una sola fuente:** el contenido vive una vez en `nucleo/`; los adaptadores solo dicen dónde se coloca. Nunca copias paralelas.
- **Minimalismo:** ningún archivo, campo o paso que nadie haya pedido. Todo archivo está citado desde otro.
- **Terceros:** rutas, paquetes y formatos de otras herramientas se verifican en su documentación oficial. Lo no confirmado va en la sección Verificación del adaptador, con fuente y fecha.
- **Idioma:** el kit está escrito en español. La documentación del repositorio (README, SECURITY, CONTRIBUTING) va primero en inglés y debajo en español.

## Comprueba tus cambios

```bash
node scripts/check.mjs
```

Comprueba que los enlaces relativos de los Markdown existan y que no se hayan colado rutas locales ni emails personales. El CI corre el mismo comando. No hay paso de build ni dependencias.

## Pull requests

- Parte de `main`, mantén el cambio enfocado y describe qué y por qué.
- Tus commits publican el email de tu config de git. Usa tu dirección `noreply` de GitHub si quieres mantenerlo privado.
- Al contribuir aceptas que tu trabajo se publica bajo la [licencia MIT](LICENSE) del proyecto.
- El administrador revisa cada pull request; el check del CI debe pasar.
