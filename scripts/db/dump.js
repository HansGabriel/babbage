#!/usr/bin/env node

/**
 * @author Richard Michael Coo <rmcoo@cpu.edu.ph>
 * @copyright 2021 Richard Michael Coo
 * @license MIT
 */

const chalk = require('chalk')
const { spawn } = require('child_process')
const dotenv = require('dotenv')

dotenv.config()

if (process.env.NODE_ENV !== 'test') {
  if (typeof process.env.DATABASE_URL !== 'string') {
    const message = `DATABASE_URL env var must be a string, or must be set.`
    throw new TypeError(message)
  }

  const pgDump = spawn(
    'pg_dump',
    [
      '--schema-only',
      '--no-owner',
      '--file=./src/sql/schema.sql',
      process.env.DATABASE_URL,
    ],
    {
      stdio: 'inherit',
      shell: true,
    }
  )

  pgDump.on('close', (code) => {
    if (code === 0) {
      console.log(chalk.green('pg_dump after migration is successful.'))
    } else {
      console.error(chalk.red(`pg_dump unsuccessful with exit code ${code}.`))
    }
  })
}
