

const createFilmCard = ({vote_average, release_date, poster_path, id, title, backdrop_path, genre_ids, isLibrary = false }) => {
    const BASE_URL = 'https://image.tmdb.org/t/p/';

return `<a class="filmCard" >
        <div class="filmCard-thumb">
            <img src="${BASE_URL}w300${poster_path}"}>
            </img>
        </div>
        <p class="filmCard-title">${title}</p>
        <div class="filmCard-description">
            <p class="filmCard-genres">${genre_ids}</p>
            <p class="filmCard-release">${release_date}</p>
        </div>
            </a>`
        }
        
export default createFilmCard;
