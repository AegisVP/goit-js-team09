import { fetchDataFromStorage } from './dataStorage';
import { createModal, selectAddDelete } from './createModal';

const KEY_CODE_ESC = 'Escape';
const KEY_CODE_ARROW_LEFT = 'ArrowLeft';
const KEY_CODE_ARROW_RIGHT = 'ArrowRight';
let modalWindowRef = null;

function onOpenModal(id, elementRef, storageBases = ['requestResults', 'watchedResult', 'queueResult']) {
	const ID = Number(id);
	let filmData = null;
	modalWindowRef = elementRef;

	for (const storageBase of storageBases) {
		filmData = fetchDataFromStorage(storageBase)?.find(({ id }) => id === ID);

		if (filmData) break;
	}

	modalWindowRef.innerHTML = createModal(filmData);
	document.body.classList.add('show-modal');

	// add listeners
	window.addEventListener('keydown', onKeyPress);
	document.querySelector('[data-action="close-modal"]').addEventListener('click', onCloseModal);
	document.querySelector('.js-backdrop').addEventListener('click', onBackdropClick);
	document.querySelector('.rotating-button__wrapper input[name="queue"]').addEventListener('change', e => selectAddDelete(e, filmData));
	document.querySelector('.rotating-button__wrapper input[name="watched"]').addEventListener('change', e => selectAddDelete(e, filmData));
}

function onCloseModal() {
	window.removeEventListener('keydown', onKeyPress);
	document.body.classList.remove('show-modal');
}

function onBackdropClick(event) {
	if (event.currentTarget === event.target) onCloseModal();
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
