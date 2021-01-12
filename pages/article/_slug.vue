<template>
    <div>
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
        const article = await $content('articles', params.slug).fetch()

        return { article }
    }
}
</script>