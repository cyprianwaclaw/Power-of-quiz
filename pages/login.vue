<template>
    <div>
        <form @submit.prevent="onSubmit">
        <label>E-mail</label>
        <input type="email" v-model="email"/>
        <label>Hasło</label>
        <input type="password" v-model="password"/>
        <button >Zaloguj</button>   
        </form>
        <div class="mt-10 px-10 mx-auto">
            token: {{authStore.access_token}}
        </div>
    </div>
</template>

<script setup lang="ts">
import {ref, onMounted} from 'vue'
import { useAuth } from '@/store/useAuth';

const authStore = useAuth();
const password = ref(null)
const email = ref(null)

async function onSubmit() {
    await authStore.loginUser(email.value, password.value); 
   
}

console.log(authStore.access_token)
onMounted(()=>{
    
})
</script>

<style scoped>

</style>