<script>
    /* importo lo store dal file store.js */
    import { store } from '../store.js';
    /* import file AppCard */
    import AppCard from './AppCard.vue';

    export default {
        data() {
            return {
                store,
            }
        },
        components:{
            AppCard
        }
    }
</script>

<template>
    <AppCard />
</template>

<style lang="scss" scoped>
    @use '../styles/partials/variables' as *;
</style>