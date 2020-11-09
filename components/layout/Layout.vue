<template>
    <div class="container max-w-6xl p-2 mx-auto sm:p-6">
        <nav class="flex justify-between pb-2 text-xl border-b border-red-500 select-none sm:pb-6">
            <slot name="header">
                <NuxtLink to="/">
                    Lloyd Atkinson
                </NuxtLink>
            </slot>
            <div class="flex space-x-12">
                <slot name="navigation-menu">
                    <div class="hidden sm:block">
                        <ul class="flex space-x-6 text-gray-600">
                            <li class="cursor-pointer hover:text-gray-900">
                                <NuxtLink to="/projects">
                                    Projects
                                </NuxtLink>
                            </li>
                            <li class="cursor-pointer hover:text-gray-900">
                                <NuxtLink to="/articles">
                                    Articles
                                </NuxtLink>
                            </li>
                            <li class="cursor-pointer hover:text-gray-900">
                                <NuxtLink to="/about">
                                    About
                                </NuxtLink>
                            </li>
                        </ul>
                    </div>
                </slot>
                <slot name="navigation-icons">
                    <ul class="flex items-center space-x-4">
                        <li>
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
        </nav>
        <main class="mt-20">
            <slot />
        </main>
        <footer />
    </div>
</template>

<script>
export default {
    data () {
        return {
            navigationMenuOpened: false
        }
    }
}
</script>