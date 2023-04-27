import { goToPage } from "../functions.js";

const svgNs = 'http://www.w3.org/2000/svg';

export default function home() {
  const home = [hero(), about(), categories()];

  return home;
}

function hero() {
  const hero = document.createElement('section');
  const div = document.createElement('div');
  const svg = document.createElementNS(svgNs, 'svg');
  const svgText = document.createElementNS(svgNs, 'text');
  const svgImg1 = document.createElementNS(svgNs, 'image');
  const svgImg2 = document.createElementNS(svgNs, 'image');
  const svgImg3 = document.createElementNS(svgNs, 'image');
  const para = document.createElement('p');
  const btn = document.createElement('button');
  const btnPara = document.createElement('p');
  const btnArrow = document.createElement('img');

  svgText.textContent = 'Grow';
  svgText.setAttribute('x', 15);
  svgText.setAttribute('y', 80);
  svgImg1.setAttribute('x', 5);
  svgImg1.setAttribute('y', 5);
  svgImg1.setAttribute('width', 25*1.25);
  svgImg1.setAttribute('height', 25*1.25);
  svgImg1.setAttribute('href', './media/images/home/plant-text-1.png');
  svgImg2.setAttribute('x', 15);
  svgImg2.setAttribute('y', 65);
  svgImg2.setAttribute('width', 14*1.25);
  svgImg2.setAttribute('height', 14*1.25);
  svgImg2.setAttribute('href', './media/images/home/plant-text-2.png');
  svgImg3.setAttribute('x', 225);
  svgImg3.setAttribute('y', 25);
  svgImg3.setAttribute('width', 56.74*1.25);
  svgImg3.setAttribute('height', 56.74*1.25);
  svgImg3.setAttribute('href', './media/images/home/plant-text-3.png');

  para.textContent = 'with us';
  btnPara.textContent = 'Start Your Green Journey';
  btnArrow.setAttribute('src', './media/images/home/btn-arrow.png');

  hero.classList.add('home-hero');
  div.classList.add('home-hero-div');

  btn.addEventListener('click', () => goToPage('shop'));

  svg.append(svgImg1, svgImg2, svgImg3, svgText);
  btn.append(btnPara, btnArrow);
  div.append(svg, para, btn);
  hero.append(div);

  return hero;
}

function about() {
  const about = document.createElement('section');
  const aboutDiv = document.createElement('div');
  const icons = document.createElement('img');
  const h2 = document.createElement('h2');
  const p = document.createElement('p');
  const imageDiv = document.createElement('div');
  const image = document.createElement('img');

  icons.setAttribute('src', './media/images/home/leaf-and-heart.png');
  h2.textContent = 'Find Your Perfect Plant';
  p.innerText = 'We handpick every plant in our shop, ensuring that they are healthy and of the highest quality.'
  image.setAttribute('src', './media/images/home/home-about.png');

  about.classList.add('home-about');
  aboutDiv.classList.add('home-about-div');
  imageDiv.classList.add('home-about-image-div');

  aboutDiv.append(icons, h2, p);

  imageDiv.append(image);
  about.append(aboutDiv, imageDiv);
  return about;
}

function categories() {
  const categories = document.createElement('section');

  const cardsData = [
    {
      title: 'Cacti',
      src: './media/images/home/card-category-cacti.png',
    },
    {
      title: 'Plants',
      src: './media/images/home/card-category-plants.png',
    },
    {
      title: 'Succulents',
      src: './media/images/home/card-category-succulents.png',
    }
  ];

  for (let i = 0; i < cardsData.length; i += 1) {
    const card = document.createElement('div');
    const h2 = document.createElement('h2');
    const line = document.createElement('hr');
    const button = document.createElement('button');
    const image = document.createElement('img');

    h2.textContent = cardsData[i].title;
    button.textContent = 'Shop Collection';
    image.setAttribute('src', cardsData[i].src);

    button.addEventListener('click', () => goToPage('shop'));

    card.classList.add('category-card');
    card.append(h2, line, button, image);
    categories.append(card);
  };

  categories.classList.add('home-categories');

  return categories;
}
