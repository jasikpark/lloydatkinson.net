<template>
    <div
        v-if="isDevelopment">
        <slot />
    </div>
</template>

<script>
import isDevelopment from './is-development';

export default {
    name: 'DevelopmentOnly',

    computed: {
        isDevelopment,
    },
};
</script>