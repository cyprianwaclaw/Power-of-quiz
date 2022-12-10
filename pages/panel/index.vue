<template>
  <div>
    <NuxtLayout name="account">
      <PanelHero />
      <div
        v-for="response in quiz.fastTwo"
        :key="response"
        class="grid grid-cols-4 gap-8"
      >
        <QuizCard v-for="quiz in response.data" :key="quiz" :quiz="quiz" />
        <div v-for="post in response.data" :key="post">
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { Quiz } from "@/store/useQuizzes";
import { useSettings } from "@/store/useSettings";

const quiz = Quiz();
quiz.getFastTwo();


</script>
