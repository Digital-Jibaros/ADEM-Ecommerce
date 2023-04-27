import { addToCart } from "./functions.js";

export default function shopCard(id, imgUrl, category, name, price, amount = 0){
  const card = document.createElement('div');
  const img = document.createElement('div');
  const imgHover = document.createElement('div');
  const categoryPara = document.createElement('p');
  const namePara = document.createElement('p');
  const pricePara = document.createElement('p');
  const favCheckbox = document.createElement('input');
  const btnDiv = document.createElement('div');
  const btn = document.createElement('button');
  const btnRemove = document.createElement('button');
  const btnAdd = document.createElement('button');
  
  img.style.backgroundImage = `url(${imgUrl})`;
  imgHover.style.backgroundImage = `url(${imgUrl})`;
  categoryPara.textContent = category;
  namePara.textContent = name;
  pricePara.textContent = `$${parseFloat(price).toFixed(2)}`;
  favCheckbox.setAttribute('type', 'checkbox');
  btn.textContent = amount === 0 ? 'Add to Cart'
    : `${amount} Item${amount > 1 ? 's' : ''} added`;
  btnRemove.textContent = '-';
  btnAdd.textContent = '+';

  card.classList.add('shop-card');
  card.dataset.amount = amount;
  card.dataset.favorite = false;
  card.dataset.itemId = id;
  img.classList.add('shop-card-image');
  imgHover.classList.add('shop-card-image-hover');
  categoryPara.classList.add('shop-card-category');
  namePara.classList.add('shop-card-name');
  pricePara.classList.add('shop-card-price');
  favCheckbox.classList.add('shop-card-fav');
  btnDiv.classList.add('shop-card-button-div');
  btn.classList.add('shop-card-buy');
  btn.dataset.quantity = '1';
  btnAdd.classList.add('shop-card-add');
  btnAdd.dataset.quantity = '1';
  btnRemove.classList.add('shop-card-remove');
  btnRemove.dataset.quantity = '-1';

  [btn, btnAdd, btnRemove].forEach((button) => {
    button.addEventListener('click', addToCart);
  });

  btnDiv.append(btn, btnRemove, btnAdd);
  img.append(imgHover);
  card.append(img, categoryPara, namePara, pricePara, btnDiv, favCheckbox);

  return card;
}