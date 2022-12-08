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
        <form>
              <div class="overflow-hidden shadow rounded-forms-setting">
                <div class="bg-white sm:p-6">
                  <div class="grid grid-cols-6 gap-6 px-8 py-5">
                    <div class="col-span-6 sm:col-span-3">
                      <label
                        for="first-name"
                        class="base-input-label"
                        >Imię</label
                      >
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autocomplete="given-name"
                        class="base-input"
                      />
                    </div>

                    <div class="col-span-6 sm:col-span-3 ml-5">
                      <label
                        for="first-name"
                        class="base-input-label"
                        >Imię</label
                      >
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autocomplete="given-name"
                        class="base-input"
                      />
                    </div>
                    <div class="col-span-6 sm:col-span-3">
                      <label
                        for="first-name"
                        class="base-input-label"
                        >Adres e-mail</label
                      >
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        for="given-email"
                        class="base-input"
                      />
                    </div>

                    <div class="col-span-6 sm:col-span-3 ml-5">
                      <label
                        for="last-name"
                        class="base-input-label"
                        >Numer felefonu</label
                      >
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        autocomplete="family-name"
                        class="base-input"
                      />
                    </div>
                    <div>
                      <label class="base-input-label">Photo</label>
                      <div class="mt-1 flex items-center">
                        <div v-if="user.user.avatar_path == null">
                          <Icon
                            name="carbon:user-avatar-filled"
                            size="50"
                            color="#BFCBEE"
                            class=""
                          />
                        </div>
                        <div v-else>
                          <img
                            class="rounded-full w-10 h-10"
                            :src="user.user.avatar_path"
                          />
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
                    type="submit"
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
import { useUser } from "@/store/useUser";

const user = useUser();
</script>

<style scoped>

</style>