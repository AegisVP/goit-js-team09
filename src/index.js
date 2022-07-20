import fetchFilmGenres from './js/fetchFilmGenres';
import renderGallery from './js/renderGallery';
import { saveDataToStorage, fetchDataFromStorage } from './js/dataStorage';
import fetchFilmData from './js/fetchFilmData';
import showLoader from './js/loader';
// import { auth, signInWithEmailAndPassword, signOut } from './js/firebase__init';
import {
  onOpenModal,
  onCloseModal,
  onBackdropClick,
  onEscKeyPress,
} from './js/main-modal';
import pagination from './js/pagination';
import watchedFilm from './js/addWatched';
import queueFilm from './js/addqueueFilm';

// function doLogout(e) {
//   e.preventDefault();

//   signOut(auth)
//     .then(() => {
//       e.preventDefault();

//       document
//         .querySelector('form.modal-login-form')
//         .removeEventListener('submit', doLogin);

//       localStorage.removeItem('useruid');

//       micromodal.close('modal-login');
//     })
//     .catch(error => {
//       const errorCode = error.code;
//       // const errorMessage = error.message;
//       window.alert(`errorCode: ${errorCode}`);
//       document
//         .querySelector('form.modal-login-form')
//         .addEventListener('submit', doLogin);
//     });
// }

// function doLogin(e) {
//   e.preventDefault();

//   // console.log('doLogin started');
//   // console.dir(e.currentTarget.elements.email.value);
//   const email = e.currentTarget.elements.email.value;
//   const password = e.currentTarget.elements.password.value;

//   signInWithEmailAndPassword(auth, email, password)
//     .then(userCredential => {
//       // Signed in
//       const user = userCredential.user;

//       // console.log(user.uid);
//       saveDataToStorage('useruid', user.uid);

//       micromodal.close('modal-login');
//       window.alert(`Loged in as ${user.email}`);
//       document
//         .querySelector('form.modal-login-form')
//         .removeEventListener('submit', doLogin);
//     })
//     .catch(error => {
//       const errorCode = error.code;
//       // const errorMessage = error.message;
//       window.alert(`errorCode: ${errorCode}`);
//     });
// }

// Посилання на елементи сторінки
const galleryEl = document.querySelector('.gallery');
const searchForm = document.querySelector('.search-bar');
const modalElement = document.querySelector('.modal-main__film-wrap');
// Додавання слухача на галерею
galleryEl.addEventListener('click', onCardClick);
function onCardClick(event) {
  if (event.target.nodeName === 'IMG') {
    onOpenModal(event.target.parentNode.dataset.id, modalElement);
  }
}

// Вішаєм слухача на searchForm
searchForm?.addEventListener('submit', onSearch);

// Отримання переліку усіх жанрів фільмів та запис їх до локального сховища

switch (window.location.pathname) {
  case '/library.html':
    populateLibraryHtml();
    break;
  default:
    populateIndexHtml();
    pagination.on('afterMove', function (eventData) {
      const searchQuery = fetchDataFromStorage('searchQuery')?.query || '';
      if (searchQuery) {
        searchIndexHTML({ page: eventData.page, query: searchQuery });
      } else {
        populateIndexHtml(eventData.page);
      }
    });

    break;
}

function populateIndexHtml(page = 1) {
  // console.log('showing loader first');
  showLoader(true);
  localStorage.removeItem('searchQuery');
  Promise.all([fetchFilmGenres(), fetchFilmData({ page })])
    .then(([{genres}, {results, total_results}]) => {

      saveDataToStorage('genres', genres);
      saveDataToStorage('requestResults', results);

      pagination.setTotalItems(total_results);
      
      renderGallery({
        data: results,
        elementRef: galleryEl,
      });

      const Modalrefs = {
        openModal: document.querySelector('[data-action="open-modal"]'),
        closeModalBtn: document.querySelector(
          '[data-action="close-modal"]'
        ),
        backdropModal: document.querySelector('.js-backdrop'),
      };

      Modalrefs.openModal.addEventListener('click', onOpenModal);
      Modalrefs.closeModalBtn.addEventListener('click', onCloseModal);
      Modalrefs.backdropModal.addEventListener('click', onBackdropClick);

      // console.log('hiding loader finally');
      showLoader(false);
    })
    .catch(() => {
      alert('There was an error during server request');
      // console.log('hiding loader finally');
      showLoader(false);
    });
}

// populateLibraryHtml();

function populateLibraryHtml() {
  // console.log('hiding loader on library');
  showLoader(false);
  galleryEl.addEventListener('click', watchedFilm);
  galleryEl.addEventListener('click', queueFilm);
}

function onSearch(e) {
  e.preventDefault();
  pagination.reset();
  btnPopulateFilm.classList.remove('is-hidden');
  const request = e.target.search.value.trim().toLowerCase();
  searchIndexHTML({ page: 1, query: `${request}` });
}

function searchIndexHTML({ page, query }) {
  showLoader(true);
  fetchFilmData({ page, query, isSearch: 'true' }).then(
    ({ results, total_results }) => {
      if (!results.length) {
        showFailedNotification();
        showLoader(false);
        return;
      } else {
        saveDataToStorage('searchQuery', {query});
        saveDataToStorage('requestResults', results);
        pagination.setTotalItems(total_results);
        renderGallery({
          data: results,
          elementRef: galleryEl,
        });
        galleryEl.insertAdjacentHTML(
          'afterbegin',
          `<div class="search-query"> Search results for the query: '${query}'<div>`
        );
        showLoader(false);
      }
    }
  );
}

function showFailedNotification() {
  const message = document.querySelector('.input-error');
  message.classList.remove('hide');
  setTimeout(() => message.classList.add('hide'), 4000);
}

import MyModal from './js/mymodal';

const modalDevRef = document.getElementById('modal-dev');
// console.log(modalDevRef);

if (modalDevRef) {
  const modalDev = new MyModal({
    modalRef: modalDevRef,
  });

  document
    .querySelector('[data-open-modal-dev]')
    .addEventListener('click', modalDev.openModal.bind(modalDev));
}

const modalAuthRef = document.getElementById('modal-login');
console.log(modalAuthRef);

if (modalAuthRef) {
  const modalAuth = new MyModal({
    modalRef: modalAuthRef,
  });

  document
    .querySelector('[data-open-modal-login]')
    .addEventListener('click', modalAuth.openModal.bind(modalAuth));
}


const btnPopulateFilm = document.querySelector('.btn-populateFilm');
btnPopulateFilm.addEventListener('click', popularFilms);
function popularFilms() {
  btnPopulateFilm.classList.add('is-hidden');
  populateIndexHtml(page = 1);
  document.getElementById("textInput").value = "";
}
