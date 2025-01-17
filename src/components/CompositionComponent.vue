<script lang="ts">
/**
 * @author Richard Michael Coo <rmcoo@cpu.edu.ph>
 * @copyright 2021 Richard Michael Coo
 * @license MIT
 */

import {
  computed,
  defineComponent,
  PropType,
  Ref,
  ref,
  toRef
} from '@vue/composition-api'

import { Meta, Todo } from './models'

function useClickCount() {
  const clickCount = ref(0)
  function increment() {
    clickCount.value += 1
    return clickCount.value
  }

  return { clickCount, increment }
}

function useDisplayTodo(todos: Ref<Todo[]>) {
  const todoCount = computed(() => todos.value.length)
  return { todoCount }
}

export default defineComponent({
  name: 'CompositionComponent',
  props: {
    title: {
      type: String,
      required: true
    },
    todos: {
      type: Array as PropType<Todo[]>,
      default: () => []
    },
    meta: {
      type: Object as PropType<Meta>,
      required: true
    },
    active: {
      type: Boolean
    }
  },
  setup(properties) {
    return { ...useClickCount(), ...useDisplayTodo(toRef(properties, 'todos')) }
  }
})
</script>

<template>
  <div>
    <p>{{ title }}</p>
    <ul>
      <li v-for="todo in todos" :key="todo.id" @click="increment">
        {{ todo.id }} - {{ todo.content }}
      </li>
    </ul>
    <p>Count: {{ todoCount }} / {{ meta.totalCount }}</p>
    <p>Active: {{ active ? 'yes' : 'no' }}</p>
    <p>Clicks on todos: {{ clickCount }}</p>
  </div>
</template>
