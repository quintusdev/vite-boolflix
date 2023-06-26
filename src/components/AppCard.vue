<script>
    export default {
        data() {
            return {
                store,
            }
        },
        props:{
            myFilm: Object,
        }
    }
</script>

<template>
    <h1>Risultato ricerca</h1>
    <ul>
        <li>Film trovati:</li>
        <li><img :src="" alt=""></li>
    </ul>
</template>

<style lang="scss" scoped>
    @use '../styles/partials/variables' as *;
</style>
