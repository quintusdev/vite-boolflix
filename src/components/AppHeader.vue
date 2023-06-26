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
        <div class="row d-flex p-3">
            <div class="input-group rounded">
                <input type="search" class="form-control rounded" placeholder="Ricerca qui il tuo film o serie preferita" aria-label="Search" aria-describedby="search-addon" v-model="store.searchValue"/>
                <button class="p-1" @click="$emit('search')">Ricerca</button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @use '../styles/partials/variables' as *;
</style>
