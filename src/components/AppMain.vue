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
  <div class="container mn">
    <div class="row">
            <div v-for="(film, index) in store.list" :key="index">
              <AppCard :myFilm="film"/>
            </div>
          </div>
        </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.mn {
    overflow: hidden;
  width: 100%;
  min-height: 100vh;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>
