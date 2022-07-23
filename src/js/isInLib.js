import { fetchDataFromStorage } from './dataStorage';

function isInLib({id, storageKey}) {
  const data = fetchDataFromStorage(storageKey);
  const ID = Number(id);
  for (let i = 0; i < data?.length; i++) {
    if (data[i].id === ID) {
      return data[i];
    }
  }
  return;
};

export { isInLib };
