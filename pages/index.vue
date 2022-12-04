<template><div>
  <div v-if="authStore.access_token.length > 0">
     <!--//TODO Nie zawsze to działa, czasem są błędy -->
    </div>
  <div v-else>
      <p>Lack of access <NuxtLink to="/login"><u>Login now</u></NuxtLink></p>



  </div>
 </div></template>
    
<script setup lang="ts">
  import {ref} from 'vue'
import {user} from '@/store/example'
import { useAuth } from '@/store/useAuth';

const postStore = user()
postStore.getPost()
const authStore = useAuth();

</script>
    
<style scoped>
</style>