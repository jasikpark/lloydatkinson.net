<template>
    <div class="text-center align-middle">
        <h1
            v-if="bold"
            class="mt-24 text-4xl sm:text-6xl font-light leading-tight">
            <slot />
        </h1>
        <h2
            v-else
            class="mt-2 text-3xl sm:text-5xl text-gray-600 font-light leading-tight">
            <slot />
        </h2>
    </div>
</template>

<script>
export default {
    name: 'FeatureHeading',

    props: {
        bold: {
            type: Boolean,
            default: false,
        },
    },
};
</script>