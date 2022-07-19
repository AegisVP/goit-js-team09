export default addWatched 
import { saveDataToStorage, fetchDataFromStorage } from './dataStorage';


function addWatched(e) {
   if (e.target.className != 'watched') {
      return
   }
   if (fetchDataFromStorage('watchedResult') !== null) {
      let watchedResult = fetchDataFromStorage('watchedResult')
      if (watchedResult.indexOf(e.target.dataset.value) > -1) {
            return
      } else {
                     let allData = fetchDataFromStorage('requestResults')
            for (let i = 0; i < allData.length; i++) {
               if (allData[i].id == e.target.dataset.value) {
                  e.target.innerHTML = "WATCHED";
                  watchedResult.push(allData[i])
                  saveDataToStorage('watchedResult', watchedResult)
               }
            }
         }
   } else {
                  let allData = fetchDataFromStorage('requestResults')
               for (let i = 0; i < allData.length; i++) {
            if (allData[i].id == e.target.dataset.value) {
               e.target.innerHTML = "WATCHED";
               saveDataToStorage('watchedResult', [allData[i]]);
            }
         }
      }
}