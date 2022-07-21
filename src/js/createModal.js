import {getFilmGenres} from './createFilmCard';

function createModal (filmData) {
    const BASE_URL = 'https://image.tmdb.org/t/p/';
    
    const imgSrc = width => {
      return filmData.poster_path
        ? `${BASE_URL}w${width}${filmData.poster_path}`
        : ` https://via.placeholder.com/${width}x${
            width * 1.5
          }/fbf7f7c1/8c8c8c/?text=No+Poster`;
    };
   return `<div class="modal-main__film-poster list">
        <img
        class="filmCard__img"
        srcset="${imgSrc(400)} 1x, ${imgSrc(500)} 2x"
        src="${imgSrc(400)}"
        width="280"
        height="398"
        alt="${filmData.title ? filmData.title : 'Poster'}"/>
        </div>

        <div class="modal-main__film-info list">
          <h2 id="modal-main__title" class="modal-main__title">
            ${filmData.title ? filmData.title : '-'}
          </h2>
          <table>
            <tbody>
              <tr>
                <th><span>Vote</span>/<span>Votes</span></th>
                <td>
                  <span class="modal-main__article-rating">${
                    filmData.vote_average ? filmData.vote_average : '-'
                  }</span> /
                  <span class="modal-main__article-votes">${
                    filmData.vote_count ? filmData.vote_count : '-'
                  }</span>
                </td>
              </tr>
              <tr>
                <th>Popularity</th>
                <td>${filmData.popularity ? filmData.popularity : '-'}</td>
              </tr>
              <tr>
                <th>Original Title</th>
                <td>${
                  filmData.original_title ? filmData.original_title : '-'
                }</td>
              </tr>
              <tr>
                <th>Genre</th>
                <td>${
                  filmData.genre_ids
                    ? getFilmGenres(filmData.genre_ids)
                    : 'Genre is not defined'
                }</td>
              </tr>
            </tbody>
          </table>
          <div>
            <h3 class="modal-main__article-title">About</h3>
            <p class="modal-main__article">
            ${filmData.overview ? filmData.overview : '-'}
            </p>
          </div>
          <div class="rotating-button__wrapper">
            <label>
              <input type="checkbox" name="queue" class="rotating-button__checkbox" />
              <span type="button" class="rotating-button__button-on">Add to queue</span>
              <span type="button" class="rotating-button__button-off">Remove from queue</span>
            </label>
          </div>
          <div class="rotating-button__wrapper">
            <label>
              <input type="checkbox" name="watched" class="rotating-button__checkbox" />
              <span type="button" class="rotating-button__button-on">Add to watched</span>
              <span type="button" class="rotating-button__button-off">Remove from watched</span>
            </label>
          </div>
        </div>`;
}

export {createModal};