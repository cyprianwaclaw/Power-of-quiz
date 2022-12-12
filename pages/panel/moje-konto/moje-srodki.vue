<template>
  <div>
    <NuxtLayout name="account">
      <SearchBar />

      <div class="columns-2 w-full family">
        <div class="justify-start w-full">
          <h2 class="title-hero mb-32">Moje środki</h2>
        </div>
      </div>
      <div class="">
{{quiz.fastTwo}}
      </div>
      <div class="mt-20">

      </div>
      
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import {Quiz} from "@/store/useQuizzes";

const quiz = Quiz()
quiz.getFastTwo()

</script>
