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

function prevFilm(e) {
	const indexOffset = -1;
	drawNextModal({ e, indexOffset });
}

function nextFilm(e) {
	const indexOffset = 1;
	drawNextModal({ e, indexOffset });
}

function drawNextModal({ e, indexOffset }) {
	const { base, index } = findFilmBase(e);
	if (!base || !index) return;

	const newFilmData = fetchDataFromStorage(base)[index + indexOffset];
	onCloseModal();
	onOpenModal(newFilmData.id, modalWindowRef, [base]);
}

function findFilmBase(e) {
	const id = Number(document.querySelector('.modal-main')?.dataset.id);
	if (!id) return;
	const currentSection = findCurrentSection(e);
	const base = (currentSection === 'main') ? 'requestResults' : (currentSection === 'watched') ? 'watchedResult' : 'queueResult';

	const filmIndex = fetchDataFromStorage(base).map(film => film.id).indexOf(id);
	console.log('filmIndex:', filmIndex);
	if (filmIndex !== -1) return { index: filmIndex, base };

	return;
}

function findCurrentSection(e) {
	if (e.target.baseURI.slice(e.target.baseURI.lastIndexOf('/')).toLowerCase() !== '/library.html') return 'main';
	if (document.getElementById('btn-watched').classList.contains('button--accent')) return 'watched';
	return 'queue';
}

export { onOpenModal, onCloseModal, onBackdropClick };
