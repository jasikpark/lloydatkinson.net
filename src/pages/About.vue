<template>
    <layout>
        <!-- <div class="flex mb-4">
            <div class="w-1/3 bg-gray-400 h-12">Vue</div>
            <div class="w-1/3 bg-gray-500 h-12">Gridsome</div>
            <div class="w-1/3 bg-gray-400 h-12">Tailwind</div>
        </div> -->
        <!-- <h1>About us</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error doloremque omnis animi, eligendi magni a voluptatum, vitae, consequuntur rerum illum odit fugit assumenda rem dolores inventore iste reprehenderit maxime! Iusto.</p> -->
        <feature-heading title>
            About me
        </feature-heading>

        <article>
            <section>
                <feature-heading section>
                    Me
                </feature-heading>
                <p>
                    I'm a software developer and maker. I've got various interests. Making good software and solutions using clean and maintainble code is what I strive for.
                </p>
            </section>

            <section>
                <feature-heading section>
                    How I made this site
                </feature-heading>
                <p>
                    This site is a Vue.js based single page application, powered by Gridsome, a static site generator for Vue.js.
                </p>
                <p>It's hosted on Netlify.</p>
            </section>
        </article>
    </layout>
</template>

<script>
export default {
    metaInfo: {
        title: 'About Me',
    },
};
</script>