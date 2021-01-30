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
                    <NavigationLink :to="`/article/${article.slug}`">
                        <p class="text-xl text-gray-900">
                            {{ article.title }}
                        </p>
                        <p class="text-base text-gray-800">
                            {{ article.description }}
                        </p>
                    </NavigationLink>
                    <!-- <p class="text-gray-800">
                        {{ article.createdAt }}
                    </p> -->

                    <!-- <ul class="flex flex-row space-x-1">
                        <li
                            v-for="tag in article.tags"
                            :key="tag"
                            class="inline-flex items-center px-2 py-1 text-xs font-medium text-gray-800 bg-gray-200 rounded-full">
                            {{ tag }}
                        </li>
                    </ul> -->
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
            .only(['title', 'description', 'tags', 'slug', 'path', 'createdAt'])
            .where({ published: { $eq: true }})
            .sortBy('createdAt', 'desc')
            .fetch();

        return {
            articles,
        };
    }
}
</script>