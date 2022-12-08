<template>
  <div class="mt-10 sm:mt-0">
    <div class="md:grid md:grid-cols-3 md:gap-6">
      <div class="md:col-span-1">
        <div class="px-4 sm:px-0">
          <div class="">

            <h3 class="header-setting-section">Dane do faktury</h3>
            <span class="pakiet-premium-header1">opcjonalne</span>
          </div>
          <p class="description-setting-section">
            Dane działalności gospodarczej na które wystawiamy fakturę za zakupiony pakiet
            <span class="text-hero-items-PREMIUM">PREMIUM</span>
          </p>
        </div>
      </div>
      <div class="mt-5 md:col-span-2 md:mt-0">
        <form @submit.prevent="UpdateCompany">
          <div class="overflow-hidden shadow rounded-forms-setting">
            <div class="bg-white sm:p-6">
              <div class=" px-8 py-5 -mb-4 ">
                  <label for="first-name" class="base-input-label">Nazwa działalności gospodarczej</label>
                  <input
                    type="text"
                    :placeholder="settings.userSettingsCompany.name"
                    v-model=" company_name"
                    class="base-input"  
                  />
                </div>
              <div class="grid grid-cols-6 gap-6 px-8 py-5">
                <div class="col-span-6 sm:col-span-3">
                  <label for="first-name" class="base-input-label">NIP</label>
                  <input
                    :placeholder="settings.userSettingsCompany.nip"
                    v-model="nip"
                    class="base-input"
                  />
                </div>
                <div class="col-span-6 sm:col-span-3">
                  <label for="first-name" class="base-input-label">Regon</label>
                  <input
                    type="text"
                    :placeholder="settings.userSettingsCompany.regon"
                    v-model="regon"
                    class="base-input"
                  />
                </div>

                <div class="col-span-6 sm:col-span-3  ">
                  <label for="last-name" class="base-input-label">Kod pocztowy</label>
                  <input
                    :placeholder="settings.userSettingsCompany.address.postcode"
                    v-model="postcode"
                    class="base-input"
                  />
                </div>
                <div class="col-span-6 sm:col-span-3">
                  <label for="first-name" class="base-input-label">Miejscowość</label>
                  <input
                    type="text"
                    :placeholder="settings.userSettingsCompany.address.city"
                    v-model="city"
                    class="base-input"
                  />
                </div>
                <div class="col-span-6 sm:col-span-3  ">
                  <label for="last-name" class="base-input-label">Ulica</label>
                  <input
                    name="last-name"
                    :placeholder="settings.userSettingsCompany.address.street"
                    v-model="street"
                    autocomplete="family-name"
                    class="phone-input"
                  />
                </div>
                <div class="col-span-6 sm:col-span-3">
                  <label for="first-name" class="base-input-label">Numer budynku</label>
                  <input
                    type="text"
                    :placeholder="settings.userSettingsCompany.address.building_number"
                    v-model="building_number"
                    class="base-input"
                  />
                </div>
                <div class="col-span-6 sm:col-span-3  ">
                  <label for="last-name" class="base-input-label">Numer lokalu</label>
                  <input
                    :placeholder="settings.userSettingsCompany.address.house_number"
                    v-model="house_number"
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
    <div class="hidden sm:block" aria-hidden="true">
      {{ settings.success }}
      <div class="py-24">
        <div class="border-t border-gray-300" />
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
const city = ref(null)
const postcode = ref(null)
const street = ref(null)
const building_number = ref(null)
const house_number = ref(null)

const settings = useSettings();
settings.getuserSettingsCompany();

async function UpdateCompany() {
  await settings.UpdateCompany(
    company_name.value,
    nip.value,
    regon.value,
    city.value,
    postcode.value,
    street.value,
    building_number.value,
    house_number.value,
  );
}

//{"name":"Cyddddd","surname":"Wacław","email":"cyprian@waclaw.pl",
//"phone":["312", "312", "312"], "nip": "5512638501", "company_name":"porro"
//,"regon":"382331034","city":"Wadowice","street":"Łazówka 5a",
//"building_number":"fyw","bank_name":"BANK MILLENIUM SA",
//"postcode":"34-100", "house_number":"5", "iban": "PL65802510332533324434431256"
//,"swift":"BIGBPLPW" }
</script>

<style scoped></style>
