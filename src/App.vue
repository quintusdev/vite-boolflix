<script>
  /* importo l'Axios */
  /* import axios from 'axios'; */
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
    }
  }
</script>

<template>
  <!-- Inserisco tutto dentro un DIV altrimenti non visualizza nulla -->
  <div>
    <AppHeader />
    <AppMain />
  </div>
</template>

<style lang="scss">
  @use '../src/styles/generals.scss' as *;

</style>
