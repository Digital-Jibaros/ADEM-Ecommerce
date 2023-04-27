export function addToCart() {
  const thisCard = this.closest('.shop-card');
  const thisCardMainBtn = thisCard.querySelector('.shop-card-buy');
  const itemId = thisCard.dataset.itemId;
  const cart = document.querySelector('.nav-cart');
  const cartCount = document.querySelector('.nav-cart-count');
  
  const amount = parseInt(thisCard.dataset.amount);
  const addSubstract = parseInt(this.dataset.quantity);
  const newAmount = amount + addSubstract;

  thisCard.dataset.amount = newAmount;
  cartCount.textContent = parseInt(cartCount.textContent) + addSubstract;

  if (cartCount.textContent === '0') {
    cart.classList.remove('has-content');
  } else {
    cart.classList.add('has-content');
  };
  if (newAmount === 0) {
    thisCardMainBtn.textContent = 'Add to Cart';
    thisCardMainBtn.removeAttribute('disabled', true);
  } else {
    thisCardMainBtn.textContent = `${newAmount} Item${newAmount > 1 ? 's' : ''} added`;
    thisCardMainBtn.setAttribute('disabled', true);
  }
}

export function toggleFavorite() {
  const favIcon = document.querySelector('.nav-favorites');
  const favCount = document.querySelector('.nav-favorites-count');
  const addSubstract = this.checked ? 1 : -1;
  
  favCount.textContent = parseInt(favCount.textContent) + addSubstract;

  if (parseInt(favCount.textContent) === 0) {
    favIcon.classList.remove('has-content');
  } else {
    favIcon.classList.add('has-content');
  };
}
