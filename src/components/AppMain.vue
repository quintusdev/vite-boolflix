<script>
  // Importo lo store dal file store.js
  import { store } from '../store.js';

  // Importo il file del componente AppCard
  import AppCard from './AppCard.vue';

  export default {
    components: {
      // Registro il componente AppCard
      AppCard
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
  <div class="container mn">
    <div class="row">
      <!-- Itero sugli elementi della lista di film nello store -->
      <div id="content" v-for="(film, index) in store.list" :key="index">
        <!-- Utilizzo il componente AppCard passando il film corrente come prop -->
        <AppCard :myFilm="film"/>
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
</style>
