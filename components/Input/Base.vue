<template>
  <div>
        <label for="first-name" class="base-input-label">{{ label1 }}</label>
    <input
      type="text"
      name="first-name"
      autocomplete="given-name"
      class="base-input"
      v-model="model"
      @input="handleChange"
    />
    <span class="">{{publishedBooksMessage}}</span>
  </div>
</template>

<script setup lang="ts">
import {defineProps, defineEmits}from 'vue'

const model=ref('')
const testPlaceholder = ref('sdfdf')
interface Props {
  label1: string,
}

// const emit = defineEmits(['customChange'])
const props = defineProps<Props>();
// type-based (TS)
const emit = defineEmits<{
  (e: 'customChange', id: any): void
}>()

const handleChange = (event:any) => {
  emit('customChange', event.target.value.toUpperCase())
}


const publishedBooksMessage = computed(() => {
  return model.value.length > 0 ? 'Yes' : 'No'
})
</script>

<style scoped></style>
