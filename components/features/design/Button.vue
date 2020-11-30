<template>
    <button
        type="button"
        class="px-4 py-2 font-normal transition duration-200 ease-in-out border border-red-vibrant text-red-vibrant btn-outline-primary focus:outline-none hover:bg-red-100 hover:text-red-vibrant active:bg-red-200"
        :class="{ 'w-full': block }"
        v-on="$listeners">
        <slot />
    </button>
</template>

<script>
export default {
    name: 'Button',

    props: {
        block: {
            type: Boolean,
            required: false,
            default: false
        }
    }
}
</script>

<style>

</style>