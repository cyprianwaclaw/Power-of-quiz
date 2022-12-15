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
                <label for="first-name" class="base-input-label columns-2 flex palace-item-center -mb-8"
                  >
                 <p class="mt-0.5"> Numer iban</p>

                  <div class="hero-text-des tooltip">
                <Icon name="ph:question-thin" size="20" color="#618CFB" class="ml-3 mb-2" />
                  <span class="tooltiptext family text-sm">
                    Międzynarodowy standard numeracji kont bankowych,<br> zaczyna się od liczb kierunkowych kraju
                  </span>
              </div>


                  </label
                >
                <input
                  type="text"
                  :placeholder="settings.userSettingsFinancial.iban"
                  v-model="iban"
                  name="first-name"
                  autocomplete="given-name"
                  class="base-input"
                />
              </div>
              <div class="grid grid-cols-6 gap-6 px-8 py-5">
                <div class="col-span-6 sm:col-span-3">
                  <label for="first-name" class="base-input-label">Nazwa banku</label>
                  <input
                    type="text"
                    :placeholder="settings.userSettingsFinancial.bank_name"
                    v-model="bank_name"
                    name="first-name"
                    id="first-name"
                    for="given-email"
                    class="base-input"
                  />
                </div>
                <div class="col-span-6 sm:col-span-3 ml-5">
                  <label for="first-name" class="base-input-label">Kod Swift</label>
                  <input
                    type="text"
                    :placeholder="settings.userSettingsFinancial.swift"
                    v-model="swift"
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

const iban = ref("")
const swift = ref("")
const bank_name = ref("");


const settings = useSettings();
settings.getUserSettingsFinancial();

async function UpdateFinancial() {

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
  top: 80%;
  left: 50%;
  margin-left: -80px;
  opacity: 0;
  transition: opacity 0.3s;
}

.tooltip .tooltiptext::after {
  position: absolute;
  bottom: 100%;
  left: 5%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #555 transparent transparent transparent;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}




</style>
