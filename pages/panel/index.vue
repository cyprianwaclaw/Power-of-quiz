<template>
  <div>
    <NuxtLayout name="account">
      <div
        class="mx-auto pl-16 gap-12 w-full border-hero mb-20 columns-4 flex py-10 px-8"
      >
        <div class="flex px-5 flex-col justify-center border-r-2 py-5 w-full">
          <div class="flex w-full place-items-cente">
            <button class="flex flex-row place-items-cente">
              <Icon name="carbon:request-quote" size="30" class="hero-icon" />
              <h3 class="text-hero-title">33 odpowiedzi</h3>
            </button>
          </div>
          <div class="columns-3 flex place-items-center gap-10">
            <div class="flex flex-col">
              <p class="text-center des-header">Poprawne</p>
              <p class="text-center ok-answer">10</p>
            </div>
            <div class="flex flex-col">
              <p class="text-center des-header">Błędne</p>
              <p class="bad-answer text-center">32</p>
            </div>
            <div class="flex flex-col">
              <Icon name="carbon:arrow-up-right" size="24" class="menutexticon" />
            </div>
          </div>
        </div>

        <div class="flex px-5 flex-col justify-center border-r-2 py-5 w-full">
          <div class="flex w-full place-items-cente">
            <button class="flex flex-row place-items-cente">
              <Icon name="carbon:request-quote" size="30" class="hero-icon" />
              <!-- Punkty odmiana -->
              <div>
              <h3 class="text-hero-title">{{user.user.points}} punkty</h3>
              </div>
            </button>
          </div>
          <div class="columns-1 flex place-items-center gap-10">
            <div class="flex flex-col">
              <p class="text-center des-header">Zleć wypłatę środków</p>
            </div>
          </div>
        </div>

        <div class="flex px-5 flex-col justify-center border-r-2 py-5 w-full">
          <div class="flex w-full place-items-cente">
            <button class="flex flex-row place-items-cente">
              <Icon name="carbon:request-quote" size="30" class="hero-icon" />
              <!-- Obsoby  odmiana -->
              <div>
              <h3 class="text-hero-title">{{user.invited.count}} zaproszonych </h3>
              </div>
            </button>
          </div>
          <div class="columns-3 flex place-items-center gap-10">
            <div class="flex ">
              <p class="text-center des-header">Skopiuj link polecający</p>
              <Icon name="carbon:request-quote" size="30" class="hero-icon" />
            </div>
            <div class="flex flex-col">
              <p class="text-center des-header">Zobacz polecone osoby</p>

            </div>
          </div>
        </div>

        <div class="flex px-5 flex-col justify-center w-full">
          <div class="flex w-full place-items-cente">
            <button class="flex flex-row place-items-cente">
              <h3 class="text-hero-title">Twój pakiet: Standard</h3>
            </button>
          </div>
          <div class="columns-3 flex place-items-center gap-10">
            <div class="flex flex-col">
              <p class="text-center des-header">Przejdź na premium</p>
              <p class="text-center ok-answer">10</p>
            </div>
          </div>
        </div>
      </div>

      <div
        v-for="response in quiz.fastTwo"
        :key="response"
        class="grid grid-cols-4 gap-8"
      >
        <QuizCard v-for="quiz in response.data" :key="quiz" :quiz="quiz" />
        <div v-for="post in response.data" :key="post"></div>
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useUser } from "@/store/useUser";
import { Quiz } from "@/store/useQuizzes";


const user = useUser();
user.getUser();
user.getInvited();

const quiz = Quiz();
quiz.getFastTwo();


</script>
