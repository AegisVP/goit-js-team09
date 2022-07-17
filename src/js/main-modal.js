import { fetchDataFromStorage } from './dataStorage';

const Data = fetchDataFromStorage('requestResults');

// const filmData = Data.map(film=> {if (id === film.id) {return film}});



function onOpenModal(id) {
  window.addEventListener('keydown', onEscKeyPress);
  document.body.classList.add('show-modal');
  const data = fetchDataFromStorage('requestResults');

  let filmData;
  for (let item of data) {
    const ID = Number(id);
    if(item.id === ID) {
      filmData = item;
      break;
    }
  };
  console.log(filmData);
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
