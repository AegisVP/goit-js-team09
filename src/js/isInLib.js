import { fetchDataFromStorage } from './dataStorage';

function libCategory(id) {
  const inWatched = fetchDataFromStorage('watchedResult');
  const inQueue = fetchDataFromStorage('queueResult');
  const libCategory = [];
  const ID = Number(id);
  for (let i = 0; i < inWatched?.length; i++) {
    if (inWatched[i].id === ID) {
      libCategory.push('In watched');
      break;
    }
  }

  for (let i = 0; i < inQueue?.length; i++) {
    if (inQueue[i].id === ID) {
      libCategory.push('In queue');
      break;
    }
  }

  console.log(id, ': ', libCategory);
  return libCategory;
}

export { libCategory };
