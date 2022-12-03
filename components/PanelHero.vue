<template><div>
   <SearchBar />
    <div class="mb-10 family">
      <div class="w-full border-hero-section grid grid-cols-4 mx-auto px-5 py-8">
        <div class="grid w-full justify-center border-hero-items pt-5">
          <div class="columns-2 flex flex-col mb-3">
            <h3 class="text-2xl mb-2 font-semibold">33</h3>
            <h4 class="text-base">Udzielonych odpowiedzi</h4>
          </div>
          <div class="flex flex-row mb-5">
            <div class="columns-2 flex flex-col w-full">
              <h3 class="text-sm text-center des-header">Poprawne</h3>
              <h4 class="text-2xl text-center w-full text-green-400">
                {{ user.answer.correct_answers }}
              </h4>
            </div>
            <div class="columns-2 flex flex-col w-full ml-14">
              <h3 class="text-sm text-center des-header">Błędne</h3>
              <h4 class="text-2xl text-center text-red-400">
                {{ user.answer.incorrect_answers }}
              </h4>
            </div>
          </div>
        </div>
        <div class="grid w-full justify-center border-hero-items pt-5">
          <div class="columns-2 flex flex-col">
            <h3 class="text-2xl mb-2 font-semibold">{{ user.user.points }}</h3>
            <h4 class="text-base">Liczba punktów</h4>
          </div>
          <div class="flex flex-col -mt-1">
            <div class="columns-2 flex w-full place-items-center">
              <h3 class="text-sm des-header">Zleć wypłatę środków</h3>
              <Icon name="carbon:chevron-right" size="18" class="chevron-hero" />
            </div>
            <div class="columns-2 flex w-full mt-3 place-items-center">
              <h3 class="text-sm des-header">Jak zdobyć punkty ?</h3>
              <Icon name="carbon:chevron-right" size="18" class="chevron-hero" />
            </div>
          </div>
        </div>
        <div class="grid w-full justify-center border-hero-items pt-3">
          <div class="columns-2 flex flex-col">
            <h3 class="text-2xl mb-2 font-semibold">{{ user.invited.count }}</h3>
            <h4 class="text-base">Zaproszonych użytkowników</h4>
          </div>
          <div class="flex flex-col -mt-1">
            <div class="columns-2 flex w-full place-items-center">
              <h3 class="text-sm des-header">Zleć wypłatę środków</h3>
              <Icon name="carbon:chevron-right" size="18" class="chevron-hero" />
            </div>
            <div class="columns-2 flex w-full mt-3 place-items-center">
              <h3 class="text-sm des-header">Jak zdobyć punkty ?</h3>
              <Icon name="carbon:chevron-right" size="18" class="chevron-hero" />
            </div>
          </div>
        </div>
        <div class="grid w-full justify-center pt-3">
          <div class="columns-2 flex flex-col mb-5">
            <div v-if="user.plan.data == false">
              <h3 class="text-2xl mb-2 font-semibold">Standard</h3>
              <h4 class="text-base">Obecny pakiet</h4>
            </div>
            <div v-if="user.plan.data == true">
              <p class="des-header -mt-1">Premium</p>
            </div>
          </div>
          <div class="flex flex-row mb-5">
            <div class="columns-2 flex flex-col w-full">
              <h3 class="text-sm text-center">Poprawne</h3>
              <h4 class="text-2xl text-center w-full text-green-400">10</h4>
            </div>
            <div class="columns-2 flex flex-col w-full ml-14">
              <h3 class="text-sm text-center">Błędne</h3>
              <h4 class="text-2xl text-center text-red-400">22</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
</div></template>

<script setup lang="ts">
import { useUser } from "@/store/useUser";
const user = useUser();
user.getInvited();
user.getAnswers();
user.getUser();
user.getUserPlan();
</script>

<style scoped>

</style>
