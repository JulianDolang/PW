document.querySelector('#search-icon').onclick = () => {
  document.querySelector('#search-form').classList.add('active');
};

document.querySelector('#close').onclick = () => {
  document.querySelector('#search-form').classList.remove('active');
};

// Toggle class active untuk shopping cart
const shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#shopping-cart-button').onclick = (e) => {
  shoppingCart.classList.toggle('active');
  e.preventDefault();
};
