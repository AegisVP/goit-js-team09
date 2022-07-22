import { saveDataToStorage, fetchDataFromStorage } from './dataStorage';

export default function removeWatched(e) {
   if (!e.target.classList.contains('js-watched')) {
     return;
   }
  if (localStorage.getItem('watchedResult') !== null) {
    let watchedResult = fetchDataFromStorage('watchedResult');
    const currentFilm = watchedResult
      .map(obj => {
        return obj.id;
      })
      .indexOf(Number(e.target.dataset.value));
    if (currentFilm !== -1) {
      watchedResult.splice(currentFilm, 1);
    }

    saveDataToStorage('watchedResult', watchedResult);
    console.log(watchedResult);
  }
}
