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

innerWatchedList()
function innerWatchedList() {
   let dataWatchedFilm = JSON.parse(localStorage.getItem('watchedResult'))
   const gallery = document.querySelector('.gallery')
   for (let i = 0; i < dataWatchedFilm.length; i++) {
         getFilmData(dataWatchedFilm[i]).then(( result ) => {
         console.log(result);
            gallery.innerHTML += createFilmCard(result)
         });
   }
}

// return `<div class="filmCard" data-id="${id}">
//         <div class="filmCard-thumb">
//         <picture>
//           <source srcset="${imgSrc(300)} 1x, ${imgSrc(
//     500
//   )} 2x" media="(max-width: 767px)" />
//           <source srcset="${imgSrc(400)} 1x, ${imgSrc(
//     500
//   )} 2x" media="(min-width: 768px)" />
//           <img
//             src="${imgSrc(300)}"
//             width="280"
//             height="398"
//             alt="Film poster"}>
//           </img>
//         </picture>
//         </div>
//         <p class="filmCard-title">${title}</p>
//         <div class="filmCard-description">
//             <p class="filmCard-genres">${getFilmGenres(genre_ids)}</p>
//             <p class="filmCard-release">${release_date.slice(0, 4)}</p>
//             ${rating}
//         </div>
//         <div class="test__btn">
//         <button class="watched" data-label='watched' data-value="${id}" >watched</button>
//         <button class="queue" data-label='queue' data-value="${id}">queue</button>
//         </div>
//       </div>`;