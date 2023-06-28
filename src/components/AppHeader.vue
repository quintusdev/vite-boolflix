<script>
  // Importo lo store dal file store.js
  import { store } from '../store.js';

  export default {
    data() {
      return {
        // Utilizzo lo store come parte dei dati del componente
        store,
      }
    },
  }
</script>

<template>
  <div class="container">
    <div class="row d-flex justify-content-between p-3">
      <div class="col-3">
        <!-- Immagine del logo -->
        <a href="https://fontmeme.com/it/effetto-bagliore/"><img src="https://fontmeme.com/permalink/230627/b4cef172d4499f3962fda612822b440f.png" alt="effetto-bagliore" border="0"></a>
      </div>
      <div class="col-3">
        <div class="input-group rounded gap-4 text-danger">
          <!-- Campo di input per la ricerca di film o serie -->
          <input type="search" class="form-control rounded" placeholder="Ricerca qui il tuo film o serie preferita" aria-label="Search" aria-describedby="search-addon" v-model="store.searchValue"/>
          <!-- Bottone per avviare la ricerca -->
          <button class="btn btn-primary btn-sm rounded" @click="$emit('search')">Ricerca</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  /* Utilizzo variabili dal file dei parziali */
  @use '../styles/partials/variables' as *;
</style>
