import createFilmCard from './createFilmCard';
import fetchFilmData from './fetchFilmData';
import fetchFilmGenres from './fetchFilmGenres';
import showLoader from './loader';
import axios from 'axios';
showLoader(false)

//// Посилання на елементи сторінки
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

async function getFilmData(idFilm) {
   const BASE_URL = 'https://api.themoviedb.org/3/movie/';

   const searchParam = new URLSearchParams({
      api_key: 'ad24807293275bef83ede161311e71e0'
   })
   
   return await axios
   .get(`${BASE_URL}${idFilm}?${searchParam}`)
      .then(response => {
      if (response.status !== 200) {
         return Promise.reject(`Error: ${response.message}`);
         }
         return response.data;
   })
   .catch(err => {
      return Promise.reject(err=> alert("Something wrong with request to server!"));
   });
}

  const imgSrc = (width, poster_path) => {
    return poster_path
      ? `${"https://image.tmdb.org/t/p/"}w${width}${poster_path}`
      : ` https://via.placeholder.com/${width}x${
          width * 1.5
        }/fbf7f7c1/8c8c8c/?text=No+Poster`;
  };

innerWatchedList()
function innerWatchedList() {
   let dataWatchedFilm = JSON.parse(localStorage.getItem('watchedResult'))
   const gallery = document.querySelector('.gallery')
   for (let i = 0; i < dataWatchedFilm.length; i++) {
         getFilmData(dataWatchedFilm[i]).then(( result ) => {
         console.log(result);
            gallery.innerHTML += `<div class="filmCard" data-id="${result.id}">
         <div class="filmCard-thumb">
         <picture>
           <source srcset="${imgSrc(300, result.poster_path)} 1x, ${imgSrc(
    500, result.poster_path
  )} 2x" media="(max-width: 767px)" />
          <source srcset="${imgSrc(400, result.poster_path)} 1x, ${imgSrc(
    500, result.poster_path
  )} 2x" media="(min-width: 768px)" />
          <img
            src="${imgSrc(300, result.poster_path)}"
            width="280"
            height="398"
            alt="Film poster"}>
          </img>
        </picture>
        </div>
        <p class="filmCard-title">${result.title}</p>
        <div class="filmCard-description">
          
            <p class="filmCard-release">${result.release_date.slice(0, 4)}</p>
            ${result.vote_average}
        </div>
      </div>`;
         });
   }
}
//<p class="filmCard-genres">${getFilmGenres(result.genres)}</p>