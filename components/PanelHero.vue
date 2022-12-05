<template>
  <div>
    <SearchBar />
    <div class="mb-10 family cursor-default">
      <div class="w-full border-hero-section grid grid-cols-4 mx-auto px-5 py-8">
        <div class="grid w-full justify-center border-hero-items pt-4 pr-8">
          <div class="columns-2 flex flex-col mb-4">
            <!-- TODO  Sprawdzić czy dodaje się wszystko -->
            <!--TODO  Dodać ifa gdy ładują się dane, wtedy pokazuje się NaN,
            link: https://www.tektutorialshub.com/typescript/nan-in-typescript/ -->
            <h3 class="text-2xl mb-2 font-semibold">
              {{ user.answer.correct_answers + user.answer.correct_answers }}
            </h3>
            <h4 class="text-base">Udzielonych odpowiedzi</h4>
          </div>
          <div class="flex flex-row mb-5 -ml-3">
            <div class="columns-2 flex flex-col w-full">
              <h3 class="text-sm text-center des-header">Poprawne</h3>
              <h4 class="text-2xl text-center w-full text-green-400">
                {{ user.answer.correct_answers }}
              </h4>
            </div>
            <div class="columns-2 flex flex-col w-full ml-4">
              <h3 class="text-sm text-center des-header">Błędne</h3>
              <h4 class="text-2xl text-center text-red-400">
                {{ user.answer.incorrect_answers }}
              </h4>
            </div>
          </div>
        </div>
        <div class="grid w-full justify-center border-hero-items pt-3 pr-16">
          <div class="columns-2 flex flex-col mb-4">
            <h3 class="text-2xl mb-2 font-semibold">{{ user.user.points }}</h3>
            <h4 class="text-base">Liczba punktów</h4>
          </div>
          <div class="flex flex-col -mt-4">
            <div class="columns-2 flex w-full place-items-center">
              <NuxtLink to="/panel/moje-konto/wyplaty"
                ><button class="hero-text-des-chevron">
                  Wypłać środki
                  <Icon
                    name="carbon:chevron-right"
                    size="18"
                    class="chevron-hero"
                  /></button
              ></NuxtLink>
            </div>
            <div class="columns-2 flex w-full place-items-center mt-1">
              <NuxtLink to="/panel/jak-zdobyc-punkty"
                ><button class="hero-text-des-chevron">
                  Jak zdobyć punkty
                  <Icon
                    name="carbon:chevron-right"
                    size="18"
                    class="chevron-hero"
                  /></button
              ></NuxtLink>
            </div>
          </div>
        </div>
        <div class="grid w-full justify-center border-hero-items pt-3">
          <div class="columns-2 flex flex-col mb-4">
            <h3 class="text-2xl mb-2 font-semibold">{{ user.invited.count }}</h3>
            <h4 class="text-base">Zaproszonych użytkowników</h4>
          </div>
          <div class="flex flex-col -mt-4">
            <div class="columns-2 flex w-full place-items-center">
              <button class="hero-text-des tooltip" @click="copy">
                <Icon name="carbon:copy" size="18" color="#618CFB" class="mr-1" />
                Skopiuj kod polecający
                <div v-if="tooltip">
                  <span ref="tooltip" class="tooltiptext family">
                    Skopiowano kod polecający, <br>teraz możesz przesłać go znajomenu
                  </span>
                </div>
                <!-- TODO  invitedToken:   {{user.invitationToken}}-->
              </button>
            </div>
            <div class="columns-2 flex w-full mt- place-items-center">
              <NuxtLink to="/panel/dlaczego-warto-polecac"
                ><button class="hero-text-des-chevron">
                  Dlaczego warto polecać
                  <Icon
                    name="carbon:chevron-right"
                    size="18"
                    class="chevron-hero"
                  /></button
              ></NuxtLink>
            </div>
          </div>
        </div>
        <!--TODO  Widok dla planu standard -->
        <div v-if="user.plan.data == false">
          <div class="grid w-full justify-center pr-5">
            <div class="columns-2 flex flex-col">
              <h3 class="mb-1.5 pakiet-standard">Standard</h3>
            </div>
            <div class="flex flex-col">
              <div class="columns-1 flex w-full place-items-center cursor-default">
                <p class="text-hero-standard">
                  Przejdź na pakiet <span class="text-hero-items-PREMIUM">PREMIUM</span>,
                  <br />gdzie możesz dodawać własne quizy,<br />
                  zarabiać za każdego zaproszonego <br />
                  użytkownika i wiele, wiele, więcej
                </p>
              </div>
              <div class="columns-2 flex w-full mt- place-items-center">
                <NuxtLink to="/panel/plan-premium"
                  ><button class="hero-text-des-chevron">
                    dowiedź się więcej
                    <Icon
                      name="carbon:chevron-right"
                      size="18"
                      class="chevron-hero"
                    /></button
                ></NuxtLink>
              </div>
            </div>
          </div>
        </div>
        <!-- TODO Widok dla planu premium -->
        <div v-if="user.plan.data == true">
          <div class="grid w-full justify-center pt-3 pr-10">
            <div class="columns-2 flex flex-col mb-6">
              <div class="columns-2 flex flex-row place-items-center mb-2">
                <Icon name="fa:diamond" size="28" class="chevron-hero" />
                <h3 class="pakiet-premium ml-3">Premium</h3>
              </div>
              <h4 class="text-base">Twój pakiet</h4>
            </div>
            <div class="flex flex-col -mt-4">
              <!-- TODO Edycja tego co widać w premium -->
              <div class="columns-2 flex w-full place-items-center">
                <NuxtLink to="/panel/plan-premium"
                  ><button class="hero-text-des">
                    Skopiuj link polecający
                    <Icon
                      name="carbon:copy"
                      size="18"
                      color="#618CFB"
                      class="ml-2"
                    /></button
                ></NuxtLink>
              </div>
              <div class="columns-2 flex w-full mt- place-items-center">
                <NuxtLink to="/panel/plan-premium"
                  ><button class="hero-text-des-chevron">
                    Przejdź na PREMIUM
                    <Icon
                      name="carbon:chevron-right"
                      size="18"
                      class="chevron-hero"
                    /></button
                ></NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useUser } from "@/store/useUser";

const tooltip = ref("");
const user = useUser();
user.getInvited();
user.getAnswers();
user.getUser();
user.getUserPlan();
user.getInvitationToken();

const invitationToken = user.getInvitationToken();
// console.log(user.user)
const correctAnswers: number = user.answer.correct_answers;
const incorrectAnswers: number = user.answer.incorrect_answers;

const all: number = correctAnswers + incorrectAnswers;

function getSum(first: number, second: number) {
  return first + second;
}

console.log(getSum(10, 11));


function copy(token:string) {
  var token = user.invitationToken;
  navigator.clipboard.writeText(token);
  tooltip.value =! tooltip.value
  setTimeout(() => tooltip.value = false, 2300)
}
</script>

<style scoped>
.tooltip {
  position: relative;
  display: inline-block;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 200px;
  background-color: #555;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 10px ;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -80px;
  opacity: 0;
  transition: opacity 0.3s;
}

.tooltip .tooltiptext::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #555 transparent transparent transparent;
}

.tooltip .tooltiptext {
  visibility: visible;
  opacity: 1;
}


</style>
