/**
 * @author Richard Michael Coo <rmcoo@cpu.edu.ph>
 * @copyright 2021 Richard Michael Coo
 * @license MIT
 */

import PgSimplifyInflector from '@graphile-contrib/pg-simplify-inflector'
import path from 'path'
import { PostGraphileOptions } from 'postgraphile'
import { TagsFilePlugin } from 'postgraphile/plugins'

import { isDevevelopment, isProduction } from './environment'

const options: PostGraphileOptions = {
  watchPg: isDevevelopment,
  dynamicJson: true,
  ignoreRBAC: false,
  ignoreIndexes: false,
  showErrorStack: !isProduction,
  appendPlugins: [TagsFilePlugin, PgSimplifyInflector],
  exportGqlSchemaPath: path.join(__dirname, '../../..', 'schema.grphql'),
  sortExport: true,
  graphiql: isDevevelopment,
  enhanceGraphiql: isDevevelopment,
  disableQueryLog: true,
  allowExplain: isDevevelopment,
  simpleCollections: 'both',
}

export default options
