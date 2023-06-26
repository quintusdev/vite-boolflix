<script>
  /* importo l'Axios */
  import axios from 'axios'; 
  /* importo lo store dal file store.js */
  import { store } from './store.js';

/* IMPORT FILE PROGETTO */
  import AppHeader from './components/AppHeader.vue';
  import AppMain from './components/AppMain.vue';

  /* EXPORT COMPONENTS E DATA */
  export default{
    data() {
      return {
        store,
      }
    },
    components:{
      AppHeader,
      AppMain,
    },
    mounted(){
      this.getFilm();
    },
    methods: {
      getFilm(){
        /* Inserisco l'API in una variabile */
        let myUrl = store.apiUrl;

        /* verifico che la barra di ricerca non sia vupta e aggiungo la query corrispondente alla richiesta di ricerca */
        if (store.searchValue !== '') {
          myUrl += `&query=${store.searchValue}`;
        }

        /* richiamo la axios e inserisco i dati */
        axios.get(myUrl).then((response) => {
          store.list = response.data.results;
        });
      }
    }
  }
</script>

<template>
  <!-- Inserisco tutto dentro un DIV altrimenti non visualizza nulla -->
  <div>
    <!-- Inserisco la funzione di ricerca al click del bottone -->
      <AppHeader @search="getFilm"/>
      <AppMain />
  </div>
</template>

<style lang="scss">
  @use '../src/styles/generals.scss' as *;

</style>
