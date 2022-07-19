import { fetchDataFromStorage, saveDataToStorage } from './dataStorage';
import fetchFilmGenres from './fetchFilmGenres';

// Функція здійснює отримує дані про фільм у вигляді об'єкта
// та повертає розмітку картки фільму.
// За замовчуванням, розмітка відповідає макету для сторінки Home.
// За зміну розмітки для макету сторінки MyLibrary відповідає параметр 'isLibrary' (число).
// Для цього при виклику необхідно вказати другим параметром 'true'

const createFilmCard = (
  { id, vote_average, release_date, poster_path, title, genre_ids, original_title },
  isLibrary = false
) => {
  const BASE_URL = 'https://image.tmdb.org/t/p/';
  const rating = isLibrary
    ? `<p class="filmCard-rating">${vote_average ? vote_average.toFixed(1) : '-'}</p>`
    : '';

  const imgSrc = width => {
    return poster_path
      ? `${BASE_URL}w${width}${poster_path}`
      : ` https://via.placeholder.com/${width}x${
          width * 1.5
        }/fbf7f7c1/8c8c8c/?text=No+Poster`;
  };

  return `<div class="filmCard" data-id="${id}">
          <img
            class="filmCard__img"
            srcset="${imgSrc(400)} 1x, ${imgSrc(500)} 2x"
            src="${imgSrc(400)}"
            width="280"
            height="398"
            alt="${title ? title : 'Poster'}"
            data-action="open-modal"/>
        <p class="filmCard-title">${title ? title : (original_title ? original_title : 'No name' )}</p>
        <div class="filmCard-description">
            <p class="filmCard-genres">${genre_ids ? getFilmGenres(genre_ids) : '-'}</p>
            <p class="filmCard-release">${release_date ? release_date.slice(0, 4) : '-' }</p>
            ${rating}
        </div>
        <div class="test__btn">
        <button class="watched" data-label='watched' data-value="${id}" >watched</button>
        <button class="queue" data-label='queue' data-value="${id}">queue</button>
        </div>
      </div>`;
};

function getFilmGenres(genre_ids) {
  const genresList = fetchDataFromStorage('genres');
  const genres = [];
  if (genresList?.length) {
    for (let id of genre_ids) {
      genresList.map(genre => {
        if (genre.id === id) {
          genres.push(genre.name);
        }
      });
    }
  } else {
    return '-';
  }
  console.log(genres);
  if (genres.length <= 3) { return genres.join(', '); }
  else if (genres.length > 3) {
    return (`${genres[0]}, ${genres[1]}, Other`);
  };
}

export {createFilmCard, getFilmGenres};
