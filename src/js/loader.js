const loader = status => {
  const loaderEl = document.querySelector('.loader__backdrop');
  if (status === 'on' && loaderEl.classList.contains('is-hidden')) {
      loaderEl.classList.remove('is-hidden');
  } else {
    loaderEl.classList.add('is-hidden');
  }
};

export default loader;
