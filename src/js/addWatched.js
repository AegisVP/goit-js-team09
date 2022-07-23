export default addWatched 
import { saveDataToStorage, fetchDataFromStorage } from './dataStorage';


function addWatched(e) {
   if (!e.target.classList.contains('js-watched')) {
     return;
   }
   if (fetchDataFromStorage('watchedResult') !== null) {
      let watchedResult = fetchDataFromStorage('watchedResult')
      if (watchedResult.map(obj => {return obj.id}).indexOf(Number(e.target.dataset.value)) > -1 ){
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