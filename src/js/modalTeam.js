import MyModal from './mymodal';

function openModalDev(e, modalDev) {
  modalDev.openModal.bind(modalDev)(e);

  const logoEl = document.querySelector('.description__wrap');
  const teamText = document.querySelector('.developer__text');

  document
    .querySelector('.developer__grid')
    .addEventListener('click', event => {
      // console.log(event);

      if (event.target.dataset.name && event.target.dataset.name !== 'run') {
        logoEl.classList.add('visually-hidden');
        teamText.innerHTML = `<p class="dev-name">Hi, I am ${event.target.dataset.name}!</p><p>Nice to meet you!</>`;
        teamText.classList.remove('visually-hidden');
      } else if (!event.target.dataset.name) {
        logoEl.classList.remove('visually-hidden');
        teamText.classList.add('visually-hidden');
      }

      if (event.target.dataset.name === 'run') { runAnimation(logoEl, teamText); }

      // switch (event.target.dataset.name) {

      //   case ('Vitaliy'):
      //     logoEl.classList.add('visually-hidden');
      //     teamText.innerHTML = `<p>Привіт, я Віталік!</p>`;
      //     teamText.classList.remove('visually-hidden');
      //     break;

      //   case ('Rostyslav'):
      //    logoEl.classList.add('visually-hidden');
      //     teamText.innerHTML = `<p>Привіт, я Ростислав!</p>`;
      //     teamText.classList.remove('visually-hidden');
      //     break;

      //   case ('Vladislav'):
      //    logoEl.classList.add('visually-hidden');
      //     teamText.innerHTML = `<p>Привіт, я Владислав!</p>`;
      //     teamText.classList.remove('visually-hidden');
      //     break;

      //   case ('Marina'):
      //    logoEl.classList.add('visually-hidden');
      //     teamText.innerHTML = `<p>Привіт, я Марька!</p>`;
      //     teamText.classList.remove('visually-hidden');
      //     break;

      //   case ('Sergei'):
      //    logoEl.classList.add('visually-hidden');
      //     teamText.innerHTML = `<p>Привіт, я Сергій!</p>`;
      //     teamText.classList.remove('visually-hidden');
      //     break;

      //   case ('Roman'):
      //    logoEl.classList.add('visually-hidden');
      //     teamText.innerHTML = `<p>Привіт, я Роман!</p>`;
      //     teamText.classList.remove('visually-hidden');
      //     break;

      //   case ('Stefan'):
      //    logoEl.classList.add('visually-hidden');
      //     teamText.innerHTML = `<p>Привіт, я Стефан!</p>`;
      //     teamText.classList.remove('visually-hidden');
      //     break;

      //   case ('Dariya'):
      //    logoEl.classList.add('visually-hidden');
      //     teamText.innerHTML = `<p>Привіт, я Дар'я!</p>`;
      //     teamText.classList.remove('visually-hidden');
      //     break;
      //   case ('run'):
      //     runAnimation(logoEl, teamText);
      //     break;
      //   default:

      //    logoEl.classList.remove('visually-hidden');
      //     teamText.classList.add('visually-hidden');
      //     break;
      // }
    });
}

function runAnimation(logoEl, teamText) {
  const gridRef = document.querySelector('.grid');
  const refs = gridRef.querySelectorAll('[data-play]');

  const playRefs = [];
  for (let i = 0; i < refs.length; i++) {
    if (refs[i].dataset.play === i);
    playRefs.push(refs[i]);
  }

  playRefs.sort(
    (fistEl, secondEl) => fistEl.dataset.play - secondEl.dataset.play
  );

  for (let i = 0; i <= playRefs.length; i++) {
    const delay = i * 1000;
    if (i < playRefs.length) {
      setTimeout(() => {
        playRefs[i].classList.add('animation');
        logoEl.classList.add('visually-hidden');
        teamText.innerHTML = `<p>Hi, I am ${playRefs[i].dataset.devname}!</p>`;
        teamText.classList.remove('visually-hidden');
      }, delay);
      setTimeout(() => playRefs[i].classList.remove('animation'), delay + 1000);
    } else {
      {
        setTimeout(() => {
          logoEl.classList.remove('visually-hidden');
          teamText.classList.add('visually-hidden');
        }, delay);
      }
    }
  }
}

export { openModalDev };
