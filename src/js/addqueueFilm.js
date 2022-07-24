export default addQueued;
import { saveDataToStorage, fetchDataFromStorage } from './dataStorage';

function addQueued(e, filmData) {
	if (!e.target.classList.contains('js-queue')) return;

	let queueResult = fetchDataFromStorage('queueResult');

	if (queueResult) {
		if (queueResult.length >= 1 && queueResult.find(obj => obj.id == e.target.dataset.value)) {
			return;
		} else if (queueResult.length === 1 && queueResult.id != e.target.dataset.value) {
			queueResult.push(filmData);
			saveDataToStorage('queueResult', queueResult);
		} else {
			queueResult.push(filmData);
			saveDataToStorage('queueResult', queueResult);
		}
	} else {
		saveDataToStorage('queueResult', [filmData]);
	}
}
