<template>
    <!--
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ]
  }
  ```
-->

    <!-- This example requires Tailwind CSS v2.0+ -->
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
                        <!-- <div class="items-center hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                            <a
                                href="#"
                                class="text-sm font-medium text-gray-900">Articles</a>

                            <a
                                href="#"
                                class="text-sm font-medium text-gray-500 hover:text-gray-700">Projects</a>

                            <a
                                href="#"
                                class="text-sm font-medium text-gray-500 hover:text-gray-700">About</a>
                        </div> -->
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
                        </div>


                        <!-- Profile dropdown -->
                        <!-- <div class="relative ml-3">
                            <div>
                                <button
                                    id="user-menu"
                                    class="flex text-sm bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    aria-haspopup="true">
                                    <span class="sr-only">Open user menu</span>
                                    <img
                                        class="w-8 h-8 rounded-full"
                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                        alt="">
                                </button>
                            </div>
                        </div> -->
                    </div>
                    <div class="flex items-center -mr-2 sm:hidden">
                        <!-- Mobile menu button -->
                        <button
                            class="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            @click="toggleMenuState">
                            <span class="sr-only">Open main menu</span>
                            <!--
              Heroicon name: menu

              Menu open: "hidden", Menu closed: "block"
            -->
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
                            <!--
              Heroicon name: x

              Menu open: "block", Menu closed: "hidden"
            -->
                            <!-- <p :class="menuOpen ? 'block' : 'hidden'">X</p> -->
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

            <!--
      Mobile menu, toggle classes based on menu state.

      Open: "block", closed: "hidden"
    -->
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
                    </div>
                </div>
            </div>
        </nav>

        <div class="py-10">
            <main>
                <div class="sm:px-12">
                    <!-- <div class=""> -->
                    <!-- Replace with your content -->
                    <!-- <div class="px-4 py-8 sm:px-0">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe corrupti doloribus facere consequatur ducimus sint itaque iste corporis obcaecati labore, in est nam odit nostrum accusantium eos optio rerum nemo.
                    </div> -->
                    <slot />
                    <!-- /End replace -->
                </div>
            </main>
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