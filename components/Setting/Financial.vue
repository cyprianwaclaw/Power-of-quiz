<template>
    <div class="mt-10 sm:mt-0 mb-10">
    <div class="md:grid md:grid-cols-3 md:gap-6">
      <div class="md:col-span-1">
        <div class="px-4 sm:px-0">
          <div class="">
            <h3 class="header-setting-section">Dane do wypat środków</h3>
            <span class="pakiet-premium-header1">wymagane aby móc wykonać wypłatę</span>
          </div>
          <p class="description-setting-section">
            Numer rachunku bankowego, na który mają zostać realizowane wypłaty środków zgrodzonych na koncie
          </p>
        </div>
      </div>
      <div class="mt-5 md:col-span-2 md:mt-0">
        <form @submit.prevent="UpdatePersonal">
          <div class="overflow-hidden shadow rounded-forms-setting">
            <div class="bg-white sm:p-6">
              <div class="grid grid-cols-6 gap-6 px-8 py-5">
                <div class="col-span-6 sm:col-span-3">
                  <label for="first-name" class="base-input-label">Imię</label>
                  <input
                    type="text"
                    :placeholder="settings.userSettingsPersonal.name"
                    v-model="name"
                    name="first-name"
                    autocomplete="given-name"
                    class="base-input"
                  />
                </div>

                <div class="col-span-6 sm:col-span-3 ml-5">
                  <label for="first-name" class="base-input-label">Nazwisko</label>
                  <input
                    type="text"
                    :placeholder="settings.userSettingsPersonal.surname"
                    v-model="surname"
                    name="first-name"
                    id="first-name"
                    autocomplete="given-name"
                    class="base-input"
                  />
                </div>
                <div class="col-span-6 sm:col-span-3">
                  <label for="first-name" class="base-input-label">Adres e-mail</label>
                  <input
                    type="text"
                    :placeholder="settings.userSettingsPersonal.email"
                    v-model="email"
                    name="first-name"
                    id="first-name"
                    for="given-email"
                    class="base-input"
                  />
                </div>

                <div class="col-span-6 sm:col-span-3 ml-5">
                  <label for="last-name" class="base-input-label">Numer felefonu</label>
                  <input
                    type="tel"
                    name="last-name"
                    :placeholder="settings.userSettingsPersonal.phone"
                    v-model="phone"
                    autocomplete="family-name"
                    class="phone-input"
                  />
                </div>
                <div>
                  <p class="base-input-label w-full">Zdjęcie profilowe</p>
                  <div class="-mt-3 flex items-center">
                    <div v-if="user.user.avatar_path == null">
                      <Icon
                        name="carbon:user-avatar-filled"
                        size="50"
                        color="#BFCBEE"
                        class=""
                      />
                    </div>
                    <div v-else>
                      <img class="rounded-full w-10 h-10" :src="user.user.avatar_path" />
                    </div>
                    <button
                      type="button"
                      class="ml-5 rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Change
                    </button>
                  </div>
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
      {{ name }}
      <div class="py-24">
        <div class="border-t border-gray-300" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUser } from "@/store/useUser";
import { useSettings } from "@/store/useSettings";
import { ref, onMounted } from "vue";
import { log } from "console";

const name = ref(null);
const email = ref(null);
const phone = ref(null);
const surname = ref(null);

const settings = useSettings();
settings.getUserSettingsPersonal();
const user = useUser();

async function UpdatePersonal() {
  await settings.UpdatePersonal(name.value, surname.value, email.value, phone.value);
}

//{"name":"Cyddddd","surname":"Wacław","email":"cyprian@waclaw.pl",
//"phone":["312", "312", "312"], "nip": "5512638501", "company_name":"porro"
//,"regon":"382331034","city":"Wadowice","street":"Łazówka 5a",
//"building_number":"fyw","bank_name":"BANK MILLENIUM SA",
//"postcode":"34-100", "house_number":"5", "iban": "PL65802510332533324434431256"
//,"swift":"BIGBPLPW" }
</script>

<style scoped></style>
