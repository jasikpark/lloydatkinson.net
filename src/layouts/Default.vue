<template>
  <div class="border-t-4 border-red-600 container mx-auto">
    <header>
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
    NavigationBar
  }
}
</script>

<style>
/* body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
} */
</style>
