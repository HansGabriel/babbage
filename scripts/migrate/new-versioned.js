#!/usr/bin/env node

/**
 * @author Richard Michael Coo <rmcoo@cpu.edu.ph>
 * @copyright 2021 Richard Michael Coo
 * @license MIT
 */

const chalk = require('chalk')
const fs = require('fs')
const path = require('path')

const zeropad = (number, maxLength = 2) => `${number}`.padStart(maxLength, 0)

// NOTE: toISOString().replace(/[-:T]/g, '') is on UTC
const now = new Date()
const year = now.getFullYear()
const month = zeropad(now.getMonth() + 1)
const day = zeropad(now.getDate())
const hour = zeropad(now.getHours())
const minute = zeropad(now.getMinutes())
const second = zeropad(now.getSeconds())
const formattedTime = `${year}${month}${day}${hour}${minute}${second}`

const [_node, _scriptFilename, migrationName] = process.argv

if (!migrationName) {
  console.error(chalk.red('Please enter a description for your migration.'))
} else {
  const newFilePath = path.join(
    process.cwd(),
    'src/sql/migrations',
    `V${formattedTime}__${migrationName}.sql`
  )

  try {
    fs.writeFileSync(newFilePath, '')
    console.log(`Migration created at ${chalk.green(newFilePath)}`)
  } catch (error) {
    console.error(chalk.yellow('Error creating versioned migration.'))
    console.error(chalk.red(error))
  }
}
