<template>
    <input v-model="value" type="text" />
    <button :disabled="!meta.dirty">Submit</button>
  </template>

  <script setup>
  import { useField } from 'vee-validate';
  // Provide initial value to make `meta.dirty` accurate
  const { value, meta } = useField('fieldName', undefined, {
    initialValue: '',
  });
  </script>