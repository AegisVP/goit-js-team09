import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

let page = 1;

const container = document.getElementById('pagination');
const options = {
	totalItems: 200,
	itemsPerPage: 20,
	visiblePages: 5,
	usageStatistics: false,
	page,
	centerAlign: true,
	firstItemClassName: 'tui-first-child',
	lastItemClassName: 'tui-last-child',
	template: {
		page: '<a href="#" class="tui-page-btn">{{page}}</a>',
		currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
		moveButton: '<a href="#" class="tui-page-btn tui-{{type}}">' + '<span class="tui-ico-{{type}}">{{type}}</span>' + '</a>',
		disabledMoveButton: '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' + '<span class="tui-ico-{{type}}">{{type}}</span>' + '</span>',
		moreButton: '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' + '<span class="tui-ico-ellip">...</span>' + '</a>',
	},
};

const pagination = new Pagination(container, options);

export default pagination;
