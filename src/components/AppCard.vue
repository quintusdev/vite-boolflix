<script>
    /* importo lo store dal file store.js */
    import { store } from '../store.js';

    export default {
        data() {
            return {
                store,
            }
        },
        props:{
            myFilm: Object,
        }
    }
</script>

<template>
    <div class="card">
        <!-- inserisco la tipologia della ricerca -->
        <div>Tipologia: {{ myFilm.media_type }}</div>
        <!-- In base se Movie o Serie inserisco il nome corretto -->
        <div>Titolo: {{ myFilm.name }} {{ myFilm.title }}</div>
        <div>Titolo Originale: {{ myFilm.original_name }} {{ myFilm.original_title }}</div>
        <!-- Inserisco la bandiera correta rispetto alla lingua -->
        <div>Lingua: <img :src="'../../node_modules/country-flag-icons/flags/1x1/' + myFilm.original_language.toUpperCase() + '.svg'" alt="Bandiera non Trovata"></div>
        <!-- Inserisco il voto medio -->
        <div>Voto Medio: {{ myFilm.vote_average }}</div>
    </div>
</template>

<style lang="scss" scoped>
    @use '../styles/partials/variables' as *;

    img {
        width: 48px;
        height: 38px;
        border: 1px solid black;
    }
</style>
