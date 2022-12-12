<template>
    <div class="mt-10 sm:mt-0 border-bottom">
      <div class="md:grid md:grid-cols-3 md:gap-6">
        <div class="md:col-span-1">
          <div class="px-4 sm:px-0">
            <h3 class="header-setting-section">Opis</h3>
            <p class="description-setting-section">
              Opisz czego dotyczy Twój quiz, aby inni użytkownicy, wiedzieli czy warto w niego
            </p>
          </div>
        </div>
        <div class="mt-5 md:col-span-2 md:mt-0">
            <div class="overflow-hidden shadow rounded-forms-setting">
              <div class="bg-white sm:p-6">
                <div class="block mx-8 my-7 mb-12">
                  <label for="first-name" class="base-input-label"
                    >Wpisz tutaj swój opis</label
                  >
                  <textarea
                    type="text"
                    :placeholder="settings.userSettingsCompany.name"
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
  </template>
  
  <script setup lang="ts">
  import { useSettings } from "@/store/useSettings";
  import { ref, onMounted } from "vue";
  
  const company_name = ref(null)
  const nip = ref(null)
  const regon = ref(null)
  const postcode = ref(null)
  const city = ref(null)
  const street = ref(null)
  const building_number = ref(null)
  const house_number = ref(null)
  
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
  house_number.value,
    );
  }
  </script>
  
  <style scoped></style>
  