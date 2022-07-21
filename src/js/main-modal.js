import { fetchDataFromStorage } from './dataStorage';
import {createModal} from './createModal'
const Data = fetchDataFromStorage('requestResults');


function onOpenModal(id, elementRef) {
  window.addEventListener('keydown', onEscKeyPress);
  document.body.classList.add('show-modal');
  const data = fetchDataFromStorage('requestResults');

  const ID = Number(id);

  const filmData = data.find(item => item.id === ID)
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

export {onOpenModal, onCloseModal, onBackdropClick, onEscKeyPress};
