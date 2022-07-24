import debounce from './lodash-debounce';
const topBtn = document.querySelector('[data-scroll-top]');

window.addEventListener('scroll', debounce(scrollFunction, 100, { leading: true, trailing: true }));

function scrollFunction() {
	console.log(document.documentElement.scrollTop);
	if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) topBtn.classList.add('visible');
	else topBtn.classList.remove('visible');
}
