import axios from 'axios';

async function fetchFilmGenres ({ page = 1, query = '', isPopular = true }) {
    const BASE_URL = 'https://api.themoviedb.org/3/genre/movie/list';
    const searchParam = new URLSearchParams({
        api_key: 'ad24807293275bef83ede161311e71e0',
    });
    
    return await axios
      .get(`${BASE_URL}?${searchParam}`)
        .then(response => {
        if (response.status !== 200) {
          return Promise.reject(`Error: ${response.message}`);
          }
          console.log(response)
          return response.data;
      })
      .catch(err => {
        return Promise.reject(err=> alert("Something wrong with request to server!"));
      });
};

export default fetchFilmGenres;
