// import { fetchDataFromStorage } from './dataStorage';

// const Data = fetchDataFromStorage('requestResults');

// const filmData = Data.map(film=> {if (id === film.id) {return film}});

// Посилання на елементи для відкриття/закриття модалки

// const Modalrefs = {
//  openModal: document.querySelector('[data-action="open-modal"]'),
//  closeModalBtn: document.querySelector('[data-action="close-modal"]'),
//  backdropModal: document.querySelector ('.js-backdrop'),
// }

// Modalrefs.openModal.addEventListener('click', onOpenModal);
// Modalrefs.closeModalBtn.addEventListener('click', onCloseModal);
// Modalrefs.backdrop.addEventListener('click', onBackdropClick);
function onOpenModal() {
  document.body.classList.add('show-modal');
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

export {onOpenModal, onCloseModal, onBackdropClick, onEscKeyPress};
