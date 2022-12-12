<template>
  <div class="mt-10 sm:mt-0">
    <div class="md:grid md:grid-cols-3 md:gap-6">
      <div class="md:col-span-1">
        <div class="px-4 sm:px-0">
          <h3 class="header-setting-section">Nazwa</h3>
          <p class="description-setting-section">
            Uzupełnij podstawowe informacjw o quizie, jego tytół, stopień trudności, czasowany czas trwania, kategorię oraz wgraj zdjęcie.
          </p>
        </div>
      </div>
      <div class="mt-5 md:col-span-2 md:mt-0">
        <form @submit.prevent="UpdateCompany">
          <div class="overflow-hidden shadow rounded-forms-setting">
            <div class="bg-white sm:p-6">
              <div class="block mx-8 mt-4">
                <label for="first-name" class="base-input-label"
                  >Tytuł quizu</label
                >
                <input
                  type="text"
                  :placeholder="settings.userSettingsCompany.name"
                  v-model="company_name"
                  name="first-name"
                  autocomplete="given-name"
                  class="base-input"
                />
              </div>
              <div class="block mx-8 mt-7">
                <label for="first-name" class="base-input-label"
                  > Wybierz kategorię</label
                >
                <input
                  type="text"
                  :placeholder="settings.userSettingsCompany.name"
                  v-model="company_name"
                  name="first-name"
                  autocomplete="given-name"
                  class="base-input"
                />
              </div>

             

              <div class="grid grid-cols-6 gap-6 px-8 py-5 mt-2">
                <div class="col-span-6 sm:col-span-3">
                  <label for="first-name" class="base-input-label">Czasowany czas trwania </label>
                  <div class="columns-2">
                  <input
                    type="text"
                    :placeholder="settings.userSettingsCompany.nip"
                    v-model="nip"
                    name="first-name"
                    id="first-name"
                    for="given-email"
                    class="base-input"
                  />
                  <p class="base-input-label flex pt-5">minut</p>
                </div>
                </div>
                <div class="col-span-6 sm:col-span-3 ml-5">
                  <label for="first-name" class="base-input-label">Poziom trudności</label>
                  <input
                    type="text"
                    :placeholder="settings.userSettingsCompany.regon"
                    v-model="regon"
                    name="first-name"
                    id="first-name"
                    autocomplete="given-name"
                    class="base-input"
                  />
                </div>
               </div>

              <div class="flex items-center justify-center w-full px-8 py-4">
                <label
                  for="dropzone-file"
                  class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 0 hover:bg-gray-100 "
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
                      <span class="font-semibold">Kliknij aly wrać zdjęcie</span> lub przesuń je tutaj
                    </p>
                    <p class="text-xs">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                  <input id="dropzone-file" type="file" class="hidden" />
                </label>
              </div>

            </div>
          
            <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
              <button
                class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Zapisz
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSettings } from "@/store/useSettings";
import { ref, onMounted } from "vue";

const company_name = ref(null);
const nip = ref(null);
const regon = ref(null);
const postcode = ref(null);
const city = ref(null);
const street = ref(null);
const building_number = ref(null);
const house_number = ref(null);

const settings = useSettings();
settings.getUserSettingsCompany();
settings.getUserSettingsCompanyAddress();

async function UpdateCompany() {
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
</script>

<style scoped></style>
