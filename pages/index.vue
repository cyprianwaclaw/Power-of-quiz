<template><div>
  <div v-if="authStore.access_token.length > 0">
   
   <h1>tessdsdt {{authStore.user.name}}</h1>
    <div v-for="response in postStore.posts" :key="response">
      <h1 v-for="post in response.data" :key="post">test: {{post.title}} </h1> 
    </div>
    </div>
  <div v-else>
      <p>Lack of access <NuxtLink to="/login"><u>Login now</u></NuxtLink></p>
  </div>
 </div></template>
    
<script setup lang="ts">
import {user} from '@/store/example'
import { useAuth } from '@/store/useAuth';

  const postStore = user()
  postStore.getPost()
const authStore = useAuth();
// eretr -t62
</script>
    
<style scoped>
</style>