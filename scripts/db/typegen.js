#!/usr/bin/env node

/**
 * @author Richard Michael Coo <rmcoo@cpu.edu.ph>
 * @copyright 2021 Richard Michael Coo
 * @license MIT
 */

const chalk = require('chalk')
const fs = require('fs')
const path = require('path')
const { execSync, exec } = require('child_process')

try {
  execSync('npx kanel')

  console.log(
    `Removing the problematic ${chalk.cyan('db-types/index.ts')} file.`
  )
  fs.rmSync(path.join(process.cwd(), 'src/server/db-types/index.ts'))

  execSync('npx prettier --write src/server/db-types')
  console.log(chalk.green('Successfully generated types for database.'))
} catch (error) {
  console.error(chalk.red('Types generation for database failed.'))
  console.error(chalk.yellow(`Error details: ${error}`))
}
