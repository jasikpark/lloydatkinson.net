<template>
    <div class="container max-w-4xl px-4 mx-auto">
        <nav class="">
            <div class="border-b select-none border-red-vibrant">
                <div class="flex justify-between h-16">
                    <div class="flex">
                        <div class="flex items-center justify-center flex-shrink-0">
                            <NuxtLink to="/">
                                Lloyd Atkinson
                            </NuxtLink>
                        </div>
                    </div>
                    <div class="hidden space-x-10 sm:ml-6 sm:flex sm:items-center">
                        <ul class="items-center hidden text-sm font-medium sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                            <li>
                                <NavigationLink to="/articles">
                                    Articles
                                </NavigationLink>
                            </li>

                            <li>
                                <NavigationLink to="/projects">
                                    Projects
                                </NavigationLink>
                            </li>

                            <li>
                                <NavigationLink to="/about">
                                    About
                                </NavigationLink>
                            </li>
                        </ul>
                        <div class="flex space-x-4">
                            <NavigationLink to="/contact">
                                <svg
                                    class="w-6 h-6 text-gray-700 cursor-pointer hover:text-red-600"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </NavigationLink>

                            <a
                                rel="noopener noreferrer"
                                target="_blank"
                                href="https://github.com/lloydjatkinson">
                                <svg
                                    class="w-6 h-6 text-gray-700"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    stroke-width="2"
                                    stroke="currentColor"
                                    fill="none"
                                    stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <path
                                        stroke="none"
                                        d="M0 0h24v24H0z" />
                                    <path d="M9 19c-4.286 1.35-4.286-2.55-6-3m12 5v-3.5c0-1 .099-1.405-.5-2 2.791-.3 5.5-1.366 5.5-6.04a4.567 4.567 0 0 0 -1.333 -3.21 4.192 4.192 0 00-.08-3.227s-1.05-.3-3.476 1.267a12.334 12.334 0 0 0 -6.222 0C6.462 2.723 5.413 3.023 5.413 3.023a4.192 4.192 0 0 0 -.08 3.227A4.566 4.566 0 004 9.486c0 4.64 2.709 5.68 5.5 6.014-.591.589-.56 1.183-.5 2V21" />
                                </svg>
                            </a>

                            <!-- <svg
                                class="w-6 h-6 text-orange-500"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round">
                                <path d="M4 11a9 9 0 0 1 9 9" />
                                <path d="M4 4a16 16 0 0 1 16 16" />
                                <circle
                                    cx="5"
                                    cy="19"
                                    r="1" />
                            </svg> -->
                        </div>
                    </div>
                    <div class="flex items-center -mr-2 sm:hidden">
                        <button
                            class="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            @click="toggleMenuState">
                            <span class="sr-only">Open main menu</span>

                            <svg
                                class="w-6 h-6"
                                :class="menuOpen ? 'hidden' : 'block'"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true">
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M4 6h16M4 12h16M4 18h16" />
                            </svg>

                            <svg
                                class="w-6 h-6"
                                :class="menuOpen ? 'block' : 'hidden'"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true">
                                <path
                                    stroke-linecap="block"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div
                class="py-4 border-b select-none sm:hidden border-red-vibrant"
                :class="menuOpen ? 'block' : 'hidden'">
                <div class="space-y-6">
                    <div class="flex justify-center">
                        <ul class="space-y-3 text-sm font-medium text-center">
                            <li>
                                <NavigationLink to="/articles">
                                    Articles
                                </NavigationLink>
                            </li>

                            <li>
                                <NavigationLink to="/projects">
                                    Projects
                                </NavigationLink>
                            </li>

                            <li>
                                <NavigationLink to="/about">
                                    About
                                </NavigationLink>
                            </li>
                        </ul>
                    </div>
                    <div class="flex justify-center space-x-4">
                        <NavigationLink to="/contact">
                            <svg
                                class="w-6 h-6 text-gray-700 cursor-pointer hover:text-red-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </NavigationLink>

                        <!-- <svg
                            class="w-6 h-6 text-orange-500"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round">
                            <path d="M4 11a9 9 0 0 1 9 9" />
                            <path d="M4 4a16 16 0 0 1 16 16" />
                            <circle
                                cx="5"
                                cy="19"
                                r="1" />
                        </svg> -->
                    </div>
                </div>
            </div>
        </nav>

        <div class="py-8 sm:py-16">
            <main>
                <div class="sm:px-12">
                    <div class="py-8">
                        <!-- Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe corrupti doloribus facere consequatur ducimus sint itaque iste corporis obcaecati labore, in est nam odit nostrum accusantium eos optio rerum nemo. -->
                        <slot />
                    </div>
                </div>
            </main>
            <!-- <footer class="flex justify-center text-sm font-medium text-gray-600">
                © Lloyd Atkinson
            </footer> -->
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            menuOpen: false
        }
    },

    methods: {
        toggleMenuState () {
            this.menuOpen = !this.menuOpen;
        }
    }
}
</script>