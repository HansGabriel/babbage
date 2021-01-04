<script lang="ts">
/**
 * @author Richard Michael Coo <rmcoo@cpu.edu.ph>
 * @copyright 2021 Richard Michael Coo
 * @license MIT
 */

import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'App'
})
</script>

<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
