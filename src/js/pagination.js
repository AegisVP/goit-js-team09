import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';


let page = 1;


const container = document.getElementById('pagination');
const options = { 
    totalItems: 200,
     itemsPerPage: 20,
     visiblePages: 5,
     page,
     centerAlign: true,
     firstItemClassName: 'tui-first-child',
     lastItemClassName: 'tui-last-child',
};

const pagination = new Pagination(container, options);

export default pagination;