<template>
  <label>{{ label }}</label>
    <input
    name="name"
     class="base-input"
     :inputvalue="`${props.inputValue}`"
     :class="{'is-invalid': !!errors.length, 'is-valid':!!meta.dirty && meta.valid}"
     :placeholder="`${props.placeholder}`"
      v-model="value"
      @input="$emit('update:modelValue', $event.target.value)"
  
    />  
    <span v-if="meta.valid && meta.touched">✅ Field is valid</span>
<span class="active">{{ errors[0] }}</span>
<p>{{ value }}</p>
<p>{{ meta }}</p>
</template>

<script setup lang="ts">
import {ref} from "vue"
import * as yup from 'yup';
import { useField } from 'vee-validate';
import { useSettings } from "@/store/useSettings";



 const isActive = ref(true)
const error = ref(null)

// const classObject = computed(() => ({
//   'is-invalid': errorMessage.value && !errorMessage.value,

// }))

const props = defineProps({
  modelValue: String,
  label: String,
  placeholder: String,
  inputValue: String,
})

const {value,  errors, meta } = useField<any>('name',
yup.string().min(5, "Min is 5")
   .max(22, "max is 20")
// .value => !value
 ); 

const emit = defineEmits(['update:modelValue', 'submitTest'])
</script>

<style scoped>
.is-invalid{
  border-width: 1px;
  border-color: red;
}

.is-valid{
  border-width: 1px;
  border-color: green;
}


.active{
  color:red;
}


</style>
