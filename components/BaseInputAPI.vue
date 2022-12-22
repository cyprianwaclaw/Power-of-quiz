<template>
    <div class="psa-input-text-template">
        <div class="form-group">
            <label v-if="label.length > 0" class="form-control-label d-block">
                <span>{{ label }}</span>
                <span class="text-red-500 text-md ml-1">{{
                    isRequired ? '*' : ''
                }}</span>
            </label>
            <div class="input-group">
                <!--Regular text input-->
                <input
                    :type="cmpType"
                    autocomplete="nope"
                    :placeholder="cmpPlaceHolder"
                    class="form-control pl-2"
                    :class="{ 'is-invalid': errors.length }"
                    :name="fieldName"
                    v-model="value"
                    @input="$emit('update:modelValue', $event.target.value)"
                />
            </div>

            <!-- Display error if there is error -->
            <span class="d-block invalid-feedback font-weight-500 text-sm text-red-500">
                {{ errors[0] }}
            </span>
        </div>
    </div>
</template>
<script>
import { useField } from 'vee-validate';
import { watch, ref } from 'vue';

export default {

    setup(props) {
        var fieldName = props.name.replace(/ /g, '');

        // Make the validation reactive
        var validationRef = ref(props.rules);

        watch(
            () => props.rules,
            (newValue, oldValue) => {
                validationRef.value = newValue;
                console.log('Validation has changed!', newValue);
            }
        );

        // TODO Add reactivity to props validation changing
        const { value, errors, meta } = useField(fieldName, validationRef, {
            initialValue: props.modelValue,
            label: props.name,
        });

        return {
            meta,
            value,
            errors,
        };
    },

    watch: {
        // Update the value when
        modelValue(val) {
            if (val) this.value = val;
        },
    },

    emits: ['update:modelValue'],
    props: {
        // Default value
        modelValue: [String, Number],

        // vee-validate, validation.
        rules: String,

        // If no name is passed in, use the default.
        name: {
            //type: String,
            default() {
                return 'baseName';
            },
        },
        // The label defaults to the name field
        label: {
            type: String,
            default(props) {
                return props.name || 'Base Input';
            },
        },
    },
    data() {
        return {
            // Join the name
            fieldName: this.$props.name.replace(/ /g, ''),

            // Type of input, is text if nothing is passed in
            cmpType: this.$attrs.type || 'text',

            // placeholder data
            cmpPlaceHolder: '',
        };
    },
    computed: {
        // True/false if the input is required
        isRequired() {
            return this.rules?.required;
        },
    },
    methods: {
        // Initializes the placeholder
        initPlaceholder() {
            this.cmpPlaceHolder =
                this.$attrs.placeholder || `Type the ${this.label}...`;
        },
    },
};
</script>

<style>
.form-control.is-invalid, .was-validated .form-control:invalid {
    border-color: #dc3545;
    padding-right: calc(1.5em + 0.75rem);
    background-repeat: no-repeat;
    background-position: right calc(0.375em + 0.1875rem) center;
    background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
}
</style>
