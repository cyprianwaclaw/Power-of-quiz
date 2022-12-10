<template>
  <div>
    <NuxtLayout name="account">
      <SearchBar />
      Imię: {{test.test.name}}
      <div class="columns-2 w-full family">
        <div class="justify-start w-full">
          <h2 class="title-hero mb-32">Moje środki</h2>
        </div>
      </div>
      <div class="">
{{quiz.fastTwo}}
      </div>
      <div class="mt-20">
        <div
        v-for="response in test.getTestl"
        :key="response"
        class="grid grid-cols-4 gap-8"
      >
      <div v-for="test in response" :key="test">
      </div>
</div>
      </div>
      
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { testStore } from "@/store/testStore";
import {Quiz} from "@/store/useQuizzes";

const quiz = Quiz()
quiz.getFastTwo()


const test = testStore()
test.getTestl()
</script>
