export default addWatched;
import { saveDataToStorage, fetchDataFromStorage } from './dataStorage';

function addWatched(e, filmData) {
	if (!e.target.classList.contains('js-watched')) return;

  let watchedResult = fetchDataFromStorage('watchedResult');
  
	if (watchedResult) {
		if (watchedResult.length >= 1 && watchedResult.find(obj => obj.id == e.target.dataset.value)) {
			return;
		} else if (watchedResult.length === 1 && watchedResult.id != e.target.dataset.value) {
			watchedResult.push(filmData);
			saveDataToStorage('watchedResult', watchedResult);
		} else {
			watchedResult.push(filmData);
			saveDataToStorage('watchedResult', watchedResult);
		}
	} else {
		saveDataToStorage('watchedResult', [filmData]);
	}
}
