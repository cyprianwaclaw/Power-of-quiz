<template>
    <div>
        <form @submit.prevent="onSubmit">
        <label>E-mail</label>
        <input type="email" v-model="email"/>
        <label>Hasło</label>
        <input type="password" v-model="password"/>
        <button >Zaloguj</button>   
        </form>
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import { useAuth } from '@/store/useAuth';


const password = ref('')
const email = ref('')

const login = useAuth()

async function onSubmit(values) {
    const authStore = useAuth();
    const { email, password } = values;
    await authStore.loginUser(email, password);
}

</script>

<style scoped>

</style>