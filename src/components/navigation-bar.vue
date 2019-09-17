<template>
    <nav class="p-5 flex flex-wrap items-center justify-between bg-gray-100  border-b border-gray-300">
        <div class="flex items-center flex-shrink-0 text-gray-700 mr-8">
            <!-- <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg> -->
            <g-link to="/">
                <span class="font-semibold text-xl tracking-tight lg:hover:text-red-vibrant">Lloyd Atkinson</span>
            </g-link>
        </div>
        <div class="block lg:hidden">
            <button
                class="flex items-center px-3 py-2 border rounded text-red-vibrant border-red-vibrant hover:text-red-600 hover:border-red-600"
                @click="toggleMenu">
                <svg
                    class="fill-current h-3 w-3"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <title>
                        Menu
                    </title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
            </button>
        </div>
        <div
            class="w-full flex-grow lg:flex lg:items-center lg:w-auto"
            :class="isOpen ? 'block' : 'hidden'">
            <div class="text-sm lg:flex-grow">
                <g-link
                    to="/posts"
                    class="block mt-4 mr-8 lg:inline-block lg:mt-0 text-base text-gray-700 hover:text-red-vibrant">
                    Posts
                </g-link>
                <g-link
                    to="/projects"
                    class="block mt-4 mr-8 lg:inline-block lg:mt-0 text-base text-gray-700 hover:text-red-vibrant">
                    Projects
                </g-link>
                <g-link
                    to="/about"
                    class="block mt-4 lg:inline-block lg:mt-0 text-base text-gray-700 hover:text-red-vibrant">
                    About
                </g-link>
            </div>
            <div class="mt-8 lg:mt-0">
                <a href="https://github.com/lloydjatkinson">
                    <font-awesome
                        class="mr-5 text-gray-800 hover:text-red-600 svg-inline--fa fa-github fa-w-16 fa-lg"
                        :icon="['fab', 'github']" />
                </a>
                <g-link to="/contact">
                    <font-awesome
                        class="text-gray-800 hover:text-red-600 svg-inline--fa fa-github fa-w-16 fa-lg"
                        :icon="['far', 'envelope']" />
                </g-link>
                <a href="https://github.com/lloydjatkinson" />
            </div>
            <!-- <div>
              <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Download</a>
            </div> -->
        </div>
    </nav>
</template>

<script>
export default {
    name: 'NavigationBar',

    data () {
        return {
            isOpen: false,
        };
    },

    methods: {
        toggleMenu () {
            this.isOpen = !this.isOpen;
        },
    },
};
</script>

<style>

</style>