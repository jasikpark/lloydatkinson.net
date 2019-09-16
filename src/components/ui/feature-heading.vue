<template>
    <div
        :class="{ 'text-center': center }"
        class="font-light leading-tight">
        <h1
            v-if="title"
            class="mt-20 text-4xl sm:text-6xl">
            <slot />
        </h1>
        <h2
            v-if="subtitle"
            class="mt-2 mb-8 text-3xl sm:text-5xl text-gray-700">
            <slot />
        </h2>
        <h3
            v-if="section"
            class="mt-10 mb-2 text-2xl sm:text-3xl text-gray-700">
            <slot />
        </h3>
    </div>
</template>

<script>
export default {
    name: 'FeatureHeading',

    props: {
        title: {
            type: Boolean,
            default: false,
        },

        subtitle: {
            type: Boolean,
            default: false,
        },

        section: {
            type: Boolean,
            default: false,
        },
    },

    computed: {
        center () {
            return this.title || this.subtitle;
        }
    },
};
</script>