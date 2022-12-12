<template>
  <div class="mt-10 sm:mt-0">
    <div class="md:grid md:grid-cols-3 md:gap-6">
      <div class="md:col-span-1">
        <div class="px-4 sm:px-0">
          <h3 class="header-setting-section">Dane do faktury</h3>
          <span class="pakiet-premium-header1">wypełnij, gdy potrzebujesz fakturę</span>
          <p class="description-setting-section">
            Dane działalności gospodarczej na które wystawiamy fakturę za zakupiony pakiet
            Premium
          </p>
        </div>
      </div>
      <div class="mt-5 md:col-span-2 md:mt-0">
        <form @submit.prevent="UpdateCompany">
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
                <div class="col-span-6 sm:col-span-3">
                  <label for="first-name" class="base-input-label">Kod pocztowy</label>
                  <input
                    type="text"
                    :placeholder="settings.userSettingsCompanyAddress.postcode"
                    v-model="postcode"
                    name="first-name"
                    id="first-name"
                    for="given-email"
                    class="base-input"
                  />
                </div>
                <div class="col-span-6 sm:col-span-3 ml-5">
                  <label for="last-name" class="base-input-label">Miejscowość</label>
                  <input
                    type="tel"
                    :placeholder="settings.userSettingsCompanyAddress.city"
                    name="last-name"
                    v-model="city"
                    autocomplete="family-name"
                    class="phone-input"
                  />
                </div>
                <div class="col-span-6 sm:col-span-3">
                  <label for="first-name" class="base-input-label">Ulica</label>
                  <input
                    type="text"
                    :placeholder="settings.userSettingsCompanyAddress.street"
                    v-model="street"
                    name="first-name"
                    id="first-name"
                    for="given-email"
                    class="base-input"
                  />
                </div>
                <div class="col-span-6 sm:col-span-3 ml-5">
                  <label for="last-name" class="base-input-label">Numer budynku</label>
                  <input
                    type="tel"
                    :placeholder="settings.userSettingsCompanyAddress.building_number"
                    name="last-name"
                    v-model="building_number"
                    autocomplete="family-name"
                    class="phone-input"
                  />
                </div>
                <div class="col-span-6 sm:col-span-3">
                  <label for="last-name" class="base-input-label">Numer domu</label>
                  <input
                    type="tel"
                    :placeholder="settings.userSettingsCompanyAddress.house_number"
                    name="last-name"
                    v-model="house_number"
                    autocomplete="family-name"
                    class="phone-input"
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
