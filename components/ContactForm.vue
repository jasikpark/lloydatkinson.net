<template>
    <form
        id="contact-me"
        name="contact-me"
        method="post"
        action="/thanks"
        netlify
        netlify-honeypot="bot-field"
        class="w-full max-w-3xl p-8 mx-auto space-y-8 text-gray-700">
        <h2 class="mb-8 text-3xl ">
            Get in touch
        </h2>

        <input type="hidden" name="form-name" value="contact-me" />
        <p class="hidden">
            <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
        </p>

        <div class="w-full space-y-1 appearance-none">
            <label
                for="name"
                class="block text-sm font-medium text-gray-700">Name</label>

            <input
                id="name"
                v-model.trim="form.name"
                class="block w-full px-4 py-2 leading-relaxed bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                autocomplete="name">

            <p
                v-if="form.showValidationMessage"
                id="email-error"
                class="text-sm text-red-600">
                Please enter your name
            </p>
        </div>
        
        <div class="w-full space-y-1 appearance-none h-18">
            <label
                for="email"
                class="block text-sm font-medium text-gray-700">
                E-Mail
            </label>

            <input
                id="email"
                v-model.trim="form.email"
                class="block w-full px-4 py-2 leading-relaxed bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                autocomplete="email">

            <p
                v-if="form.showValidationMessage"
                id="email-error"
                class="text-sm text-red-600">
                Please enter a valid email address
            </p>
        </div>

        <div class="w-full space-y-1 appearance-none label-floating">
            <label
                for="message"
                class="block text-sm font-medium text-gray-700">Message</label>

            <textarea
                id="message"
                v-model.trim="form.message"
                rows="6"
                class="block w-full px-4 py-2 leading-relaxed tracking-wide bg-gray-200 border border-gray-200 rounded appearance-none autoexpand focus:outline-none focus:bg-white focus:border-gray-500"
                type="text" />

            <p
                v-if="form.showValidationMessage"
                id="message-error"
                class="text-sm text-red-600">
                Please enter your message
            </p>
        </div>

        <Button
            block
            type="submit">
            Send
        </Button>
    </form>
</template>

<script>
import isLength from 'validator/lib/isAlpha';
import isAlpha from 'validator/lib/isAlpha';
import isEmail from 'validator/lib/isEmail';

export default {
    name: 'ContactForm',

    data () {
        return {
            form: {
                name: '',
                email: '',
                message: '',
                showValidationMessage: false,
            }
        };
    },

    computed: {
        isValidForm () {
            const { name, email, message } = this.form;

            // const a = isAlpha;
            // const b = isEmail;
            

            // const valid =
            //     isLength(name)
            //     && isEmail(email)
            //     && isAlpha(message);
            // debugger;
            // return valid;

            const valid =
                name.length > 0
                && email.length > 0
                && message.length > 0;

            return valid;
        },
    },

    methods: {
        submit (event) {
            const { name, email, message } = this.form;
            console.log({ name, email, message });

            event.preventDefault()

            if (!this.isValidForm) {
                this.form.showValidationMessage = true;

                return false;
            } else {
                this.form.showValidationMessage = false;

                return true;
            }
        }
    }
};
</script>