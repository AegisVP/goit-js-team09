const showLoader = status => {
	const loaderEl = document.querySelector('.loader__backdrop');

	if (status) loaderEl.classList.remove('is-hidden');
	else loaderEl.classList.add('is-hidden');
};

export default showLoader;
