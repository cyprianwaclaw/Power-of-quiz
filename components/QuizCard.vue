<template>
  <div class="px-5 py-5 border-single-quiz">
    <img
      :src="quiz.image"
      class="border-single-quiz-image object-center object-cover w-full"
      alt="Zdjęcie"
    />
    <p class="relative text-left mb-5 quiz-title-card">{{ quiz.title }}</p>
    <div class="columns-2 place-items-center">
      <div class="time-button">
        <Icon name="ph:clock-thin" class="mr-1 quiz-option" />
        <p class="text-des-quiz">{{ quiz.time }} min</p>
      </div>
      <div v-if="(quiz.difficulty = 'medium')">
        <div class="difficulty-button">
          <Icon name="ph:graduation-cap-thin" class="mr-1 quiz-option" />
          <p class="text-des-quiz">średni</p>
        </div>
      </div>
      <div v-else-if="(quiz.difficulty = 'easy')">
        <div class="difficulty-button">
          <Icon name="ph:graduation-cap-thin" class="mr-1 quiz-option" />
          <p class="text-des-quiz">łatwy</p>
        </div>
      </div>
      <div v-else>
        <div class="difficulty-button">
          <Icon name="ph:graduation-cap-thin" class="mr-1 quiz-option" />
          <p class="text-des-quiz">trudny</p>
        </div>
      </div>
    </div>

    <div v-if="(quiz.questions_count = 1)">
      <div class="answer-button">
        <Icon name="ph:chat-centered-dots-thin" class="mr-1.5 quiz-option" />
        <p class="text-des-quiz">{{ quiz.questions_count }} pytanie</p>
      </div>
    </div>
    <div v-else-if="(quiz.questions_count = 2)">
      <div class="answer-button">
        <Icon name="ph:chat-centered-dots-thin" class="mr-1.5 quiz-option" />
        <p class="text-des-quiz">{{ quiz.questions_count }} pytania</p>
      </div>
    </div>
    <div v-else-if="(quiz.questions_count = 3)">
      <div class="answer-button">
        <Icon name="ph:chat-centered-dots-thin" class="mr-1.5 quiz-option" />
        <p class="text-des-quiz">{{ quiz.questions_count }} pytania</p>
      </div>
    </div>
    <div v-else-if="quiz.questions_count > 3">
      <div class="answer-button">
        <Icon name="ph:chat-centered-dots-thin" class="mr-1.5 quiz-option" />
        <p class="text-des-quiz">{{ quiz.questions_count }} pytań</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Quiz } from "@/api/types";
defineProps<{ quiz: Quiz }>();
</script>

<style lang="scss" scoped></style>
