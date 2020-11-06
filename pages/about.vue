<template>
    <p>{{ commit }}</p>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
    data () {
        return {
            commit: process.env.COMMIT_REF
        }
    }
})
</script>

<style>

</style>