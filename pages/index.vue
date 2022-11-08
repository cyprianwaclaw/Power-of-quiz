<template><div>
   <div class="hero-image"></div>
   <h1>tessdsdt</h1>
   <div v-for="post in postStore.posts" :key="post">
      tytul: {{post.success && post.data[0].title}}
      tytul: {{post.success && post.data[1].title}}
      
   </div>
 </div></template>
    
<script setup lang="ts">
import {user} from '@/stores/example'
  const postStore = user()
  postStore.getPost()
  console.log(postStore)
</script>
    
<style scoped>
</style>