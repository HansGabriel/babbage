/**
 * @author Richard Michael Coo <rmcoo@cpu.edu.ph>
 * @copyright 2021 Richard Michael Coo
 * @license MIT
 */

export const isProduction = process.env.NODE_ENV?.startsWith('prod') ?? false

export const isTest = process.env.NODE_ENV === 'test'

export const isDevevelopment = !(isProduction || isTest)
