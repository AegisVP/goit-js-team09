import fetchFilmGenres from './js/fetchFilmGenres';
import renderGallery from './js/renderGallery';
import saveDataToStorage from './js/saveDataToStorage';
import fetchFilmData from './js/fetchFilmData';
import showLoader from './js/loader';

// Посилання на елементи сторінки
const galleryEl = document.querySelector('.gallery');

// Отримання переліку усіх жанрів фільмів та запис їх до локального сховища
fetchFilmGenres({}).then(({ genres }) => {
  saveDataToStorage('genres', genres);
});

// Отримання даних про популярні фільми (перша сторінка),
// запис їх до локального сховища та розміщення на сторінці
fetchFilmData({}).then(({ results }) => {
  saveDataToStorage('requestResults', results);
  renderGallery({
    data: results,
    elementRef: galleryEl,
    onClick: () => alert('Функцію не задано!'),
  });
  showLoader(false);
});

