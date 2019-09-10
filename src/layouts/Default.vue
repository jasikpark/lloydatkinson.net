<template>
    <div class="border-t-4 border-red-vibrant container mx-auto">
        <header class="mb-4">
            <!-- {{ $static.metaData.siteName }} -->
            <navigation-bar />
        </header>
        <main>
            <slot />
        </main>
    </div>
</template>

<static-query>
query {
  metaData {
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