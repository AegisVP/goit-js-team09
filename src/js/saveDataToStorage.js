//Збереження даних у сховище
function saveDataToStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
 
export default saveDataToStorage;