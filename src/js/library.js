import showLoader from './loader';
import axios from 'axios';


const refs = {
   watchedButton: document.querySelector('.btn-lib[aria-label="Watched"]'),
   gallery: document.querySelector('.gallery'),
   queueButton: document.querySelector('.btn-lib[aria-label="Queue"]')
}

refs.watchedButton.addEventListener('click', innerWatchedList)
refs.queueButton.addEventListener('click', innerQueueList)

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
   refs.watchedButton.classList.add('button--accent')
   refs.queueButton.classList.remove('button--accent')
   refs.gallery.innerHTML = '';
   let dataWatchedFilm = JSON.parse(localStorage.getItem('watchedResult'));
   if (dataWatchedFilm == null) {
      showLoader(false)
      refs.gallery.innerHTML = `<img src="https://cases.media/image/wide/54ce0f4a-2dbd-4745-acf9-cc9a8c349cfd.jpg" max-width = "1000px" max-height = '700px'>`
      return
   } else {
      for (let i = 0; i < dataWatchedFilm.length; i++) {
         getFilmData(dataWatchedFilm[i]).then(( result ) => {
            refs.gallery.innerHTML += `<div class="filmCard" data-id="${result.id}">
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
         <p class="filmCard-genres">${getFilmGenres(result.genres)}</p>
            <p class="filmCard-release">${result.release_date.slice(0, 4)}</p>
            <p class="filmCard-rate">${result.vote_average}</p>
         </div>
      </div>`;
         });
      }
   }
   showLoader(false)
}

function getFilmGenres(genre_ids) {
   const genresList = JSON.parse(localStorage.getItem('genres'));
   const genres = [];
      for (let i = 0; i < genre_ids.length; i++) {
      for (let j = 0; j < genresList.length; j++) {
         if (genre_ids[i].id === genresList[j].id) {
            genres.push(genresList[j].name)
         }
      }
   }
   if (genres.length >= 3) {
      return genres.slice(0,2).join(', ') + ", Other"
   } else {
   return genres.join(', ')
   }
}

function innerQueueList() {
   refs.queueButton.classList.add('button--accent')
   refs.watchedButton.classList.remove('button--accent')
   refs.gallery.innerHTML = '';
   let dataQueueFilm = JSON.parse(localStorage.getItem('queueResult'));
   if (dataQueueFilm == null) {
      showLoader(false)
      refs.gallery.innerHTML = `<img src="https://cases.media/image/wide/54ce0f4a-2dbd-4745-acf9-cc9a8c349cfd.jpg" max-width = "1000px" max-height = '700px'>`
      return
   } else {
      for (let i = 0; i < dataQueueFilm.length; i++) {
         getFilmData(dataQueueFilm[i]).then(( result ) => {
            refs.gallery.innerHTML += `<div class="filmCard" data-id="${result.id}">
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
         <p class="filmCard-genres">${getFilmGenres(result.genres)}</p>
            <p class="filmCard-release">${result.release_date.slice(0, 4)}</p>
            <p class="filmCard-rate">${result.vote_average}</p>
         </div>
      </div>`;
         });
      }
   }
   showLoader(false)
}