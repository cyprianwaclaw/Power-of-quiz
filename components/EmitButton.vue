<script setup lang="ts">
import {ref} from "vue"
import { useSettings } from "@/store/useSettings";

const props = defineProps({
  modelValue: String,
  label: String,
  placeholder: String,
})

const value = ref('')

const isActive = ref(true)

const Message = computed(() => {
  return value.value.length > 0 ? "Error" : "";
});

function error() {

}

const emit = defineEmits(['update:modelValue', 'submitTest'])

</script>

<template>
  <label>{{ label }}</label>
  <input
   class="base-input"
   :class="{ active: isActive }"
   :placeholder="`${props.placeholder}`"
    v-model="value"
    @input="$emit('update:modelValue', $event.target.value)"

  />
{{ Message }}
</template>
<style>
.active{
  color: red;
}
</style>