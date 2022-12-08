<template>
  <div>
    <NuxtLayout name="account">
      <SearchBar />
      <div class="columns-2 w-full family">
        <div class="justify-start w-full">
          <h2 class="title-hero mb-32">Moje środki</h2>
        </div>
      </div>
      <div class="w-full h-8">

      </div>
{{test.tests.data.personal}}
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { testStore } from "@/store/testStore";

const test = testStore();
test.getTestl();
console.log(test)
</script>
