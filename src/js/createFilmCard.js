// Функція здійснює отримує дані про фільм у вигляді об'єкта
// та повертає розмітку картки фільму.
// За замовчуванням, розмітка відповідає макету для сторінки Home.
// За зміну розмітки для макету сторінки MyLibrary відповідає параметр 'isLibrary' (число).
// Для цього при виклику необхідно вказати другим параметром 'true'

const createFilmCard = (
  { vote_average, release_date, poster_path, title, genre_ids },
  isLibrary = false
) => {
  const BASE_URL = 'https://image.tmdb.org/t/p/';
  const rating = isLibrary
    ? `<p class="filmCard-rating">${vote_average.toFixed(1)}</p>`
    : '';

  const imgSrc = width => {
    return poster_path
      ? `${BASE_URL}w${width}${poster_path}`
      : ` https://via.placeholder.com/${width}x${
          width * 1.5
        }/fbf7f7c1/8c8c8c/?text=No+Poster`;
  };

  return `<a class="filmCard" >
        <div class="filmCard-thumb">
        <picture>
          <source srcset="${imgSrc(300)} 1x, ${imgSrc(
    500
  )} 2x" media="(max-width: 767px)" />
          <source srcset="${imgSrc(400)} 1x, ${imgSrc(
    500
  )} 2x" media="(min-width: 768px)" />
          <img
            src="${imgSrc(300)}"
            width="280"
            height="398"
            alt="Film poster"}>
          </img>
        </picture>
        </div>
        <p class="filmCard-title">${title}</p>
        <div class="filmCard-description">
            <p class="filmCard-genres">${getFilmGenres(genre_ids)}</p>
            <p class="filmCard-release">${release_date.slice(0, 4)}</p>
            ${rating}
        </div>
            </a>`;
};

function getFilmGenres(genre_ids) {
  const genresList = JSON.parse(localStorage.getItem('genres'));
  const genres = [];
  if (genresList.length <= 3) {
    for (let id of genre_ids) {
      genresList.map(genre => {
        if (genre.id === id) {
          return genres.push(genre.name);
        }
      });
    }
  } else {
    for (let i = 0; i < 2; i += 1) {
      genresList.map(genre => {
        if (genre_ids[i] && genre.id === genre_ids[i]) {
          return genres.push(genre.name);
        }
      });
    }
    genres.push('Other');
  }
  return genres.join(', ');
}

export default createFilmCard;