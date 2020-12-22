<template>
    <div>
        <h2 class="mb-8 text-3xl text-center">
            Articles
        </h2>
        <div>
            <ul class="divide-y divide-gray-300">   
                <li
                    v-for="article of articles"
                    :key="article.slug"
                    class="py-6">
                    <p class="text-xl">
                        {{ article.title }}
                    </p>
                    <p>{{ article.description }}</p>
                    <p>{{ article.createdAt }}</p>

                    <ul class="flex flex-row space-x-1">
                        <li
                            v-for="tag in article.tags"
                            :key="tag"
                            class="inline-flex items-center px-2 py-1 text-xs font-medium text-gray-800 bg-gray-200 rounded-full">
                            {{ tag }}
                        </li>
                    </ul>
                    <!-- <p
                        v-for="tag in article.tags"
                        :key="tag"
                        class="inline-flex items-center px-2 py-1 text-xs font-medium text-gray-800 bg-gray-200 rounded-full">
                        {{ tag }}
                    </p> -->
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    async asyncData ({ $content, params }) {
        
        const articles = await $content('articles')
            .only(['title', 'description', 'tags', 'slug', 'createdAt'])
            .where({ published: { $eq: true }})
            .sortBy('createdAt', 'asc')
            .fetch();

        return {
            params,
            articles,
        };
    }
}
</script>