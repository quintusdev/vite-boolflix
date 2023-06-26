<script>
    /* importo lo store dal file store.js */
    import { store } from '../store.js';
    /* import file AppCard */
    import AppCard from './AppCard.vue';

    export default {
        components:{
            AppCard
        },
        data() {
            return {
                store,
            }
        },
        
    }
</script>

<template>
    <div class="contaniner">
        <div class="row">
            <div class="content d-flex flex-wrap">
                <div v-for="(film, index) in store.list" :key="index">
                    <AppCard :myFilm="film"/>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @use '../styles/partials/variables' as *;
</style>