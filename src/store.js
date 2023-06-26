/* Importo il metodo reactive */
import { reactive } from 'vue';

export const store = reactive({
    apiUrl: 'https://api.themoviedb.org/3/search/movie?api_key=c0ea267bd8cb9cb15d6a7acf0872cda9',
    List: [],
    searchValue: '',
});


/* API Key: c0ea267bd8cb9cb15d6a7acf0872cda9 */