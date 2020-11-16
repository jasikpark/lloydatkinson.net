<template>
    <div class="space-y-10">
        <section>
            <h3>Branch</h3>
            <p class="font-mono">
                {{ $config.gitBranch }}
            </p>
        </section>

        <section>
            <h3>Commit</h3>
            <p class="font-mono">
                {{ $config.gitCommit }}
            </p>
        </section>

        <section>
            <h3>Build Context</h3>
            <p class="font-mono">
                {{ $config.buildContext }}
            </p>
        </section>

        <section>
            <h3>Build Date/Time</h3>
            <p class="font-mono">
                {{ $config.buildDateTime }}
            </p>
        </section>

        <section>
            <h3>Development/Production</h3>
            <p class="font-mono">
                Development: {{ $config.dev }}
            </p>
            <p class="font-mono">
                Production: {{ !$config.dev }}
            </p>
        </section>

        <section>
            <h3>Feature Switches</h3>
            <ul class="font-mono">
                <li
                    v-for="feature in features"
                    :key="feature.name">
                    {{ feature.name }}: {{ feature.enabled }}
                </li>
            </ul>

            <button @click="setFeatureAvailability({ name: 'FeatureSwitchOne', enabled: true })">
                FeatureSwitchOne on
            </button>

            <button @click="setFeatureAvailability({ name: 'FeatureSwitchOne', enabled: false })">
                FeatureSwitchOne off
            </button>
        </section>

        <section>
            <h3>Fonts</h3>

            <ul>
                <li class="text-xs">
                    text-xs
                </li>

                <li class="text-sm">
                    text-sm
                </li>

                <li class="text-base">
                    text-base
                </li>

                <li class="text-lg">
                    text-lg
                </li>

                <li class="text-xl">
                    text-xl
                </li>

                <li class="text-2xl">
                    text-2xl
                </li>

                <li class="text-3xl">
                    text-3xl
                </li>

                <li class="text-4xl">
                    text-4xl
                </li>

                <li class="text-5xl">
                    text-5xl
                </li>

                <li class="text-6xl">
                    text-6xl
                </li>

                <li class="font-hairline">
                    font-hairline
                </li>

                <li class="font-thin">
                    font-thin
                </li>

                <li class="font-light">
                    font-light
                </li>

                <li class="font-normal">
                    font-normal
                </li>

                <li class="font-medium">
                    font-medium
                </li>

                <li class="font-semibold">
                    font-semibold
                </li>

                <li class="font-bold">
                    font-bold
                </li>

                <li class="font-extrabold">
                    font-extrabold
                </li>

                <li class="font-black">
                    font-black
                </li>

                <li class="italic">
                    italic
                </li>

                <li class="font-open-sans">
                    font-sans
                </li>
            </ul>
        </section>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    computed: {
        ...mapGetters('FeatureSwitchModule', [
            'features',
        ]),
    },

    methods: {
        ...mapActions('FeatureSwitchModule', [
            'setFeatureAvailability',
        ]),
    }
};
</script>