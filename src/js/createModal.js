import { getFilmGenres } from './createFilmCard';
import addQueued from './addqueueFilm';
import addWatched from './addWatched';
import removeQueued from './removeQueued';
import removeWatched from './removeWatched';
import renderGallery from './renderGallery';
import { fetchDataFromStorage } from './dataStorage';
import { isInLib } from './isInLib';
import { addSearchDescription } from '../index';

function createModal(filmData) {
	const BASE_URL = 'https://image.tmdb.org/t/p/';

	const queueChecked = isInLib({ id: filmData?.id, storageKey: 'queueResult' });
	const watchedChecked = isInLib({ id: filmData?.id, storageKey: 'watchedResult' });

	const { base, index } = findFilmBase(filmData.id);
	const imgSrc = width => filmData?.poster_path ? `${BASE_URL}w${width}${filmData.poster_path}` : ` https://via.placeholder.com/${width}x${width * 1.5}/fbf7f7c1/8c8c8c/?text=No+Poster`;

	return `
  <div class="modal-main" data-id="${filmData.id}" data-base="${base}" data-index="${index}">
    <button type="button" class="modal__close-button modal-main__btn-close" data-action="close-modal">
      <svg class="modal-main__close-icon" width="14" height="14" viewBox="0 0 32 32">
        <symbol id="close">
          <path d="M31.708 25.708c-0-0-0-0-0-0l-9.708-9.708 9.708-9.708c0-0 0-0 0-0 0.105-0.105 0.18-0.227 0.229-0.357 0.133-0.356 0.057-0.771-0.229-1.057l-4.586-4.586c-0.286-0.286-0.702-0.361-1.057-0.229-0.13 0.048-0.252 0.124-0.357 0.228 0 0-0 0-0 0l-9.708 9.708-9.708-9.708c-0-0-0-0-0-0-0.105-0.104-0.227-0.18-0.357-0.228-0.356-0.133-0.771-0.057-1.057 0.229l-4.586 4.586c-0.286 0.286-0.361 0.702-0.229 1.057 0.049 0.13 0.124 0.252 0.229 0.357 0 0 0 0 0 0l9.708 9.708-9.708 9.708c-0 0-0 0-0 0-0.104 0.105-0.18 0.227-0.229 0.357-0.133 0.355-0.057 0.771 0.229 1.057l4.586 4.586c0.286 0.286 0.702 0.361 1.057 0.229 0.13-0.049 0.252-0.124 0.357-0.229 0-0 0-0 0-0l9.708-9.708 9.708 9.708c0 0 0 0 0 0 0.105 0.105 0.227 0.18 0.357 0.229 0.356 0.133 0.771 0.057 1.057-0.229l4.586-4.586c0.286-0.286 0.362-0.702 0.229-1.057-0.049-0.13-0.124-0.252-0.229-0.357z"></path>
        </symbol>
        <use href="#close"></use>
      </svg>
    </button>
    <div class="modal-main__film-wrap">
      <div class="modal-main__film-poster list">
        <img class="film__img" srcset="${imgSrc(400)} 1x, ${imgSrc(500)} 2x" src="${imgSrc(400)}" width="280" height="398" alt="${filmData.title ? filmData.title : 'Poster'}"/>
        </div>

        <div class="modal-main__film-info list">
          <h2 id="modal-main__title" class="modal-main__title">${filmData.title ? filmData.title : '-'}</h2>
          <table>
            <tbody>
              <tr>
                <th><span>Vote</span>/<span>Votes</span></th>
                <td>
                  <span class="modal-main__article-rating">${filmData.vote_average ? filmData.vote_average.toFixed(1) : '-'}</span> /
                  <span class="modal-main__article-votes">${filmData.vote_count ? filmData.vote_count : '-'}</span>
                </td>
              </tr>
              <tr>
                <th>Popularity</th>
                <td>${filmData.popularity ? filmData.popularity.toFixed(1) : '-'}</td>
              </tr>
              <tr>
                <th>Original Title</th>
                <td>${filmData.original_title ? filmData.original_title : '-'}</td>
              </tr>
              <tr>
                <th>Genre</th>
                <td>${filmData.genre_ids ? getFilmGenres(filmData.genre_ids, true) : 'Genre is not defined'}</td>
              </tr>
            </tbody>
          </table>
          <div>
            <h3 class="modal-main__article-title">About</h3>
            <p class="modal-main__article">${filmData.overview ? filmData.overview : '-'}</p>
          </div>
          <div class="button__thumb">
          <div class="rotating-button__wrapper">
            <label>
              <input type="checkbox" name="queue" class="rotating-button__checkbox js-queue" data-label="queue" data-value="${filmData.id}" ${queueChecked ? 'checked' : ''}/>
              <span type="button" class="rotating-button__button-on">Add to queue</span>
              <span type="button" class="rotating-button__button-off">Remove from queue</span>
            </label>
          </div>
          <div class="rotating-button__wrapper">
            <label>
              <input type="checkbox" name="watched" class="rotating-button__checkbox js-watched" data-label="watched" data-value="${filmData.id}" ${watchedChecked ? 'checked' : ''}/>
              <span type="button" class="rotating-button__button-on">Add to watched</span>
              <span type="button" class="rotating-button__button-off">Remove from watched</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  <p class="modal-main__notice">To navigate, press left and right arrow keys or swipe</p>
  </div>`;
}

function selectAddDelete(e, filmData) {
	if (e.target.checked) {
		if (e.target.dataset.label === 'queue') addQueued(e, filmData);
		else addWatched(e, filmData);
	} else {
		if (e.target.dataset.label === 'queue') removeQueued(e);
		else removeWatched(e);
	}

	let isLibrary = false;
	let section = 'requestResults';
	const elementRef = document.querySelector('.gallery');
	const path = window.location.pathname.slice(window.location.pathname.lastIndexOf('/'));

	if (path === '/library.html') {
		const watchedButtonRef = document.getElementById('btn-watched');
		if (watchedButtonRef) section = watchedButtonRef.classList.contains('button--accent') ? 'watchedResult' : 'queueResult';
		isLibrary = true;
	}

	reRenderGallery({ section, elementRef, isLibrary });
}

function findFilmBase(id) {
	// const id = Number(document.querySelector('.modal-main')?.dataset.id);
	if (!id) return;
	const currentSection = findCurrentSection();
	const base = currentSection === 'main' ? 'requestResults' : currentSection === 'watched' ? 'watchedResult' : 'queueResult';
	const filmIndex = fetchDataFromStorage(base)
		.map(film => film.id)
		.indexOf(id);

	if (filmIndex !== -1) return { index: filmIndex, base };

	return;
}

function findCurrentSection() {
	const baseURI = window.location.pathname;
	if (baseURI.slice(baseURI.lastIndexOf('/')).toLowerCase() !== '/library.html') return 'main';
	if (document.getElementById('btn-watched').classList.contains('button--accent')) return 'watched';
	return 'queue';
}

function reRenderGallery({ section, elementRef, isLibrary }) {
	const data = fetchDataFromStorage(section);
	const searchQuery = fetchDataFromStorage('searchQuery');

	if (data) renderGallery({ data, elementRef, isLibrary });
	if (!isLibrary && searchQuery) addSearchDescription({ searchQuery: searchQuery.query, elementRef });
}

export { createModal, selectAddDelete };
