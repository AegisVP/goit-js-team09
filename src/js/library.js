// import createFilmCard from './createFilmCard';
// import fetchFilmData from './fetchFilmData';
// import fetchFilmGenres from './fetchFilmGenres';
import showLoader from './loader';
import axios from 'axios';
showLoader(false)

// Посилання на елементи сторінки
// const galleryEl = document.querySelector('.gallery');

// // Отримання переліку усіх жанрів фільмів та запис їх до локального сховища
// fetchFilmGenres({}).then(({ genres }) => {
//   localStorage.setItem('genres', JSON.stringify(genres));
// });

// // Отримання даних про популярні фільми (перша сторінка),
// // запис їх до локального сховища та розміщення на сторінці
// fetchFilmData({}).then(({ results }) => {
//   localStorage.setItem('requestResults', JSON.stringify(results));
//   galleryEl.innerHTML = results
//     .map(filmData => createFilmCard(filmData))
//     .join(' ');
//   showLoader(false);
// });

// async function getFilmData(array) {
//    const BASE_URL = 'https://api.themoviedb.org/3/movie/';

//    const searchParam = new URLSearchParams({
//       api_key: 'ad24807293275bef83ede161311e71e0'
//    })

//    for (let i = 0; i < array.length; i++) {
//       return await axios
//       .get(`${BASE_URL}${array[i]}?${searchParam}`)
//         .then(response => {
//         if (response.status !== 200) {
//           return Promise.reject(`Error: ${response.message}`);
//           }
//           return response.data;
//       })
//       .catch(err => {
//         return Promise.reject(err=> alert("Something wrong with request to server!"));
//       });
//    }
// }


// innerWatchedList()
// function innerWatchedList(e) {
//    let dataWatchedFilm = JSON.parse(localStorage.getItem('watchedResult'))
//    const gallery = document.querySelector('.gallery')
//    getFilmData(dataWatchedFilm).then(({ results }) => {
//    gallery.innerHTML = results
//       .map(filmData => createFilmCard(filmData))
//       .join(' ');
// });


// }