/* Importo il metodo reactive */
import { reactive } from 'vue';

// Dichiaro un oggetto 'store' utilizzando la funzione reactive di Vue
export const store = reactive({
    apiUrl: 'https://api.themoviedb.org/3/search/multi?api_key=e99307154c6dfb0b4750f6603256716d', // L'URL dell'API utilizzato per effettuare le richieste
    list: [], // Un array vuoto che conterrà i risultati della ricerca
    searchValue: '' // Una stringa vuota che rappresenta il valore di ricerca inserito dall'utente
});


/* API Key: c0ea267bd8cb9cb15d6a7acf0872cda9 */