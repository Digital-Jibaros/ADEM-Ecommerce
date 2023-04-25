export default function home() {
  const shop = [categories(), banner(), catalog()];
  
  return shop;
}

function categories() {
  const section = document.createElement('section');

  section.classList.add('shop-categories');
  
  return section;
}

function banner() {
  const section = document.createElement('section');

  section.classList.add('shop-banner');
  
  return section;
}

function catalog() {
  const section = document.createElement('section');
  
  section.classList.add('shop-catalog');
  
  return section;
}
