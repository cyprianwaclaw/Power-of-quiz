<template>
    <Form @submit="onSubmit">
        <label class="typo__label">Single select / dropdown</label>
        <div class="mb-4">
            <button class="btn btn-warning mx-2" @click="toggleRequired">
                Toggle required
            </button>
            <button class="btn btn-warning" @click="toggleMin">
                Toggle min length
            </button>
        </div>

        <BaseInput
            v-model="username"
            name="test"
            label="username"
            :rules="rules"
        >
        </BaseInput>

        <button class="btn btn-primary mt-1">Submit</button>
        <pre class="my-5"><code>Rules: {{ rules  }}</code></pre>
    </Form>
</template>

<script>
import { Form } from 'vee-validate';
import BaseInput from '@/components/BaseInput.vue';

export default {
    name: 'App',
    components: {
        Form,
        BaseInput,
    },
    data() {
        return {
            addRequired: true,
            addMin: false,
            username: '',
        };
    },
    computed: {
        rules() {
            var result = '';

            if (this.addRequired) result += 'required';
            if (this.addMin) result += this.addRequired ? '|min:4' : 'min:4';

            return result;
        },
    },
    methods: {
        toggleRequired() {
            this.addRequired = !this.addRequired;
        },
        toggleMin() {
            this.addMin = !this.addMin;
        },
        onSubmit(values) {
            console.log(values);
            console.log('Submitting :(');
        },
    },
};
</script>