<script>
  // Importo l'Axios per effettuare richieste HTTP
  import axios from 'axios'; 

  // Importo lo store dal file store.js
  import { store } from './store.js';

  // Importo i componenti del progetto
  import AppHeader from './components/AppHeader.vue';
  import AppMain from './components/AppMain.vue';

  // Esporto il componente principale
  export default {
    data() {
      return {
        // Utilizzo lo store come parte dei dati del componente
        store,
      }
    },
    components: {
      // Registro i componenti utilizzati nel template
      AppHeader,
      AppMain,
    },
    mounted() {
      // Chiamo il metodo getFilm al momento del montaggio del componente
      this.getFilm();
    },
    methods: {
      getFilm() {
        // Costruisco l'URL dell'API utilizzando il valore dell'URL di base dallo store
        let myUrl = store.apiUrl;

        // Verifico se la barra di ricerca è vuota e aggiungo una query di ricerca all'URL
        if (store.searchValue !== '') {
          myUrl += `&query=${store.searchValue}`;
        }

        // Effettuo una richiesta GET utilizzando Axios all'URL costruito
        axios.get(myUrl).then((response) => {
          // Aggiorno la lista di film nello store con i dati ricevuti dalla risposta
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
