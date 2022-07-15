//Збереження даних у сховище
function saveDataToStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function fetchDataFromStorage(key){
  return JSON.parse(localStorage.getItem(key));
}
 
export { saveDataToStorage, fetchDataFromStorage };