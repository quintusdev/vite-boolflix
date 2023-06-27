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
        },
    }
</script>

<template>
    <div class="movie-card d-flex justify-content-center">
        <div v-if="(myFilm.poster_path !== null)" class="py-3 px-3 m-2 rounded">
            <img :src="'https://image.tmdb.org/t/p/w342/' + myFilm.poster_path">
        </div>
        <div v-else>
            <img id="altimg" src="https://www.altavod.com/assets/images/poster-placeholder.png">
        </div>
        <ul class="description">
            <!-- inserisco la tipologia della ricerca -->
            <li>Tipologia: <span>{{ myFilm.media_type }}</span></li>
            <!-- In base se Movie o Serie inserisco il nome corretto -->
            <li>Titolo: <span>{{ myFilm.name }} {{ myFilm.title }}</span></li>
            <li>Titolo Originale: <span>{{ myFilm.original_name }} {{ myFilm.original_title }}</span></li>
            <!-- Inserisco la bandiera correta rispetto alla lingua -->
            <li>Lingua: <img id="bandiera" :src="'../../node_modules/country-flag-icons/flags/1x1/' + myFilm.original_language.toUpperCase() +'.svg'" :alt="myFilm.original_language.toUpperCase()"></li>
            <!-- Inserisco il voto medio -->
            <li>Voto: 
                <i v-for="(star, index) in Math.round(myFilm.vote_average / 2)" :key="index" class="fa-solid fa-star" style="color: #e9e316;"></i>
                <i v-for="(star, index) in Math.round(5 - myFilm.vote_average / 2)" :key="index + 4" class="fa-regular fa-star" style="color: #e9e316;"></i>
            </li>
            <li>Trama: <p>{{ myFilm.overview }}</p></li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
    @use '../styles/partials/variables' as *;

    .movie-card{
        overflow-y: scroll;
        overflow-x: hidden;

        &:hover img{
          display: none;
          opacity: 0.7;
        }
        &:hover .description{
          display: block;
        }
        img{
          width: 342px;
          height: 500px;
        }
      }

    .description{
        margin:auto;
        width: 342px;
        height: 500px;
        list-style: none;
        background-color: black;
        display: none;

        p{
            width: 300px;
        }
    }

    #bandiera{
        width: 48px;
        height: 35px;
        border: 1px solid white;
    }

    #altimg{
        width: 342px;
        height: 100%;
        background-color: black;
    }

    ul, li{
        list-style-type: none;

        li {
            font-size: 15px;
            color: whitesmoke;
            margin-bottom: 5px;
            
            span{
                font-size: 18px;
            }
        }
    }

</style>
