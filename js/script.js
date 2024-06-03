document.querySelector('#search-icon').onclick = () => {
  document.querySelector('#search-form').classList.add('active');
};

document.querySelector('#close').onclick = () => {
  document.querySelector('#search-form').classList.remove('active');
};