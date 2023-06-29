<script>
  // Importo lo store dal file store.js
  import { store } from '../store.js';

  // Importo il file del componente AppCard
  import AppCard from './AppCard.vue';
  import AppSerie from './AppSerie.vue';

  export default {
    components: {
      // Registro il componente AppCard
      AppCard,
      AppSerie,
    },
    data() {
      return {
        // Utilizzo lo store come parte dei dati del componente
        store,
      }
    },
}
</script>

<template>
  <!-- Sezione Film -->
  <div class="container mn">
    <div class="row">
      <h1 class="text-center">FILM</h1>
      <!-- Itero sugli elementi della lista di film nello store -->
      <div id="content" v-for="(film, index) in store.list" :key="index">
        <!-- Utilizzo il componente AppCard passando il film corrente come prop -->
        <AppCard v-if="film.media_type === 'movie'" :myFilm="film"/>
      </div>
    </div>
  </div>
  <!-- Sezione Serie --> 
  <div class="container mn">
    <div class="row">
      <h1 class="text-center">SERIE TV</h1>
      <!-- Itero sugli elementi della lista di serie nello store -->
      <div id="content" v-for="(serie, index) in store.list" :key="index">
        <!-- Utilizzo il componente AppSerie passando la serie corrente come prop -->
        <AppSerie v-if="serie.media_type === 'tv'" :mySerie="serie" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  /* Utilizzo variabili dal file dei parziali */
  @use '../styles/partials/variables' as *;

  /* Stile per la classe "mn" */
  .mn {
    overflow: hidden;
    width: 100%;
    min-height: 100vh;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  /* Stile per l'elemento con id "content" */
  #content {
    width: 25%;
  }

  h1{
    font-size: 30px;
    font-weight: 700;
    color: red;
  }
</style>
