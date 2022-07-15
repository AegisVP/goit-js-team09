import createFilmCard from './js/createFilmCard';
import fetchFilmData from './js/fetchFilmData';
import fetchFilmGenres from './js/fetchFilmGenres';

// Посилання на елементи сторінки
const galleryEl = document.querySelector('.gallery');

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
  
    //Додавання слухача подій на картку для відкриття модального вікна
    // e.target.dataset.id - повертає id картки,
    // що відповідає id фільму на сервері та у локальному сховищі
  galleryEl.addEventListener('click', (e) => { 
      console.log(e.target.parentNode)
      if (e.target.nodeName === 'IMG') {
      console.log(e.target.dataset.id);}
    })
});

