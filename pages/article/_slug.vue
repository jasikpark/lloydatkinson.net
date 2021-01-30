<template>
    <div>
        <header>
            <h2 class="mb-8 text-3xl text-center">
                {{ article.title }}
            </h2>
            
            <h3>
                {{ article.description }}
            </h3>
        </header>
        <article>
            <nuxt-content
                class="prose max-w-none"
                :document="article" />
        </article>
    </div>
</template>

<script>
export default {
    async asyncData ({ $content, params }) {
        const article = await $content('articles', params.slug).fetch();

        return { article };
    },
}
</script>