<template>
    <button
        type="button"
        class="px-4 py-2 font-normal transition duration-200 ease-in-out border shadow-md border-red-vibrant text-red-vibrant active:shadow-lg btn-outline-primary focus:outline-none hover:bg-red-100 hover:text-red-vibrant active:bg-red-200"
        v-on="$listeners">
        <slot />
    </button>
</template>

<script>
export default {

}
</script>

<style>

</style>