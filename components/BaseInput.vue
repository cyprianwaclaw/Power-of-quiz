<template>
  <div>
    <label>{{ label }}</label>
    <input class="base-input" 
    v-model="value"
    @input="$emit('update:modelValue', $event.target.value)"
    :fieldName="`${props.fieldName}`"
     />
     {{ errors[0] }}
  </div>
</template>

<script setup lang="ts">
import { useField } from 'vee-validate';
import * as yup from 'yup';
import { defineProps } from 'vue';

const props = defineProps({
    label: String,
    fieldName: String,
})

const {meta, value, errors} = useField(props.fieldName,
yup.string().min(5, "Min is 5").max(22, "max is 20")
)

const emit = defineEmits(['update:modelValue', 'submitTest'])

</script>

<style scoped lang="scss"></style>
