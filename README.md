[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

# Babbage (babbage)

Half-serious Math exercises cross-platform app to hopefully 🙏 help the lagging Math and science skills of the Filipino students.

## Install needed software

- Node.js >= v14.14.0
  - It uses `fs.rmSync()` in a script, which was introduced in v14.14.0
- pg_format

## Install NPM dependencies

```bash
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)

```bash
quasar dev
```

### Lint the files

```bash
npm run lint
```

### Build the app for production

```bash
quasar build
```

### Customize the configuration

See [Configuring quasar.conf.js](https://quasar.dev/quasar-cli/quasar-conf-js).
