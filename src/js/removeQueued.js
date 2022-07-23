import { saveDataToStorage, fetchDataFromStorage } from './dataStorage';

export default function removeQueued(e) {
   if (!e.target.classList.contains('js-queue')) {
     return;
   }
  if (localStorage.getItem('queueResult') !== null) {
    let queueResult = fetchDataFromStorage('queueResult');
    const currentFilm = queueResult
      .map(obj => {
        return obj.id;
      })
      .indexOf(Number(e.target.dataset.value));
    if (currentFilm !== -1) {
      queueResult.splice(currentFilm, 1);
    }

    saveDataToStorage('queueResult', queueResult);
  }
}
