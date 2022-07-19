export default addQueued 
import { saveDataToStorage, fetchDataFromStorage } from './dataStorage';

function addQueued(e) {
   if (e.target.className != 'queue') {
      return
   }
   if (fetchDataFromStorage('queueResult') !== null) {
      let queueResult = fetchDataFromStorage('queueResult')
         if (queueResult.indexOf(e.target.dataset.value) > -1) {
            return
         } else {
            let allData = fetchDataFromStorage('requestResults')
            for (let i = 0; i < allData.length; i++) {
               if (allData[i].id == e.target.dataset.value) {
                  e.target.innerHTML = "QUEUED";
                  queueResult.push(allData[i])
                  saveDataToStorage('queueResult', queueResult)
               }
            }
         }
   } else {
      let allData = fetchDataFromStorage('requestResults')
               for (let i = 0; i < allData.length; i++) {
            if (allData[i].id == e.target.dataset.value) {
               e.target.innerHTML = "QUEUED";
               saveDataToStorage('queueResult', [allData[i]])
            }
         }
      }
}