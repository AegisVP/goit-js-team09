const createFilmCard = (
  { vote_average, release_date, poster_path, title, genre_ids },
  isLibrary = false
) => {
  const BASE_URL = 'https://image.tmdb.org/t/p/';

  if (!isLibrary) {
    return `<a class="filmCard" >
        <div class="filmCard-thumb">
            <img src="${BASE_URL}w300${poster_path}"}>
            </img>
        </div>
        <p class="filmCard-title">${title}</p>
        <div class="filmCard-description">
            <p class="filmCard-genres">${getFilmGenres(genre_ids)}</p>
            <p class="filmCard-release">${release_date.slice(0, 4)}</p>
        </div>
            </a>`;
  } else {
    return `<a class="filmCard" >
        <div class="filmCard-thumb">
            <img src="${BASE_URL}w300${poster_path}"}>
            </img>
        </div>
        <p class="filmCard-title">${title}</p>
        <div class="filmCard-description">
            <p class="filmCard-genres">${getFilmGenres(genre_ids)}</p>
            <p class="filmCard-release">${release_date.slice(0, 4)}</p>
            <p class="filmCard-release">${vote_average}</p>
        </div>
            </a>`;
  }
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
