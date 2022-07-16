export default addQueued 


function addQueued(e) {
   if (e.target.className != 'queue') {
      return
   }
   if (localStorage.getItem('queueResult') !== null) {
      let queueResult = JSON.parse(localStorage.getItem('queueResult'))
         if (queueResult.indexOf(e.target.dataset.value) > -1) {
            return
         } else {
            queueResult.push(e.target.dataset.value)
            localStorage.setItem('queueResult', JSON.stringify(queueResult))
            e.target.innerHTML = "QUEUED";
         }
   }else {
      localStorage.setItem('queueResult', JSON.stringify([e.target.dataset.value]));
      }
}