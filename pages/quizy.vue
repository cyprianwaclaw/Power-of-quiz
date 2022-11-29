<template>
<div>
    <NuxtLayout name="account">
        <div
        v-for="response in quiz.fastTwo"
        :key="response"
        class="grid grid-cols-4 gap-8"
        >

    <QuizCard v-for="quiz in response.data" :key="quiz" :quiz="quiz" />
    <div v-for="post in response.data" :key="post"></div>
    </div>

    <div>
    {{quiz.allQuiz.data}}
    </div>

    </NuxtLayout>
</div>
</template>

<script setup lang="ts">
import { Quiz } from "@/store/useQuizzes";

const quiz = Quiz();
quiz.getFastTwo();
quiz.getAllQuiz()

</script>