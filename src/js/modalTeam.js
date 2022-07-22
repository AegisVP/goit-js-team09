import MyModal from './mymodal';

function openModalDev(e, modalDev) {
  modalDev.openModal.bind(modalDev)(e);

  const logoEl = document.querySelector('.description__wrap');
  const teamText = document.querySelector('.developer__text');

  document
    .querySelector('.developer__grid')
    .addEventListener('click', (event) => {
      console.log(event);
      switch (event.target.dataset.name) { 
        case ('Vitaliy'):
          logoEl.classList.add('visually-hidden');
          teamText.innerHTML = `<p>Привіт, я Віталік!</p>`;
          teamText.classList.remove('visually-hidden');
          break;
        case ('Rostyslav'):

         logoEl.classList.add('visually-hidden');
          teamText.innerHTML = `<p>Привіт, я Ростислав!</p>`;
          teamText.classList.remove('visually-hidden');
         break;
        default:
        
         logoEl.classList.remove('visually-hidden');
          teamText.classList.add('visually-hidden');
          break;
      }
       
     })


}


// const modalDevRef = document.getElementById('modal-dev');
// // console.log(modalDevRef);

// if (modalDevRef) {
//   const modalDev = new MyModal({
//     modalRef: modalDevRef,
//   });

//   document
//     .querySelector('[data-open-modal-dev]')
//       .addEventListener('click', () => {
//           debugger
//           modalDev.openModal.bind(modalDev);
//           modalDevRef.querySelector('[data-name]').addEventListener('click', (e) => { console.log(e) });
//       });
// }

export {openModalDev}