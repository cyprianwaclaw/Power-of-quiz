<script setup>
import {ref} from "vue"
const props = defineProps({
  modelValue: String,
  modelModifiers: { default: () => ({}) }
})

const value = ref('')
const emit = defineEmits(['update:modelValue'])

function emitValue(e) {
  let value = e.target.value
  if (props.modelModifiers.capitalize) {
    value = value.charAt(0).toUpperCase() + value.slice(1)
  }
  emit('update:modelValue', value)
}
</script>

<template>
  <input
  class="base-input"
    v-model="value"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>