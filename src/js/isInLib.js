import { fetchDataFromStorage } from './dataStorage';

function libCategory(id) {
    const inWatched = fetchDataFromStorage('watchedResult');
    const inQueue = fetchDataFromStorage('queueResult');
    const libCategory = [];
    const ID = Number(id);
    if (inWatched?.find(item => { item.id === ID })) { libCategory.push('In watched') };
    if (inQueue?.find(item => { item.id === ID })) { libCategory.push('In queue') };
    return libCategory;
 };

export { libCategory };