<script>
    /* importo lo store dal file store.js */
    import { store } from '../store.js';

    export default {
        data() {
            return {
                store,
                showDescription: false,
            }
        },
        props:{
            myFilm: Object,
        },
        methods: {
            getFlagUrl() {
            return `../../node_modules/country-flag-icons/flags/1x1/${this.myFilm.original_language.toUpperCase()}.svg`;
            },
        }
    }
</script>

<template>
    <div class="movie-card">
      <div class="poster-wrapper"
        @mouseenter="showDescription = true"
        @mouseleave="showDescription = false">
        <img :src="'https://image.tmdb.org/t/p/w342/' + myFilm.poster_path" class="poster-image"/>
        <div class="overlay" v-show="showDescription"></div>
        <div class="description" v-show="showDescription">
          <ul>
            <li>Tipologia:&nbsp;<span><strong>{{ myFilm.media_type }}</strong></span></li>
            &nbsp;
            <li>Titolo:&nbsp;<span><strong>{{ myFilm.name || myFilm.title }}</strong></span></li>
            &nbsp;
            <li>Titolo Originale:&nbsp;<span><strong>{{ myFilm.original_name || myFilm.original_title }}</strong></span></li>
            &nbsp;
            <li>Lingua:&nbsp;<img id="flag" :src="getFlagUrl(myFilm.original_language)" :alt="myFilm.original_language.toUpperCase()"/></li>
            &nbsp;
            <li>Voto:&nbsp;
              <i v-for="star in Math.round(myFilm.vote_average / 2)" :key="star" class="fa-solid fa-star" style="color: #e9e316;"></i>
              <i v-for="star in Math.round(5 - myFilm.vote_average / 2)" :key="star" class="fa-regular fa-star" style="color: #e9e316;"></i>
            </li>
            &nbsp;
            <li>Trama:&nbsp;<p><em>{{ myFilm.overview }}</em></p></li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <style lang="scss" scoped>
  .movie-card {
    position: relative;
    width: 342px;
    height: 500px;
    margin: 20px;
    border: 2px solid white;
  }
  .poster-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .poster-image {
    width: 100%;
    height: 100%;
    transition: opacity 0.3s;
  }
  #flag{
    width: 48px;
    height: 30px;
    border: 1px solid white;
  }
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    opacity: 0;
    transition: opacity 0.3s;
  }
  .description {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    padding: 15px;
    background-color: rgba(0, 0, 0, 0.7);
    color: whitesmoke;
    opacity: 0;
    transition: opacity 0.3s;
  }
  .movie-card:hover .poster-image {
    opacity: 0.7;
  }
  .movie-card:hover .description {
    opacity: 1;
  }

  ul, li{
    list-style-type: none;
    margin: 0;
  }
  </style>
