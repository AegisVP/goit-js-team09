import { fetchDataFromStorage } from './dataStorage';

const Data = fetchDataFromStorage('requestResults');

const filmData = Data.map(film=> {if (id === film.id) {return film}});