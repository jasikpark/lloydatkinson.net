<template>
    <component :is="div">
        <slot />
    </component>
</template>

<script>
export default {
    name: 'Box',

    props: {
        
    }
}
</script>

<style>

</style>