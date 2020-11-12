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
    </div>
</template>