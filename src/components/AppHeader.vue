<script>
    /* importo lo store dal file store.js */
    import { store } from '../store.js';

    export default {
        data() {
            return {
                store,
            }
        },

    }
</script>

<template>
    <h1>HEADER PART</h1>
</template>

<style lang="scss" scoped>
    @use '../styles/partials/variables' as *;
</style>
