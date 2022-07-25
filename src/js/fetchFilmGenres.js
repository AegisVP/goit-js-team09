import axios from 'axios';
import {fetchDataFromStorage} from './dataStorage';

// Функція здійснює запит на сервер та повертає promis.

async function fetchFilmGenres() {
	const savedResults = fetchDataFromStorage('genres');
	if (savedResults) {
		return Promise.resolve(savedResults)
	};

	const BASE_URL = 'https://api.themoviedb.org/3/genre/movie/list';
	const searchParam = new URLSearchParams({ api_key: 'ad24807293275bef83ede161311e71e0' });

	return await axios
		.get(`${BASE_URL}?${searchParam}`)
		.then(response => {
			if (response.status !== 200) return Promise.reject(`Error: ${response.message}`);

			return response.data.genres;
		})
		.catch(err => {
			return Promise.reject(err => {
				window.alert('There was an error during last film genres request');
				console.log(err);
			});
		});
}

export default fetchFilmGenres;
