import createFilmCard from './createFilmCard';

// Функція здійснює отримує дані про фільм у вигляді об'єкта
// та повертає розмітку картки фільму.
// За замовчуванням, розмітка відповідає макету для сторінки Home.
// За зміну розмітки для макету сторінки MyLibrary відповідає параметр 'isLibrary' (число).
// Для цього при виклику необхідно вказати другим параметром 'true'

function renderGallery({data, elementRef, onClick}) {
  if (data.length) {
    elementRef.innerHTML = data
      .map(filmData => createFilmCard(filmData))
      .join(' ');
  // Додавання слухача на галерею
  // e.target.parentNode.dataset.id повертає id картки, що відповідає id фільму
  elementRef.addEventListener('click', (e) => { 
    if (e.target.nodeName === 'IMG') {
      console.log(e.target.parentNode.dataset.id);
      if (onClick) { onClick() };
      }
  })

  } else {
    elementRef.innerHTML = "<p>List of films empty!</p>";
  }
}

export default renderGallery;
