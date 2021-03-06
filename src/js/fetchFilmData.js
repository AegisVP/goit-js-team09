import axios from 'axios';

// Функція здійснює запит на сервер та повертає promis.
// За замовчуванням, здійснює запит за першою двадцяткою популярних фільмів.
// За зміну сторінки запиту відповідає параметр 'page' (число).
// Для реалізації запиту за пошуковим запитом необхідно
// вказати параметри 'query' (рядок) та 'isSearch = true'

async function fetchFilmData({ page = 1, query = '', isSearch = false }) {
	const BASE_URL = 'https://api.themoviedb.org/3/';
	const URL_PATH = !isSearch ? 'trending/movie/day' : 'search/movie';

	const searchParam = new URLSearchParams({ api_key: 'ad24807293275bef83ede161311e71e0', page, query });

	return await axios
		.get(`${BASE_URL}${URL_PATH}?${searchParam}`)
		.then(response => {
			if (response.status !== 200) return Promise.reject(`Error: ${response.message}`);
			return response.data;
		})
		.catch(err => {
			return Promise.reject(err => {
				window.alert('There was an error during last film data request');
				console.log(err);
			});
		});
}

export default fetchFilmData;
