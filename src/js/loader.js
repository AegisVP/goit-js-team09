const showLoader = status => {
  const loaderEl = document.querySelector('.loader__backdrop');
  // console.log(status);
  if (status) {
    // console.log('should show loader');
    if (loaderEl.classList.contains('is-hidden')) {
      // console.log('showing loader');
      loaderEl.classList.remove('is-hidden');
    }
  } else {
    // console.log('hiding loader');
    loaderEl.classList.add('is-hidden');
  }
};

export default showLoader;
