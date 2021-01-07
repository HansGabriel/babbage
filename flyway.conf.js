/**
 * @author Richard Michael Coo <rmcoo@cpu.edu.ph>
 * @copyright 2021 Richard Michael Coo
 * @license MIT
 */

const { parse } = require('pg-connection-string')
const dotenv = require('dotenv')

dotenv.config()

const [url, prefix] =
  process.env.NODE_ENV === 'test'
    ? [process.env.TEST_DATABASE_URL, 'TEST_']
    : [process.env.DATABASE_URL, '']

if (typeof url !== 'string') {
  throw new TypeError(
    `${prefix}DATABASE_URL env var must be a string, or must be set.`
  )
}

const { host, database, user, password } = parse(url)

if (!host || !database || !user || !password) {
  throw new Error('DATABASE_URL did not parse into the correct configuration.')
}

const jdbcUrl = `jdbc:postgresql://${host}/${database}`

module.exports = {
  flywayArgs: {
    url: jdbcUrl,
    user,
    password,
    schemas: 'public',
    locations: 'filesystem:./src/sql',
  },
  downloads: {
    // optional, -1 will never check for updates, defaults to 1 day.
    expirationTimeInMs: process.env.UPDATE_FLYWAY ? 86_400_000 : -1,
  },
}
