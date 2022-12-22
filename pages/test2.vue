<template>
    <Form @submit="onSubmit">
        <label class="typo__label">Single select / dropdown</label>
        <div class="mb-4">
            <button class="btn btn-warning mx-2" @click="toggleRequired">
                Toggle required
            </button>
            <button class="btn btn-warning" @click="toggleMin">
                Toggle min length
            </button>
        </div>

        <BaseInput
            v-model="username"
            name="test"
            label="username"
            :rules="rules"
        >
        </BaseInput>

        <button class="btn btn-primary mt-1">Submit</button>
        <p class="my-5">{{ rules  }}</p>
    </Form>
</template>

<script setup lang="ts">
import { Form } from "vee-validate";
import { computed, ref } from "vue";

const addRequired = ref(true);
const addMin = ref(false);
const username = ref("");

const rules = computed(() => {
  let result = "";

  if (addRequired.value) result += "required";
  if (addMin.value) result += addRequired.value ? "|min:4" : "min:4";

  return result;
});

function toggleRequired() {
  addRequired.value = !addRequired.value;
}

function toggleMin() {
  addMin.value = !addMin.value;
}

function onSubmit(values) {
  console.log(values);
  console.log("Submitting :(");
}
</script>