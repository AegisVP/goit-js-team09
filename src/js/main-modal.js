import { fetchDataFromStorage } from './dataStorage';
import { createModal, selectAddDelete } from './createModal';

const KEY_CODE_ESC = 'Escape';
const KEY_CODE_ARROW_LEFT = 'ArrowLeft';
const KEY_CODE_ARROW_RIGHT = 'ArrowRight';
let modalWindowRef = null;
let xDown = null;
let yDown = null;

function onOpenModal(id, elementRef, storageBases = ['requestResults', 'watchedResult', 'queueResult']) {
	const ID = Number(id);
	let filmData = null;
	modalWindowRef = elementRef;

	for (const storageBase of storageBases) {
		filmData = fetchDataFromStorage(storageBase)?.find(({ id }) => id === ID);

		if (filmData) break;
	}

	modalWindowRef.firstElementChild.innerHTML = createModal(filmData);
	document.body.classList.add('show-modal');
	modalWindowRef.classList.remove('is-hidden');
	
	document.querySelector('[data-action="close-modal"]').addEventListener('click', onCloseModal);
	document.querySelector('.rotating-button__wrapper input[name="queue"]').addEventListener('change', e => selectAddDelete(e, filmData));
	document.querySelector('.rotating-button__wrapper input[name="watched"]').addEventListener('change', e => selectAddDelete(e, filmData));

	// add listeners
	window.addEventListener('keydown', onKeyPress);
	document.addEventListener('touchstart', handleTouchStart);
	document.addEventListener('touchmove', handleTouchMove);
	modalWindowRef.addEventListener('click', onBackdropClick);
}

function onCloseModal() {
	document.body.classList.remove('show-modal');
	modalWindowRef.classList.add('is-hidden');

	// remove listeners
	window.removeEventListener('keydown', onKeyPress);
	document.removeEventListener('touchstart', handleTouchStart);
	document.removeEventListener('touchmove', handleTouchMove);
	modalWindowRef.removeEventListener('click', onBackdropClick);
}

function onBackdropClick(event) {
	if (event.currentTarget === event.target) onCloseModal();
}

function getTouches(e) {
	return e.touches || e.originalEvent.touches;
}

function handleTouchStart(e) {
	const firstTouch = getTouches(e)[0];
	xDown = firstTouch.clientX;
	yDown = firstTouch.clientY;
}

function handleTouchMove(e) {
	if (!xDown || !yDown) return;

	let xUp = e.touches[0].clientX;
	let yUp = e.touches[0].clientY;

	let xDiff = xDown - xUp;
	let yDiff = yDown - yUp;
	
	if (Math.abs(xDiff) > Math.abs(yDiff)) {
		if (xDiff > 0) nextFilm();
		else prevFilm();
	}

	xDown = null;
	yDown = null;
}

function onKeyPress(event) {
	if (event.code === KEY_CODE_ARROW_LEFT) prevFilm(event);
	if (event.code === KEY_CODE_ARROW_RIGHT) nextFilm(event);
	if (event.code === KEY_CODE_ESC) onCloseModal();
}

function prevFilm() {
	const indexOffset = -1;
	drawNextModal({ indexOffset });
}

function nextFilm() {
	const indexOffset = 1;
	drawNextModal({ indexOffset });
}

function drawNextModal({ indexOffset }) {
	const index = Number(modalWindowRef.firstElementChild.dataset.index);
	const base = modalWindowRef.firstElementChild.dataset.base;
	const newFilmId = fetchDataFromStorage(base)[index + indexOffset]?.id;

	onCloseModal();
	if (newFilmId) onOpenModal(newFilmId, modalWindowRef, [base]);
}

export { onOpenModal, onCloseModal, onBackdropClick };
