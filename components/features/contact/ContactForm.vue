<template>
    <form
        id="contact-me-form"
        name="contact-me-form"
        method="post"
        action="/thanks"
        netlify
        netlify-honeypot="bot-field"
        class="w-full max-w-3xl mx-auto space-y-8 text-gray-700">
        <h2 class="mb-8 text-3xl ">
            Get in touch
        </h2>

        <input
            type="hidden"
            name="form-name"
            value="contact-me-form">

        <p class="hidden">
            <label>Don’t fill this out if you're human: <input name="bot-field"></label>
        </p>

        <div class="w-full space-y-1 appearance-none">
            <label
                for="name"
                class="block text-sm font-medium text-gray-700">Name</label>

            <input
                id="name"
                name="name"
                class="block w-full px-4 py-2 leading-relaxed bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                autocomplete="name"
                required>
        </div>
        
        <div class="w-full space-y-1 appearance-none h-18">
            <label
                for="email"
                class="block text-sm font-medium text-gray-700">
                E-Mail
            </label>

            <input
                id="email"
                name="email"
                class="block w-full px-4 py-2 leading-relaxed bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                autocomplete="email"
                required>
        </div>

        <div class="w-full space-y-1 appearance-none label-floating">
            <label
                for="message"
                class="block text-sm font-medium text-gray-700">
                Message
            </label>

            <textarea
                id="message"
                name="message"
                rows="6"
                class="block w-full px-4 py-2 leading-relaxed tracking-wide bg-gray-200 border border-gray-200 rounded appearance-none autoexpand focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                required />
        </div>

        <Button
            block
            type="submit">
            Send
        </Button>
    </form>
</template>

<script>
export default {
    name: 'ContactForm',
    
    
}
</script>
