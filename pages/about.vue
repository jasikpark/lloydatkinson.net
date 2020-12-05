<template>
    <div>
        <h2 class="mb-8 text-3xl text-center">
            About
        </h2>
        <div class="prose max-w-none">
            <section>
                <p>
                    I'm Lloyd. I'm a software developer and maker. I'm interested in a number of subject areas, including software development, embedded systems, and electronics.
                </p>
                <p>
                    I advocate for making and designing software well. Clean code, unit testing, maintainable and extensible code.
                </p>
                <p>
                    This is my place on the internet where I take notes, write articles about topics I'm passionate about, rant about things, and share my creative projects.
                </p>
            </section>

            <section>
                Checkout my <NavigationLink to="/articles">
                    Articles
                </NavigationLink>
                and
                <NavigationLink to="/articles">
                    Projects
                </NavigationLink>.
            </section>
            
            <section>
                <p>
                    I made this site with Nuxt, Tailwind CSS, and host it on Netlify.
                </p>
            </section>
            
            <hr>

            <section>
                <p class="text-2xl text-center">
                    👌
                </p>
            </section>
        </div>
        <!-- <div class="space-y-6">
            <div class="space-y-6">
                <p>
                    I'm Lloyd. I'm a software developer and maker. I'm interested in a wide range of subject areas, including software development, embedded systems, and electronics.
                </p>
                <p>
                    I advocate for making and designing software well. Clean code, unit testing, maintainable and extensible code.
                </p>
                <p>
                    This is my place on the internet where I take notes, write articles about topics I'm passionate about, rant about things, and share my creative projects.
                </p>
            </div>
            <div class="">
                I made this site with Nuxt, Tailwind CSS, and host it on Netlify.
            </div>

            <hr>


        </div> -->
    </div>
</template>

<style>
.filter-grayscale {
    filter: grayscale(1);
}
</style>