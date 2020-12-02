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
                            Lloyd Atkinson
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
                class="border-b select-none sm:hidden border-red-vibrant"
                :class="menuOpen ? 'block' : 'hidden'">
                <div class="pt-2 pb-3 space-y-1">
                    <a
                        href="#"
                        class="block py-2 pl-3 pr-4 text-base font-medium text-indigo-700 border-l-4 border-indigo-500 bg-indigo-50">Articles</a>

                    <a
                        href="#"
                        class="block py-2 pl-3 pr-4 text-base font-medium text-gray-600 border-l-4 border-transparent hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300">Projects</a>

                    <a
                        href="#"
                        class="block py-2 pl-3 pr-4 text-base font-medium text-gray-600 border-l-4 border-transparent hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300">About</a>
                </div>
                <div class="pt-4 pb-3 border-t border-red-200">
                    <div class="flex items-center px-4">
                        <div class="flex-shrink-0">
                            <img
                                class="w-10 h-10 rounded-full"
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt="">
                        </div>
                        <div class="ml-3">
                            <div class="text-base font-medium text-gray-800">
                                Tom Cook
                            </div>
                            <div class="text-sm font-medium text-gray-500">
                                tom@example.com
                            </div>
                        </div>
                        <button class="flex-shrink-0 p-1 ml-auto text-gray-400 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            <span class="sr-only">View notifications</span>
                            <!-- Heroicon name: bell -->
                            <svg
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
                                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                        </button>
                    </div>
                    <div class="mt-3 space-y-1">
                        <a
                            href="#"
                            class="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100">Your Profile</a>

                        <a
                            href="#"
                            class="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100">Settings</a>

                        <a
                            href="#"
                            class="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100">Sign out</a>
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