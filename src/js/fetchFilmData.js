import axios from 'axios';

async function fetchFilmData ({ page = 1, query = '', isPopular = true }) {
    const BASE_URL = 'https://api.themoviedb.org/3/';
    const URL_PATH = isPopular ? 'trending/movie/day' : 'search/movie';

    const searchParam = new URLSearchParams({
        api_key: 'ad24807293275bef83ede161311e71e0',
        page,
        query
    });
    
    return await axios
      .get(`${BASE_URL}${URL_PATH}?${searchParam}`)
        .then(response => {
        if (response.status !== 200) {
          return Promise.reject(`Error: ${response.message}`);
          }
          return response.data;
      })
      .catch(err => {
        return Promise.reject(err=> alert("Something wrong with request to server!"));
      });
};

export default fetchFilmData;
