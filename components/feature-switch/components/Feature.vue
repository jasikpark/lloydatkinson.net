<template>
    <div>
        <slot v-if="enabled" />
        <slot
            v-else
            name="disabled" />
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import isDevelopment from '../../components/development/is-development';

export default {
    name: 'Feature',

    props: {
        name: {
            type: String,
            required: true,
            default: undefined,
        },
    },

    computed: {
        ...mapGetters('FeatureSwitchModule', [
            'features',
        ]),

        enabled () {
            const foundFeature = this.features.find((feature) => feature.name === this.name);

            if (foundFeature) {
                return foundFeature.enabled;
            }

            if (isDevelopment()) {
                console.warn(`Unknown feature switch name: ${this.name}`);
            }
            return false;
        },
    },
};
</script>