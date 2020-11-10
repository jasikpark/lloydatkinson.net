<template>
    <NuxtLink
        v-slot="{ isActive, navigate, href }"
        :to="to">
        <a
            :href="href"
            class="cursor-pointer hover:text-gray-900"
            :class="[ isActive ? 'text-black' : 'text-gray-600' ]"
            @click="navigate">
            <slot>{{ to }} {{ isActive }}</slot>
        </a>
    </NuxtLink>
</template>

<script>
export default {
    name: 'NavigationLink',

    props: {
        to: {
            type: String,
            required: true,
            default: ''
        }
    }
}
</script>