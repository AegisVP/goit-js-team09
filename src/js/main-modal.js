import { fetchDataFromStorage } from './dataStorage';
import { createModal, selectAddDelete } from './createModal';
// const Data = fetchDataFromStorage('requestResults');
const ESC_KEY_CODE = 'Escape';

function onOpenModal(id, elementRef) {
	const storageBases = ['requestResults', 'watchedResult', 'queueResult'];
	const ID = Number(id);
	let filmData = null;

	for (const storageBase of storageBases) {
		filmData = fetchDataFromStorage(storageBase)?.find(({ id }) => id === ID);
		
		if (filmData) break;
	}

	elementRef.innerHTML = createModal(filmData);
	document.body.classList.add('show-modal');

	// add listeners
	window.addEventListener('keydown', onEscKeyPress);
	document.querySelector('[data-action="close-modal"]').addEventListener('click', onCloseModal);
	document.querySelector('.js-backdrop').addEventListener('click', onBackdropClick);
	document.querySelector('.rotating-button__wrapper input[name="queue"]').addEventListener('change', e => selectAddDelete(e, filmData));
	document.querySelector('.rotating-button__wrapper input[name="watched"]').addEventListener('change', e => selectAddDelete(e, filmData));
}

function onCloseModal() {
	window.removeEventListener('keydown', onEscKeyPress);
	document.body.classList.remove('show-modal');
}

function onBackdropClick(event) {
	if (event.currentTarget === event.target) onCloseModal();
}

function onEscKeyPress(event) {
	if (event.code === ESC_KEY_CODE) onCloseModal();
}

export { onOpenModal, onCloseModal, onBackdropClick, onEscKeyPress };
