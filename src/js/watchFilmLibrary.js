export default addWatched 


function addWatched(e) {
   if (e.target.className != 'watched') {
      return
   }
   if (localStorage.getItem('watchedResult') !== null) {
      let watchedResult = JSON.parse(localStorage.getItem('watchedResult'))
      if (watchedResult.indexOf(e.target.dataset.value) > -1) {
            return
         } else {
            watchedResult.push(e.target.dataset.value)
            localStorage.setItem('watchedResult', JSON.stringify(watchedResult))
            e.target.innerHTML = "WATCHED";
         }
   }else {
      localStorage.setItem('watchedResult', JSON.stringify([e.target.dataset.value]));
      }
}