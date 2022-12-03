<template>
  <div>
    <NuxtLayout name="account">
      <SearchBar />
      <div class="columns-2 w-full family">
        <div class="justify-start w-full">
          <h2 class="title-hero mb-32">Wszystkie quizy</h2>
        </div>
        <div class="place-items-end grid">
          <button
            class="button1 columns-2 flex flex-row place-items-center mb-2 cursor-pointer"
          >
            <h3 class="mr-3 text-base font-medium">Filtruj wyniki</h3>
            <Icon name="carbon:audio-console" size="21" color="black" />
          </button>
        </div>
      </div>
      <div class="grid grid-cols-4 gap-8">
        <QuizCard v-for="quiz in quiz.allQuiz" :key="quiz.id" :quiz="quiz" />
      </div>
      <div class="bottom-10 absolute right-10">
        <ul class="inline-flex">
          <li>
            <a
              href="#"
              class="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >Previous</a
            >
          </li>
          <li>
            <a
              href="#"
              class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >1</a
            >
          </li>
          <li>
            <a
              href="#"
              class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >2</a
            >
          </li>
          <li>
            <a
              href="#"
              aria-current="page"
              class="px-3 py-2 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
              >3</a
            >
          </li>
          <li>
            <a
              href="#"
              class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >4</a
            >
          </li>
          <li>
            <a
              href="#"
              class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >5</a
            >
          </li>
          <li>
            <a
              href="#"
              class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >Next</a
            >
          </li>
        </ul>
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { Quiz } from "@/store/useQuizzes";

const quiz = Quiz();
quiz.getAllQuiz();
</script>
