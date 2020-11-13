<template>
    <div class="space-y-12">
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
        </section>

        <DevelopmentOnly>
            wfopkweopkfweopkop
        </DevelopmentOnly>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters('FeatureSwitchModule', [
            'features',
        ]),

    },
};
</script>