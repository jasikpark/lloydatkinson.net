<template>
    <span>
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
        <p class="text-xs italic text-red-500">Please choose a password.</p>
    </span>
</template>

<script>
export default {
    name: 'TextField',

    props: {
        label: {
            type: String,
            required: false,
            default: undefined,
        },
    },
}
</script>