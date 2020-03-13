<template>
    <layout>
        <div v-if="api.pending">
            <feature-heading title>
                One moment...
            </feature-heading>
        </div>
        <div v-else-if="api.successful">
            <feature-heading title>
                Thank you!
            </feature-heading>
            <feature-heading subtitle>
                I'll get back to you soon
            </feature-heading>
        </div>

        <div class="flex items-center w-full" v-else>
            <div class="w-full m-4 bg-white md:p-8 md:max-w-3xl md:mx-auto">
                <feature-heading subtitle>
                    Get in touch
                </feature-heading>
                    
                <form
                    class="md:flex md:flex-wrap md:justify-between">                    
                    <div class="hidden">
                        <input type="text" name="filter" />
                    </div>
                    <div class="flex flex-col mb-4 md:w-1/2">
                        <label
                            class="mb-2 text-lg tracking-wide text-gray-700 uppercase"
                            for="first-name">
                            First Name
                        </label>
                        <input
                            name="first-name"
                            type="text"
                            class="px-3 py-2 border md:mr-2 text-grey-darkest"
                            autocomplete="given-name"
                            v-model="firstName">
                    </div>
                    <div class="flex flex-col mb-4 md:w-1/2">
                        <label
                            class="mb-2 text-lg text-gray-700 uppercase md:ml-2"
                            for="last-name">
                            Surname
                        </label>
                        <input
                            class="px-3 py-2 border md:ml-2 text-grey-darkest"
                            type="text"
                            name="last-name"
                            v-model="surname">
                    </div>
                    <div class="flex flex-col mb-4 md:w-full">
                        <label
                            class="mb-2 text-lg text-gray-700 uppercase"
                            for="email">
                            Email
                        </label>
                        <input
                            class="px-3 py-2 border text-grey-darkest"
                            type="email"
                            name="email"
                            v-model="emailAddress">
                    </div>
                    <div class="flex flex-col mb-6 md:w-full">
                        <label
                            class="mb-2 text-lg text-gray-700 uppercase"
                            for="message">
                            Message
                        </label>
                        <textarea
                            name="message"
                            class="px-3 py-2 border text-grey-darkest"
                            rows="5"
                            v-model="message" />
                    </div>
                    <button
                        class="block p-4 mx-auto text-lg text-white uppercase bg-red-600 rounded hover:bg-red-700 active:bg-red-800 disabled:bg-red-300"
                        type="button"
                        @click="sendMessage">
                        Send
                    </button>
                </form>
            </div>
        </div>
    </layout>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Contact',
    data () {
        return {
            api: {
                successful: false,
                pending: false,
                failed: false,
            },
            firstName: '',
            surname: '',
            emailAddress: '',
            message: '',
        }
    },
    computed: {
        formValid () {
            const valid = this.firstName.length > 0
                && this.surname.length > 0
                && this.emailAddress.length > 0
                && this.emailAddress.includes('@')
                && this.message.length > 10

            return valid;
        }
    },
    methods: {
        async sendMessage () {
            this.api.pending = true;

            try {
                await axios.post(
                    'https://prod-01.uksouth.logic.azure.com:443/workflows/3cfba9cc1a424c78897c5e15cdc16583/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=vRs64ZJFKNGrZumW_KZJTsZ9g2-iMMIqMpk7PfNxZQg',
                    {
                        emailAddress: this.emailAddress,
                        firstName: this.firstName,
                        surname: this.surname,
                        message: this.message,
                    }
                );

            this.api.pending = false;
            this.api.successful = true;
                
            } catch (error) {
                this.api.failed = true;
            }
        }
    }
}
</script>