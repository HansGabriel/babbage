/**
 * @author Richard Michael Coo <rmcoo@cpu.edu.ph>
 * @copyright 2021 Richard Michael Coo
 * @license MIT
 */

import express from 'express'

const app = express()

app
  .get('/', (request, response) => {
    response.json({ hello: 'world' })
  })
  .listen(8000, () => {
    console.log('Server started at http://localhost:8000')
  })
