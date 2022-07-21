import { createFilmCard } from './createFilmCard';

// Функція обов'язково отримує: дані про фільм у вигляді об'єкта, посилання на контейнер галереї
// та коллбек-функцію, обробки кліку на картку.
// Додає на сторінку розмітку галереї.
// За замовчуванням, розмітка відповідає макету для сторінки Home.
// За зміну розмітки для макету сторінки MyLibrary відповідає параметр 'isLibrary' .
// Для цього при виклику необхідно вказати другим параметром 'true'

function renderGallery({ data, elementRef, isLibrary = false }) {
  if (data.length) {
    elementRef.innerHTML = data
      .map(filmData => createFilmCard(filmData, isLibrary))
      .join(' ');
  } else {
    elementRef.innerHTML = '<p>List of films empty!</p>';
  }
  window.scrollTo(top);
}

export default renderGallery;
