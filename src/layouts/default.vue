<template>
    <div class="container mx-auto border-t-4 border-red-vibrant flex flex-wrap flex-col">
        <header class="mb-4">
            <!-- {{ $static.metaData.siteName }} -->
            <navigation-bar />
        </header>
        <main class="px-4">
            <slot />
        </main>
    </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import NavigationBar from '~/components/navigation-bar.vue';

export default {
    components: {
        NavigationBar,
    },
};
</script>
