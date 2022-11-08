<template><div>
   <div class="hero-image"></div>
   <h1>tessdsdt</h1>
   <div v-for="response in postStore.posts" :key="response">
    <h1 v-for="post in response.data" :key="post">test: {{post.title}} </h1> 

   </div>
 </div></template>
    
<script setup lang="ts">
import {user} from '@/store/example'
  const postStore = user()
  postStore.getPost()
</script>
    
<style scoped>
</style>