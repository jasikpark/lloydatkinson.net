<template>
    <NuxtLink
        v-slot="{ isActive, navigate, href }"
        :to="to">
        <a
            :href="href"
            class="inline-block cursor-pointer hover:text-gray-900"
            :class="[ isActive ? style.active : style.inactive ]"
            @click="navigate">
            <slot>{{ to }}</slot>
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
        },

        activeClass: {
            type: String,
            required: false,
            default: undefined,    
        },

        inactiveClass: {
            type: String,
            required: false,
            default: undefined,    
        },

        hoverClass: {
            type: String,
            required: false,
            default: undefined, 
        }
    },

    computed: {
        style () {
            return {
                active: this.activeClass || 'text-black',
                inactive: this.inactiveClass || 'text-gray-600',
            };
        },
    },
};
</script>