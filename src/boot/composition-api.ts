/**
 * @author Richard Michael Coo <rmcoo@cpu.edu.ph>
 * @copyright 2021 Richard Michael Coo
 * @license MIT
 */

import VueCompositionApi from '@vue/composition-api'
import { boot } from 'quasar/wrappers'

export default boot(({ Vue }) => {
  Vue.use(VueCompositionApi)
})
