//Збереження даних у сховище
function saveDataToStorage(key, data) {
	localStorage.setItem(key, JSON.stringify(data));
}

function fetchDataFromStorage(key) {
	const results = localStorage.getItem(key);

	if (results) return JSON.parse(results);

	return;
}

export { saveDataToStorage, fetchDataFromStorage };
