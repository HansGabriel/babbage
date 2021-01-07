/**
 * @author Richard Michael Coo <rmcoo@cpu.edu.ph>
 * @copyright 2021 Richard Michael Coo
 * @license MIT
 */

import dotenv from 'dotenv'
import express from 'express'
import { postgraphile } from 'postgraphile'

import graphileOptions from './graphile-options'

dotenv.config()

if (!process.env.DATABASE_URL?.startsWith('postgres')) {
  throw new Error('The DATABASE_URL environment variable has an invalid value.')
}

const port = process.env.PORT ?? 8080
const app = express()

app
  .get('/', (request, response) => {
    response.json({ hello: 'world' })
  })
  .use(postgraphile(process.env.DATABASE_URL, 'public', graphileOptions))
  .listen(port, () => {
    console.log(`Server started at http://localhost:${port}`)
  })
