import { fetchDataFromStorage } from './dataStorage';
import { createModal } from './createModal';
const Data = fetchDataFromStorage('requestResults');

function onOpenModal(id, elementRef) {
  const storageBases = ['requestResults', 'watchedResult', 'queueResult'];
  const ID = Number(id);
  let filmData = null;
  
  window.addEventListener('keydown', onEscKeyPress);
  document
    .querySelector('[data-action="close-modal"]')
    .addEventListener('click', onCloseModal);
  document
    .querySelector('.js-backdrop')
    .addEventListener('click', onBackdropClick);

  document.body.classList.add('show-modal');

  for (storageBase of storageBases) {
    filmData = fetchDataFromStorage(storageBase)?.find(({ id }) => id === ID);
    // console.log('base:' + storageBase + ', filmData:' + filmData);
    // console.dir(filmData);
    if (filmData) break;
  }

  elementRef.innerHTML = createModal(filmData);
}

function onCloseModal() {
  window.removeEventListener('keydown', onEscKeyPress);
  document.body.classList.remove('show-modal');
}

function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
    onCloseModal();
  }
}

function onEscKeyPress(event) {
  const ESC_KEY_CODE = 'Escape';
  if (event.code === ESC_KEY_CODE) {
    onCloseModal();
  }
}

export { onOpenModal, onCloseModal, onBackdropClick, onEscKeyPress };
