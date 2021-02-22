<template>
    <div>
        <h2 class="mb-8 text-3xl text-center">
            Projects
        </h2>
        <CheckBackSoon />
    </div>
</template>

<script>
export default {
    async asyncData ({ $content, params }) {
        
        const projects = await $content('projects')
            .only(['title', 'description', 'tags', 'slug', 'path', 'createdAt'])
            .where({ published: { $eq: true }})
            .sortBy('createdAt', 'desc')
            .fetch();

        return {
            projects,
        };
    },
    
    head () {
        return {
            title: 'Projects',
        };
    },
}
</script>