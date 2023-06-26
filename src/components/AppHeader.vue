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
    <div class="input-group rounded">
        <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" v-model="store.searchValue" @change="$emit('search')"/>
        <span class="input-group-text border-0" id="search-addon">
            <i class="fas fa-search"></i>
        </span>
    </div>
</template>

<style lang="scss" scoped>
    @use '../styles/partials/variables' as *;
</style>
