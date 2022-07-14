import createFilmCard from './js/createFilmCard';
import fetchFilmData from './js/fetchFilmData';
import fetchFilmGenres from './js/fetchFilmGenres';

const galleryEl = document.querySelector('.gallery');
fetchFilmGenres({}).then(({ genres }) => {
  localStorage.setItem('genres', JSON.stringify(genres));
});
fetchFilmData({}).then(({ results }) => {
  localStorage.setItem('requestResults', JSON.stringify(results));
  galleryEl.innerHTML = results
    .map(filmData => createFilmCard(filmData))
    .join(' ');
});
