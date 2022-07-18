import fetchFilmGenres from './js/fetchFilmGenres';
import renderGallery from './js/renderGallery';
import { saveDataToStorage } from './js/dataStorage';
import fetchFilmData from './js/fetchFilmData';
import showLoader from './js/loader';
import { auth, signInWithEmailAndPassword, signOut } from './js/firebase__init';
import {onOpenModal, onCloseModal, onBackdropClick, onEscKeyPress} from './js/main-modal';
import pagination from './js/pagination';
import watchedFilm from './js/addWatched'
import queueFilm from "./js/addqueueFilm";

function doLogout(e) {
  e.preventDefault();

  signOut(auth)
    .then(() => {
      e.preventDefault();

      document
        .querySelector('form.modal-login-form')
        .removeEventListener('submit', doLogin);

      localStorage.removeItem('useruid');

      micromodal.close('modal-login');
    })
    .catch(error => {
      const errorCode = error.code;
      // const errorMessage = error.message;
      window.alert(`errorCode: ${errorCode}`);
      document
        .querySelector('form.modal-login-form')
        .addEventListener('submit', doLogin);
    });
}

function doLogin(e) {
  e.preventDefault();

  // console.log('doLogin started');
  // console.dir(e.currentTarget.elements.email.value);
  const email = e.currentTarget.elements.email.value;
  const password = e.currentTarget.elements.password.value;

  signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      // Signed in
      const user = userCredential.user;

      // console.log(user.uid);
      saveDataToStorage('useruid', user.uid);

      micromodal.close('modal-login');
      window.alert(`Loged in as ${user.email}`);
      document
        .querySelector('form.modal-login-form')
        .removeEventListener('submit', doLogin);
    })
    .catch(error => {
      const errorCode = error.code;
      // const errorMessage = error.message;
      window.alert(`errorCode: ${errorCode}`);
    });
}

// Посилання на елементи сторінки
const galleryEl = document.querySelector('.gallery');
const searchForm = document.querySelector('.search-bar');

// Вішаєм слухача на searchForm
searchForm?.addEventListener('submit', onSearch);

// Отримання переліку усіх жанрів фільмів та запис їх до локального сховища
fetchFilmGenres({}).then(({ genres }) => {
  saveDataToStorage('genres', genres);
});

switch (window.location.pathname) {
  case '/library.html':
    populateLibraryHtml();
    break;
  default:
    populateIndexHtml();
    pagination.on('beforeMove', function(eventData) {
        showLoader(true);
    });
    pagination.on('afterMove', function(eventData) {
      populateIndexHtml(eventData.page);
    });
    
    break;
}

function populateIndexHtml(page = 1) {
  fetchFilmData({page}).then(({ results, total_results }) => {
    saveDataToStorage('requestResults', results);
    // console.log(total_results);
    pagination.setTotalItems(total_results);

    renderGallery({
      data: results,
      elementRef: galleryEl,
      onClick: event => {
        // Дана функція задана для прикладу, потребує написання логіки відкривання модального вікна
        //Перевірка, що клікнули саме на картинку
        if (event.target.nodeName === 'IMG') {

          // console.log(event.target.parentNode.dataset.id);
          
          //Виведення id картки, що відповідає id фільму на сервері
          onOpenModal(event.target.parentNode.dataset.id);
          // alert('Функцію не задано!');
        }
      },
    });

 const Modalrefs = {
 openModal: document.querySelector('[data-action="open-modal"]'),
 closeModalBtn: document.querySelector('[data-action="close-modal"]'),
 backdropModal: document.querySelector ('.js-backdrop'),
}

Modalrefs.openModal.addEventListener('click', onOpenModal);
Modalrefs.closeModalBtn.addEventListener('click', onCloseModal);
Modalrefs.backdropModal.addEventListener('click', onBackdropClick);
    showLoader(false);
  });
}
populateLibraryHtml()
function populateLibraryHtml() {
  showLoader(false);
  galleryEl.addEventListener('click', watchedFilm)
  galleryEl.addEventListener('click', queueFilm)
}

function onSearch(e) {
  e.preventDefault();
  pagination.reset();
  const request = e.target.search.value.trim().toLowerCase();
  saveDataToStorage('searchQuery', request);
  fetchFilmData({ page: '1', query: `${request}`, isSearch: 'true' }).then(
    ({ results }) => {
      saveDataToStorage('requestResults', results);
      renderGallery({
        data: results,
        elementRef: galleryEl,
      });
      showLoader(false);
    }
  );
}

showLoader(false);

import MyModal from './js/mymodal';

const modalDevRef = document.getElementById('modal-dev');
const modalAuthRef = document.getElementById('modal-login');
// console.log(modalAuthRef);

if (modalDevRef) {
  const modalDev = new MyModal({
    modalRef: modalDevRef,
  });

  document
    .querySelector('[data-open-modal-dev]')
    .addEventListener('click', modalDev.openModal.bind(modalDev));
}
if (modalAuthRef) {
  const modalAuth = new MyModal({
    modalRef: modalAuthRef,
  });

  document
    .querySelector('[data-open-modal-login]')
    .addEventListener('click', modalAuth.openModal.bind(modalAuth));
}
// devModal.openModal();
