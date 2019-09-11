<template>
    <layout>
        <div class="flex items-center w-full">
            <div class="w-full bg-white shadow-md p-4 md:p-8 m-4 md:max-w-3xl md:mx-auto">
                <h1 class="block w-full text-center text-center text-5xl text-gray-800 font-light leading-tight mb-8">
                    Get in touch
                </h1>
                <form
                    name="contact-me"
                    method="POST"
                    netlify
                    netlify-honeypot="filter"
                    class="md:flex md:flex-wrap md:justify-between"
                    @submit.prevent="handleSubmit">
                    <div class="hidden">
                        <input
                            type="text"
                            name="filter">
                    </div>
                    <div class="flex flex-col mb-4 md:w-1/2">
                        <label
                            class="mb-2 uppercase tracking-wide text-lg text-gray-700"
                            for="first_name">
                            First Name
                        </label>
                        <input
                            name="first_name"
                            type="text"
                            class="py-2 px-3 md:mr-2 text-grey-darkest border"
                            autocomplete="given-name">
                    </div>
                    <div class="flex flex-col mb-4 md:w-1/2">
                        <label
                            class="mb-2 md:ml-2 uppercase text-lg text-gray-700"
                            for="last_name">
                            Last Name
                        </label>
                        <input
                            class="md:ml-2 py-2 px-3 text-grey-darkest border"
                            type="text"
                            name="last_name">
                    </div>
                    <div class="flex flex-col mb-4 md:w-full">
                        <label
                            class="mb-2 uppercase text-lg text-gray-700"
                            for="email">
                            Email
                        </label>
                        <input
                            class="py-2 px-3 text-grey-darkest border"
                            type="email"
                            name="email">
                    </div>
                    <div class="flex flex-col mb-6 md:w-full">
                        <label
                            class="mb-2 uppercase text-lg text-gray-700"
                            for="password">
                            Message
                        </label>
                        <textarea
                            class="py-2 px-3 text-grey-darkest border"
                            rows="8" />
                    </div>
                    <button
                        class="block mx-auto p-4 rounded bg-red-600 hover:bg-teal-dark text-white uppercase text-lg"
                        type="submit">
                        Send
                    </button>
                </form>
                <!-- <a
                    class="block w-full text-center no-underline text-sm text-grey-dark hover:text-grey-darker"
                    href="/login">Already have an account?</a> -->
            </div>
        </div>

        <!-- <form class="w-full max-w-sm">
            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                    <label
                        class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                        for="inline-full-name">
                        Full Name
                    </label>
                </div>
                <div class="md:w-2/3">
                    <input
                        id="inline-full-name"
                        class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        type="text"
                        value="Jane Doe">
                </div>
            </div>
            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                    <label
                        class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                        for="inline-username">
                        Password
                    </label>
                </div>
                <div class="md:w-2/3">
                    <input
                        id="inline-username"
                        class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        type="password"
                        placeholder="******************">
                </div>
            </div>
            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3" />
                <label class="md:w-2/3 block text-gray-500 font-bold">
                    <input
                        class="mr-2 leading-tight"
                        type="checkbox">
                    <span class="text-sm">
                        Send me your newsletter!
                    </span>
                </label>
            </div>
            <div class="md:flex md:items-center">
                <div class="md:w-1/3" />
                <div class="md:w-2/3">
                    <button
                        class="shadow bg-red-600 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                        type="button">
                        Sign Up
                    </button>
                </div>
            </div>
        </form> -->
    </layout>
</template>

<script>
export default {
    methods: {
        encode (data) {
            return Object.keys(data)
                .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
                .join('&');
        },
        handleSubmit (e) {
            fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: this.encode({
                    'form-name': e.target.getAttribute('name'),
                    ...this.formData,
                }),
            })
                .then(() => this.$router.push('/'))
                .catch(error => alert(error));
        },
    },
};
</script>

<style>

</style>