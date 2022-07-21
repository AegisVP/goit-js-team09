import { saveDataToStorage, fetchDataFromStorage } from './dataStorage';

export default function removeWatched(e) {
  if (e.target.className != 'rotating-button__checkbox') {
    return;
  }
  if (localStorage.getItem('watchedResult') !== null) {
    let watchedResult = fetchDataFromStorage('watchedResult');
    const currentFilm = watchedResult
      .map(obj => {
        return obj.id;
      })
      .indexOf(Number(e.target.dataset.value));

    watchedResult.splice(currentFilm, 1);
    saveDataToStorage('watchedResult', watchedResult);
  }
}
