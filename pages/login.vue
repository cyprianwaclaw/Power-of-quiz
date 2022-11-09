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
            {{authStore}}
        </div>
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import { useAuth } from '@/store/useAuth';


const password = ref(null)
const email = ref(null)

const login = useAuth()
const authStore = useAuth();

async function onSubmit() {
    await authStore.loginUser(email.value, password.value);
}

</script>

<style scoped>

</style>