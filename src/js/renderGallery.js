import { createFilmCard } from './createFilmCard';
// import { saveDataToStorage } from './dataStorage';

// Функція обов'язково отримує: дані про фільм у вигляді об'єкта, посилання на контейнер галереї
// та коллбек-функцію, обробки кліку на картку.
// Додає на сторінку розмітку галереї.
// За замовчуванням, розмітка відповідає макету для сторінки Home.
// За зміну розмітки для макету сторінки MyLibrary відповідає параметр 'isLibrary' .
// Для цього при виклику необхідно вказати другим параметром 'true'

function renderGallery({ data, elementRef, isLibrary = false }) {
	if (data?.length) {
    elementRef.innerHTML = data.map(filmData => createFilmCard(filmData, isLibrary)).join(' ');
    
		addHoverLabelEffect();
	} else {
		elementRef.innerHTML = '<p>List of films empty!</p>';
	}
}

function addHoverLabelEffect() {
	const labelElRefs = document.querySelectorAll('.filmCard__label');
  const labelElArr = [];
  
	for (let i = 0; i < labelElRefs?.length; i++) {
		labelElArr.push(labelElRefs[i]);
	}

	const imgElRefs = document.querySelectorAll('.filmCard__img');
  const imgElArr = [];
  
	for (let i = 0; i < imgElRefs?.length; i++) {
		imgElArr.push(imgElRefs[i]);
	}

	if (labelElArr?.length) {
		for (let i = 0; i < labelElArr.length; i++) {
			labelElArr[i].addEventListener('mouseenter', e => {
        const imgEl = imgElArr.find(el => el.parentNode === e.target.parentNode);
        
				imgEl.classList.add('hover');
			});
			labelElArr[i].addEventListener('mouseleave', e => {
        const imgEl = imgElArr.find(el => el.parentNode === e.target.parentNode);
        
				imgEl.classList.remove('hover');
			});
		}
	}
}

export default renderGallery;
