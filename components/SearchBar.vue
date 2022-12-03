<template>
  <div class="w-full flex margin-search">
    <input
      class="rounded-xl border-gray-300 border-2 h-10 width1 mr-10 px-3 py-5"
      placeholder="Znajdź quiz"
    />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.width1 {
  width: 400px !important;
  height: 20px !important;
}

@media only screen and (min-width: 1280px) {
  .margin-search {
    margin-left: 0px;
    position: fixed;
    margin-top: -112px;
    z-index: 999;
  }
}
</style>
