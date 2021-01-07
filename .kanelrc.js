const path = require('path')
const { parse } = require('pg-connection-string')
const dotenv = require('dotenv')
const { recase } = require('@kristiandupont/recase')
const { singularize } = require('inflected')

dotenv.config()

if (typeof process.env.DATABASE_URL !== 'string') {
  console.error('DATABASE_URL env var must be a string, or must be set.')
  process.exit(1)
}

module.exports = {
  // using a connection string directly will result in a minor reporting bug:
  // Connecting to undefined on undefined
  connection: parse(process.env.DATABASE_URL),

  modelNominator: (tableName) =>
    recase('snake', 'pascal', singularize(tableName)),

  fileNominator: recase('pascal', 'dash'),

  schemas: [
    {
      name: 'public',
      ignore: ['flyway_schema_history'],
      modelFolder: path.join(__dirname, 'src/server/db-types'),
    },
    {
      name: 'app_private',
      modelFolder: path.join(__dirname, 'src/server/db-types'),
    },
  ],
}
