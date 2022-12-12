<template>
  <div class="family">
    <NuxtLayout name="account">
        <SearchBar />
        <div class="justify-start mb-28 full">
          <h2 class="title-hero mb-2">Ustawienia konta</h2>
        </div>
        <SettingPersonal class="border-bottom1" />
        <SettingCompany class="border-bottom" />
        <SettingFinancial class="border-bottom2"/>
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">

</script>
