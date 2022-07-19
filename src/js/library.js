import showLoader from './loader';
import { saveDataToStorage, fetchDataFromStorage } from './dataStorage';
import renderGallery from './renderGallery';
showLoader(false)

const refs = {
   watchedButton: document.querySelector('.btn-lib[aria-label="Watched"]'),
   gallery: document.querySelector('.gallery'),
   queueButton: document.querySelector('.btn-lib[aria-label="Queue"]')
}

refs.watchedButton.addEventListener('click', innerWatchedList)
refs.queueButton.addEventListener('click', innerQueueList)

innerWatchedList()
function innerWatchedList() {
   refs.watchedButton.classList.add('button--accent')
   refs.queueButton.classList.remove('button--accent')

   refs.gallery.innerHTML = '';
   let dataWatchedFilm = fetchDataFromStorage('watchedResult')
   if (dataWatchedFilm == null) {
      showLoader(false)
      refs.gallery.innerHTML = `<img src="https://cases.media/image/wide/54ce0f4a-2dbd-4745-acf9-cc9a8c349cfd.jpg" max-width = "1000px" max-height = '700px'>`
      return
   } else {
         showLoader(false);
         renderGallery({data: dataWatchedFilm, elementRef: refs.gallery})
   }
}

function innerQueueList() {
   refs.queueButton.classList.add('button--accent')
   refs.watchedButton.classList.remove('button--accent')
   refs.gallery.innerHTML = '';
   let dataWatchedFilm = fetchDataFromStorage('queueResult')
   if (dataWatchedFilm == null) {
      showLoader(false)
      refs.gallery.innerHTML = `<img src="https://cases.media/image/wide/54ce0f4a-2dbd-4745-acf9-cc9a8c349cfd.jpg" max-width = "1000px" max-height = '700px'>`
      return
   } else {
         showLoader(false);
         renderGallery({data: dataWatchedFilm, elementRef: refs.gallery})
   }
}