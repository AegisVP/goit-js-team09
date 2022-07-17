// import fetchFilmGenres from './js/fetchFilmGenres';
// import renderGallery from './js/renderGallery';
// import { saveDataToStorage } from './js/dataStorage';
// import fetchFilmData from './js/fetchFilmData';
import showLoader from './js/loader';
// import micromodal from 'micromodal';
// import { auth, signInWithEmailAndPassword, signOut } from './js/firebase__init';

// micromodal.init({
//   onShow: modal => {
//     if (modal.id !== 'modal-login') return;

//     const user = auth.currentUser;
//     // console.log('user', user);
//     const formEl = document.querySelector('form.modal-login-form');

//     if (user !== null) {
//       formEl.innerHTML = `
//           <p> You are already signed in as ${user.email}</p>
//           <button class="button button--accent" type="submit">Log-out</button>`;

//       formEl.addEventListener('submit', doLogout);
//     } else {
//       formEl.innerHTML = `
//           <label>Username: <input type="email" name="email" autocomplete="username" class="login-form__input"></label>
//           <label>Password: <input type="password" name="password" autocomplete="current-password" class="login-form__input"></label>
//           <button class="button button--accent" type="submit">Log-in</button>`;

//       formEl.addEventListener('submit', doLogin);
//     }
//   },
// });

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

// // Посилання на елементи сторінки
// const galleryEl = document.querySelector('.gallery');
// const searchForm = document.querySelector('.search-bar');

// Вішаєм слухача на searchForm
// searchForm.addEventListener('submit', onSearch);

// // Отримання переліку усіх жанрів фільмів та запис їх до локального сховища
// fetchFilmGenres({}).then(({ genres }) => {
//   saveDataToStorage('genres', genres);
// });

// // Отримання даних про популярні фільми (перша сторінка),
// // запис їх до локального сховища та розміщення на сторінці
// const currentPage = window.location;
// // console.log(currentPage);

// switch (currentPage.pathname) {
//   case '/library.html':
//     populateLibraryHtml();
//     break;
//   default:
//     populateIndexHtml();
//     break;
// }

// function populateIndexHtml() {
//   fetchFilmData({}).then(({ results }) => {
//     saveDataToStorage('requestResults', results);
//     renderGallery({
//       data: results,
//       elementRef: galleryEl,
//       onClick: event => {
//         // Дана функція задана для прикладу, потребує написання логіки відкривання модального вікна
//         //Перевірка, що клікнули саме на картинку
//         if (event.target.nodeName === 'IMG') {
//           //Виведення id картки, що відповідає id фільму на сервері
//           console.log(event.target.parentNode.dataset.id);
//           alert('Функцію не задано!');
//         }
//       },
//     });
//     showLoader(false);
//   });
// }

// function populateLibraryHtml() {
//   showLoader(false);
// }

// function onSearch(e) {
//   e.preventDefault();
//   const request = e.target.search.value.trim().toLowerCase();
//   saveDataToStorage('searchQuery', request);
//   fetchFilmData({ page: '1', query: `${request}`, isSearch: 'true' }).then(
//     ({ results }) => {
//       saveDataToStorage('requestResults', results);
//       renderGallery({
//         data: results,
//         elementRef: galleryEl,
//       });
//       showLoader(false);
//     }
//   );
// }

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
