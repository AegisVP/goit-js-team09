import showLoader from './loader';
import { fetchDataFromStorage } from './dataStorage';
import renderGallery from './renderGallery';

function innerLibraryList(e = {}) {
  const section = e.target?.id === 'btn-queue' ? 'queue' : 'watched';

  selectButton(section);
  renderGallery({
    data: fetchDataFromStorage(`${section}Result`),
    elementRef: document.querySelector('.gallery'),
    isLibrary: true,
  });

  return section;
}

function selectButton(section) {
  const watchedButtonRef = document.getElementById('btn-watched');
  const queueButtonRef = document.getElementById('btn-queue');

  // console.log('section:', section);

  if (section === 'queue') {
    watchedButtonRef.classList.remove('button--accent');
    queueButtonRef.classList.add('button--accent');
  } else {
    watchedButtonRef.classList.add('button--accent');
    queueButtonRef.classList.remove('button--accent');
  }
}

export { innerLibraryList };
