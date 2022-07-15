import createFilmCard from './js/createFilmCard';
import fetchFilmData from './js/fetchFilmData';
import fetchFilmGenres from './js/fetchFilmGenres';
import loader from './js/loader';

// Посилання на елементи сторінки
const galleryEl = document.querySelector('.gallery');

loader('on');

// Отримання переліку усіх жанрів фільмів та запис їх до локального сховища
fetchFilmGenres({}).then(({ genres }) => {
  localStorage.setItem('genres', JSON.stringify(genres));
});

// Отримання даних про популярні фільми (перша сторінка), 
// запис їх до локального сховища та розміщення на сторінці
fetchFilmData({}).then(({ results }) => {
  localStorage.setItem('requestResults', JSON.stringify(results));
  galleryEl.innerHTML = results
    .map(filmData => createFilmCard(filmData))
    .join(' ');
  loader('off');
});
