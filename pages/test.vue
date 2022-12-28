<template>
  <div class="w-40 mx-auto pt-10 block pb-16">
    <Form @submit.prevent="Click">
      <!-- <BaseInput label="Imię" name="name"/>
      <BaseInput label="Nazwisko" name="surname" />
      <BaseInput label="Wiek" name="age"/>
      <BaseInput label="E-mail" name="email"/> -->

      <Field 
      />

<button class="mt-10 px-2 py-4  border-light-300 rounded-sm"><p class="text-sm">Wyślij</p></button>
{{ errors }}
    </Form>

  </div>
</template>

<script setup lang="ts">
import { useField, useFormm, Field, Form } from "vee-validate";
import * as yup from 'yup';

const { errors } = useForm({
  initialErrors: {
    email: 'This email is invalid',
    password: 'Password too short',
  }
});

function Click(){
  alert("wysłano dane")
}
</script>
