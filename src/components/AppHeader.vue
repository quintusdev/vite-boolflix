<script>
    /* importo lo store dal file store.js */
    import { store } from '../store.js';

    export default {
        data() {
            return {
                store,
            }
        },

    }
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="input-group rounded">
                <input type="search" class="form-control rounded" placeholder="Ricerca qui il tuo film o serie preferita" aria-label="Search" aria-describedby="search-addon" v-model="store.searchValue"/>
                <button class="m-1" @click="$emit('search')">Ricerca</button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @use '../src/styles/generals.scss' as *;
    @use '../styles/partials/variables' as *;
</style>
