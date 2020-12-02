<template>
    <div class="container p-2 mx-auto sm:p-6">
        <nav class="flex justify-between pb-2 text-xl border-b select-none border-red-vibrant sm:pb-6">
            <slot name="header">
                <NuxtLink to="/">
                    <span
                        class="hover:text-black"
                        @click="showConfetti">
                        Lloyd Atkinson
                    </span>
                </NuxtLink>
            </slot>

            <div class="flex space-x-12">
                <div class="block sm:hidden">
                    <slot name="navigation-menu">
                        <!-- <button>
                            <svg
                                class="w-8 h-8 text-black"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button> -->
                        <button
                            class="inline-flex items-center justify-center p-1 rounded-md text-red-vibrant hover:red-700 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-insest focus:ring-white"
                            aria-expanded="false"
                            @click="toggleMenu">
                            <span class="sr-only">Open main menu</span>
                            <!-- Icon when menu is closed. -->
                            <!--
            Heroicon name: menu

            Menu open: "hidden", Menu closed: "block"
          -->
                            <!-- <svg
                                class="block w-6 h-6"
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
                            </svg> -->
                            <svg
                                v-if="menuOpened"
                                class="w-6 h-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            <!-- Icon when menu is open. -->
                            <!--
            Heroicon name: x

            Menu open: "block", Menu closed: "hidden"
          -->
                            <svg
                                v-else
                                class="w-6 h-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true">
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </slot>
                </div>

                <div class="hidden sm:block">
                    <slot name="sm-navigation-menu">
                        <ul class="flex space-x-6">
                            <li>
                                <NavigationLink to="/projects">
                                    Projects
                                </NavigationLink>
                            </li>
                            <li>
                                <NavigationLink to="/articles">
                                    Articles
                                </NavigationLink>
                            </li>
                            <li>
                                <NavigationLink to="/about">
                                    About
                                </NavigationLink>
                            </li>
                        </ul>
                    </slot>
                </div>

                <div class="hidden sm:block">
                    <slot name="sm-navigation-icons">
                        <ul class="flex items-center space-x-4">
                            <li>
                                <NavigationLink to="/contact">
                                    <svg
                                        class="w-6 h-6 text-gray-700"
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
                            </li>
                            <li>
                                <svg
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
                                </svg>
                            </li>
                        </ul>
                    </slot>
                </div>
            </div>
        </nav>
        <main class="mt-20">
            <slot />
        </main>
        <footer />
    </div>
</template>

<script>
import confetti from 'canvas-confetti'

export default {
    name: 'Layout',

    data () {
        return {
            menuOpened: false
        }
    },

    methods: {
        toggleMenu () {
            this.menuOpened = !this.menuOpened;
        },

        showConfetti () {
            const randomIntegerInRange = (min, max) =>
                Math.floor(Math.random() * (max - min + 1)) + min;
            
            if (randomIntegerInRange(0, 10) === 0) {
                confetti({
                    particleCount: 50,
                    angle: 270,
                    origin: { y: -0.1 },
                    spread: 100,
                    gravity: 0.5,
                });   
            }
        },
    },
}
</script>