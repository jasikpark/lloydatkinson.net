<template>
  <!-- <div class="container p-2 mx-auto sm:p-6">
    <header>
      <div class="flex flex-col items-center justify-between sm:flex-row">
        <h1 class="text-xl">
          Lloyd Atkinson
        </h1>
        <ul class="flex items-center space-x-8 text-lg text-gray-700 t-6 sm:mt-0">
          <li>Articles</li>
          <li>About</li>
          <li>
            <span>
              <svg
                class="w-6 h-6 text-gray-700"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />  <polyline points="22,6 12,13 2,6" /></svg>
            </span>
          </li>
        </ul>
      </div>
    </header>
    <main class="mt-4">
      <Nuxt />
    </main>
  </div> -->
  <div class="container p-2 mx-auto text-xl sm:p-6">
    <nav class="flex items-center justify-between pb-6 text-xl border-b-2 border-red-400 select-none">
      Lloyd Atkinson
      <div class="flex space-x-12">
        <div class="hidden sm:block">
          <ul class="flex space-x-6 text-gray-600">
            <li class="cursor-pointer hover:text-gray-900">
              Projects
            </li>
            <li class="cursor-pointer hover:text-gray-900">
              Articles
            </li>
            <li class="cursor-pointer hover:text-gray-900">
              About
            </li>
          </ul>
        </div>
        <ul class="flex space-x-4">
          <li>
            <svg class="w-8 h-8 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </li>
          <li>
            <svg
              class="w-8 h-8 text-orange-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >  <path d="M4 11a9 9 0 0 1 9 9" />  <path d="M4 4a16 16 0 0 1 16 16" />  <circle cx="5" cy="19" r="1" /></svg>
          </li>
        </ul>
      </div>
    </nav>
    <main class="mt-20">
      <Nuxt />
    </main>
    <footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data () {
    return {
      navigationMenuOpened: false
    }
  }
})
</script>
