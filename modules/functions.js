export function addToCart() {
  const thisCard = this.closest('.shop-card');
  const thisBtn = this;
  const itemId = thisCard.dataset.itemId;
  const cart = document.querySelector('.nav-cart');
  const cartCount = document.querySelector('.nav-cart-count');
  
  const amount = parseInt(thisCard.dataset.amount);
  const addSubstract = parseInt(this.dataset.quantity);
  const newAmount = amount + addSubstract;

  thisCard.dataset.amount = newAmount;
  cartCount.textContent = parseInt(cartCount.textContent) + addSubstract;

  if (cartCount.textContent === '0') {
    cart.style.backgroundImage = 'url(../media/images/icons/cart.png)';
    cartCount.style.backgroundColor = '#201E1F';
  } else {
    cart.style.backgroundImage = 'url(../media/images/icons/cart-active.png)';
    cartCount.style.backgroundColor = '#1F604A';
  };
}
