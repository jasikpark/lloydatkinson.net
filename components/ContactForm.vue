<template>
    <!-- <div class="flex items-center justify-center w-full max-w-3xl mx-auto ">
        <form class="px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md">
            <div class="mb-4">
                <label
                    class="block mb-2 text-sm font-bold text-gray-700"
                    for="name">
                    Name
                </label>
                <input
                    id="name"
                    class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Name">
            </div>
            <div class="mb-6">
                <label
                    class="block mb-2 text-sm font-bold text-gray-700"
                    for="password">
                    Password
                </label>
                <input
                    id="password"
                    class="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    type="password"
                    placeholder="******************">
                <p class="text-xs italic text-red-500">
                    Please choose a password.
                </p>
            </div>
            <div class="flex items-center justify-between">
                <button
                    class="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                    type="button">
                    Sign In
                </button>
                <a
                    class="inline-block text-sm font-bold text-blue-500 align-baseline hover:text-blue-800"
                    href="#">
                    Forgot Password?
                </a>
            </div>
        </form>
    </div> -->
    <form
        id="contact-form"
        class="w-full max-w-3xl p-8 mx-auto text-gray-700">
        <h2 class="mb-8 text-3xl ">
            Get in touch
        </h2>

        <div class="flex flex-wrap mb-4">
            <div class="w-full appearance-none">
                <label
                    for="name"
                    class="block mb-2">
                    Your name
                </label>

                <input
                    id="name"
                    class="block w-full px-4 py-2 mb-3 leading-relaxed bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                    type="text"
                    placeholder="Your name"
                    required
                    autocomplete="name">
            </div>
        </div>

        <div class="flex flex-wrap mb-4">
            <div class="w-full appearance-none">
                <label
                    for="email"
                    class="block mb-2">
                    Your E-Mail
                </label>

                <input
                    id="email"
                    class="block w-full px-4 py-2 mb-3 leading-relaxed bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                    type="text"
                    placeholder="Your E-Mail"
                    required
                    autocomplete="email">
            </div>
        </div>
        
        <div class="flex flex-wrap mb-6">
            <div class="relative w-full appearance-none label-floating">
                <label
                    for="message"
                    class="block mb-2">
                    Message
                </label>

                <textarea
                    id="message"
                    rows="6"
                    class="block w-full px-4 py-2 mb-3 leading-relaxed tracking-wide bg-gray-200 border border-gray-200 rounded appearance-none autoexpand focus:outline-none focus:bg-white focus:border-gray-500"
                    type="text"
                    placeholder="Message..." />
            </div>
        </div>

        <Button block>
            Send
        </Button>

            <!-- <button
                class="w-full px-4 py-2 font-bold text-white bg-teal-400 rounded shadow hover:bg-teal-400 focus:shadow-outline focus:outline-none"
                type="submit">
                Send
            </button> -->
    </form>
</template>

<script>
export default {
    name: 'ContactForm'
};
</script>