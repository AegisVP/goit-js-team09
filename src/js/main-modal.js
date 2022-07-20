import { fetchDataFromStorage } from './dataStorage';
import {createModal} from './createModal'
const Data = fetchDataFromStorage('requestResults');

// const filmData = Data.map(film=> {if (id === film.id) {return film}});



function onOpenModal(id, elementRef) {
  window.addEventListener('keydown', onEscKeyPress);
  document.body.classList.add('show-modal');
  const data = fetchDataFromStorage('requestResults');

  const ID = Number(id);

  const filmData = data.find(item => item.id === ID)
  elementRef.innerHTML = createModal(filmData);
  // let filmData;
  // for (let item of data) {
  //   const ID = Number(id);
  //   if(item.id === ID) {
  //     filmData = item;
  //     break;
  //   }
  // };
  // console.log(filmData);
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
