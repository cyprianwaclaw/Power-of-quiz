<template>
<div class="z-20">
        <div class=" md:mx-auto 2xl:px-14 lg:px-10 md:px-4 md:pt-5 md:pb-3 hidden md:block bac-white">
            <div class="columns-2">
             <div class=" flex w-full">
                  <NuxtLink to="/"><img class="image-width" src="@/assets/file/logo.png"/> </NuxtLink>
            </div>
            <div class="flex mt-7 justify-end gap-12">
               <span class="text-black1 mt-3 cursor-pointer">Loren ipsum</span>
               <NuxtLink to="/login"><button class="border primary-button hover:bg-blue-100"><p class="text-black1">Zaloguj się</p></button></NuxtLink>
            </div>
        </div>
        </div>
</div>        
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import gsap from 'gsap';

</script>
<style lang="scss" scoped>
.image-width{
    width:240px; 
}
.bac-white{
    background-color: white !important;
    border: 1px solid #C0CEDC;
    box-shadow: 0px -1px 11px rgba(0, 0, 0, 0.17);
}
</style>