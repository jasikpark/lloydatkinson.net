<template>
    <div>
        <h2 class="mb-8 text-3xl text-center">
            Articles
        </h2>
        <div>
            <ul class="divide-y divide-gray-200">
                <li
                    v-for="article of articles"
                    :key="article.slug"
                    class="py-6">
                    <p class="text-xl">
                        {{ article.title }}
                    </p>
                    <p>{{ article.description }}</p>
                    <p>{{ article.createdAt }}</p>                    
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    async asyncData ({ $content, params }) {
        
        const articles = await $content('articles')
            .only(['title', 'description', 'slug', 'createdAt'])
            .sortBy('createdAt', 'asc')
            .fetch();

        return {
            params,
            articles,
        };
    }
}
</script>