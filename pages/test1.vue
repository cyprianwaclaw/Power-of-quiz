<template>
    <div class="column is-12">
        <label class="label" for="email">Email</label>
        <p :class="{ 'control': true }">
            <input v-validate="'required|email'" :class="{'input': true, 'is-danger': errors.has('email') }" name="email" type="text" placeholder="Email">
            <span  class="help is-danger"></span>
        </p>
    </div>
</template>