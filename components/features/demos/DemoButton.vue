  
<template>
    <button
        class="px-4 py-1 font-medium text-orange-500 border-2 border-red-600 focus:outline-none"
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