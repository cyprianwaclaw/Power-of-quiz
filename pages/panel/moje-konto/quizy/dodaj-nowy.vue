<template>
  <div class="family">
    <NuxtLayout name="account">
      <SearchBar />
      <div class="justify-start mb-36 full">
        <h2 class="title-hero mb-2">
          Dodaj nowy <span class="pakiet-premium">Quiz</span>
        </h2>
        <p class="description-title">
          Dodaj nowy quiz do serwisu, w którego będą mogli grać wszyscy użytkownicy
          serwisu, którzy posiadają plan
          <span class="text-hero-items-PREMIUM">PREMIUM</span>. Do dodaniu quizu, musi
          zostać on zweryfikowany, pod kątem spełniania naszych standardów. Zostaniesz
          poinformowany gdy zostanie pozytywnie rozpatrzona jego weryfikacja.
        </p>
      </div>
      <form @submit.prevent="NewQuiz">
        <!-- TITLE SECTION -->

        <div class="mt-10 sm:mt-0 border-bottom1">
          <div class="md:grid md:grid-cols-3 md:gap-6">
            <div class="md:col-span-1">
              <div class="px-4 sm:px-0">
                <h3 class="header-setting-section">Nazwa</h3>
                <p class="description-setting-section">
                  Uzupełnij podstawowe informacjw o quizie, jego tytół, stopień trudności,
                  czasowany czas trwania, kategorię oraz wgraj zdjęcie.
                </p>
              </div>
            </div>
            <div class="mt-5 md:col-span-2 md:mt-0">
              <div class="overflow-hidden shadow rounded-forms-setting">
                <div class="bg-white sm:p-6">
                  <div class="block mx-8 mt-4">
                    <label for="first-name" class="base-input-new-quiz-label"
                      >Tytuł quizu</label
                    >
                    <input
                      type="text"
                      placeholder="Napisz tytuł swojego quizu..."
                      v-model="company_name"
                      name="first-name"
                      autocomplete="given-name"
                      class="base-input-new-quiz"
                    />
                  </div>

                  <div class="block mx-8 mt-7">
                    <label for="first-name" class="base-input-new-quiz-label">
                      Wybierz kategorię</label
                    >
                    {{ selected }}

                    <select v-model="selected" required class="base-input-new-quiz">
                      <option value="" hidden>Kategoria...</option>
                      <option v-for="category in quiz.categories" :key="category.id">
                        {{ category.name }}
                      </option>
                    </select>
                  </div>
                  <div class="grid grid-cols-6 gap-6 px-8 py-5 mt-2">
                    <div class="col-span-6 sm:col-span-3">
                      <label for="first-name" class="base-input-new-quiz-label"
                        >Czas trwania
                      </label>
                      <div class="columns-2">
                        <input
                          type="text"
                          placeholder="Czas..."
                          v-model="nip"
                          name="first-name"
                          id="first-name"
                          for="given-email"
                          class="base-input-new-quiz"
                        />
                        <p class="base-input-new-quiz-label flex pt-5">minut</p>
                      </div>
                    </div>
                    <div class="col-span-6 sm:col-span-3 ml-5">
                      <label for="first-name" class="base-input-new-quiz-label"
                        >Poziom trudności {{ difficult }}</label
                      >
                      <select v-model="difficult" required class="base-input-new-quiz">
                        <option value="" hidden>Wybierz z listy...</option>
                        <option value="easy">Łatwe</option>
                        <option value="medium">Średnie</option>
                        <option value="hard">Trudne</option>
                      </select>
                    </div>
                  </div>

                  <div class="flex items-center justify-center w-full px-8 py-4 mb-5">
                    <label
                      for="dropzone-file"
                      class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 0 hover:bg-gray-100"
                    >
                      <div class="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg
                          aria-hidden="true"
                          class="w-10 h-10 mb-3 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                          ></path>
                        </svg>
                        <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                          <span class="font-semibold">Kliknij aly wrać zdjęcie</span> lub
                          przesuń je tutaj
                        </p>
                        <p class="text-xs">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                      </div>
                      <input id="dropzone-file" type="file" class="hidden" />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- DESCRIPTION SECTION -->

        <div class="mt-10 sm:mt-0 border-bottom">
          <div class="md:grid md:grid-cols-3 md:gap-6">
            <div class="md:col-span-1">
              <div class="px-4 sm:px-0">
                <h3 class="header-setting-section">Opis</h3>
                <p class="description-setting-section">
                  Opisz czego dotyczy Twój quiz, aby inni użytkownicy, wiedzieli czy warto
                  w niego
                </p>
              </div>
            </div>
            <div class="mt-5 md:col-span-2 md:mt-0">
              <div class="overflow-hidden shadow rounded-forms-setting">
                <div class="bg-white sm:p-6">
                  <div class="block mx-8 my-7 mb-12">
                    <label for="first-name" class="base-input-new-quiz-label"
                      >Wpisz tutaj swój opis</label
                    >
                    <textarea
                      type="text"
                      placeholder="Opis..."
                      v-model="company_name"
                      name="first-name"
                      autocomplete="given-name"
                      class="text-input"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- ANSWER QUESTIONS -->

        <div class="mt-10 sm:mt-0 border-bottom2">
          <div class="md:grid md:grid-cols-3 md:gap-6">
            <div class="md:col-span-1">
              <div class="px-4 sm:px-0">
                <h3 class="header-setting-section">Pytania do Twojego quizu</h3>

                <p clBass="description-setting-section">
                  Dane działalności gospodarczej na które wystawiamy fakturę za zakupiony
                  pakiet Premium
                </p>
              </div>
            </div>
            <div class="mt-5 md:col-span-2 md:mt-0">
              <div class="overflow-hidden shadow rounded-forms-setting">
                <form @submit.prevent="">
                  <div class="bg-white sm:p-6">
                    <div class="block mx-8 -mt-6">
                      <div v-for="(item, index) in form" :key="item.id" class="mt-10">
                        <div :class="{active: item.line}" class="disactive"></div>
                        <label class="base-input-new-quiz-label"
                          >Pytanie {{ index + 1 }}</label
                        >
                        <input
                          type="text"
                          placeholder="Twoje pytanie..."
                          class="base-input-new-quiz"
                          v-model="item.title"
                        />
                        <div class="grid grid-cols-6 gap-6 py-5">
                          <div class="col-span-6 sm:col-span-3">
                            <textarea
                              type="text"
                              placeholder="Odpowiedź 1"
                              v-model="item.answer1"
                              class="base-input"
                            />
                          </div>
                          <div class="col-span-6 sm:col-span-3">
                            <textarea
                              type="text"
                              placeholder="Odpowiedź 2"
                              v-model="nip"
                              class="base-input"
                            />
                          </div>
                          <div class="col-span-6 sm:col-span-3">
                            <textarea
                              type="text"
                              placeholder="Odpowiedź 3"
                              v-model="nip"
                              class="base-input"
                            />
                          </div>
                          <div class="col-span-6 sm:col-span-3">
                            <textarea
                              type="text"
                              placeholder="Odpowiedź 4"
                              v-model="nip"
                              class="base-input"
                            />
                          </div>
                        </div>
                        <div v-if="item.line" class="item-question">
                            <button class="revome-answear" @click="remove">Usuń pytanie numer {{ index + 1}}</button>
                        </div>
                      
                      </div>
                    </div>
                  </div>

                  <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
                    <button
                    @click="newQuestionInput"
                      class="text-indigo-600 hover:text-white inline-flex justify-center rounded-md border-indigo-600 border-2 py-2 px-4 text-sm font-medium shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Dodaj kolejne pytanie
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="px-4 py-3 text-right sm:px-6">
          <button
            class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Prześlij quiz do akceptacji
          </button>
        </div>
      </form>
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
import { useSettings } from "@/store/useSettings";
import { ref, onMounted, reactive } from "vue";
import { Quiz } from "@/store/useQuizzes";

const company_name = ref(null);
const nip = ref(null);
const regon = ref(null);
const postcode = ref(null);
const city = ref(null);
const street = ref(null);
const building_number = ref(null);
const house_number = ref(null);
const selected = ref("");
const difficult = ref("");

const settings = useSettings();
settings.getUserSettingsCompany();
settings.getUserSettingsCompanyAddress();

const quiz = Quiz();
quiz.getCategory();

async function NewQuiz() {
  await settings.UpdateCompany(
    company_name.value,
    nip.value,
    regon.value,
    postcode.value,
    city.value,
    street.value,
    building_number.value,
    house_number.value
  );
}

interface form {
  id: number;
  name: string;
  price: number;
}

const form = reactive([
  {
    id: 1,
    title: "",
    answer1: "",
    answer2: "",
    answer3: "",
    answer4: "",
    line:false
  },
]);

const remove = () => {
  console.log("Usuń");
}


const newQuestionInput = () => {
  console.log("Nowe pole do odpowiedzi");
  console.log(form);
  form.push({
    id: 1,
    title: "",
    answer1: "",
    answer2: "",
    answer3: "",
    answer4: "",
    line:true
  });
};
</script>
<style scoped>
.active{
  border-width: 1px;
  border-color: black;

}
.disactive{
  color: red;
}

</style>
