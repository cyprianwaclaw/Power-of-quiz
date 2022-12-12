<template>
  <div class="mt-10 sm:mt-0">
    <div class="md:grid md:grid-cols-3 md:gap-6">
      <div class="md:col-span-1">
        <div class="px-4 sm:px-0">
          <h3 class="header-setting-section">Dane do wypłat zgromadzonych środków</h3>
          <span class="pakiet-premium-header1">bez tych danych nie można wypłacić zgromadzonych środków</span>
          <p class="description-setting-section">Numer rachunku bankowego, na który mają zostać 
realizowane wypłaty środków zgrodzonych
na koncie</p>
        </div>
      </div>
      <div class="mt-5 md:col-span-2 md:mt-0">
        <form @submit.prevent="UpdateFinancial">
          <div class="overflow-hidden shadow rounded-forms-setting">
            <div class="bg-white sm:p-6">
              <div class="block mx-8">
                <label for="first-name" class="base-input-label"
                  >Nazwa działalności gospodarczej</label
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
              <div class="grid grid-cols-6 gap-6 px-8 py-5">
                <div class="col-span-6 sm:col-span-3">
                  <label for="first-name" class="base-input-label">NIP</label>
                  <input
                    type="text"
                    :placeholder="settings.userSettingsCompany.nip"
                    v-model="nip"
                    name="first-name"
                    id="first-name"
                    for="given-email"
                    class="base-input"
                  />
                </div>
                <div class="col-span-6 sm:col-span-3 ml-5">
                  <label for="first-name" class="base-input-label">REGON</label>
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



const settings = useSettings();
settings.getUserSettingsFinancial();
settings.getUserSettingsCompany();
settings.getUserSettingsCompanyAddress();

async function UpdateFinancial() {
  await settings.UpdatePersonal(name.value, surname.value, email.value, phone.value);
}

</script>

<style scoped></style>
