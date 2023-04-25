export default function home() {
  const shop = [categories(), banner(), catalog()];
  
  return shop;
}

function categories() {
  const section = document.createElement('section');
  const categoriesList = document.createElement('ul');
  const categories = ['All Collections', 'Cacti', 'Plants', 'Succulents'];

  categories.forEach((category, i) => {
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

  title.textContent = 'All Collections';

  section.classList.add('shop-banner');

  section.append(title);
  
  return section;
}

function catalog() {
  const section = document.createElement('section');
  
  section.classList.add('shop-catalog');
  
  return section;
}
