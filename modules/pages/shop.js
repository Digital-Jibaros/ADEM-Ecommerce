import { articles } from "../../articles.js";

const shopCategories = ['All Collections', 'Cacti', 'Plants', 'Succulents'];

export default function home() {
  const shop = [categories(), banner(), catalog()];
  
  return shop;
}

function categories() {
  const section = document.createElement('section');
  const categoriesList = document.createElement('ul');

  shopCategories.forEach((category, i) => {
    const li = document.createElement('li');
    li.textContent = category;

    if (i === 0) li.classList.add('active');
    
    categoriesList.append(li);
  });

  section.append(categoriesList);

  section.classList.add('shop-categories');
  
  return section;
}

function banner() {
  const section = document.createElement('section');
  const title = document.createElement('h1');

  title.textContent = shopCategories[0];

  section.classList.add('shop-banner');

  section.append(title);
  
  return section;
}

function catalog() {
  const section = document.createElement('section');
  const filterDiv = document.createElement('div');
  const filter = document.createElement('p');
  const dropdown = document.createElement('select');
  const dropdownOptions = ['Best Selling', 'Lorem Ipsum', 'Dolor Sit', 'Amet Consectetur'];
  const articlesDiv = document.createElement('div');

  dropdownOptions.forEach(category => {
    const option = document.createElement('option');
    option.textContent = category;

    dropdown.append(option);
  });
  
  articles.forEach((item) => {
    const newCard = shopCard(
      item.img,
      item.category,
      item.name,
      item.price,
      );

      articlesDiv.append(newCard);
  });

  filter.textContent = 'Filter';
  
  section.classList.add('shop-catalog');
  filterDiv.classList.add('shop-filter');
  articlesDiv.classList.add('shop-articles');

  filterDiv.append(filter, dropdown);
  section.append(filterDiv, articlesDiv);
  
  return section;
}

function shopCard(imgUrl, category, name, price, amount = 0){
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
  btn.textContent = 'Add to Cart';
  btnRemove.textContent = '-';
  btnAdd.textContent = '+';


  card.classList.add('shop-card');
  card.dataset.amount = amount;
  card.dataset.favorite = false;
  img.classList.add('shop-card-image');
  imgHover.classList.add('shop-card-image-hover');
  categoryPara.classList.add('shop-card-category');
  namePara.classList.add('shop-card-name');
  pricePara.classList.add('shop-card-price');
  favCheckbox.classList.add('shop-card-fav');
  btnDiv.classList.add('shop-card-button-div');
  btn.classList.add('shop-card-buy');
  btnAdd.classList.add('shop-card-add');
  btnRemove.classList.add('shop-card-remove');

  btnDiv.append(btn, btnRemove, btnAdd);
  img.append(imgHover);
  card.append(img, categoryPara, namePara, pricePara, btnDiv, favCheckbox);

  return card;
}