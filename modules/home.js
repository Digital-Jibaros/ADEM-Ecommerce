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
  svgImg1.setAttribute('href', '../media/images/plant-text-1.png');
  svgImg2.setAttribute('x', 15);
  svgImg2.setAttribute('y', 65);
  svgImg2.setAttribute('width', 14*1.25);
  svgImg2.setAttribute('height', 14*1.25);
  svgImg2.setAttribute('href', '../media/images/plant-text-2.png');
  svgImg3.setAttribute('x', 225);
  svgImg3.setAttribute('y', 25);
  svgImg3.setAttribute('width', 56.74*1.25);
  svgImg3.setAttribute('height', 56.74*1.25);
  svgImg3.setAttribute('href', '../media/images/plant-text-3.png');

  para.textContent = 'with us';
  btnPara.textContent = 'Start Your Green Journey';
  btnArrow.setAttribute('src', '../media/images/btn-arrow.png');

  hero.classList.add('home-hero');
  div.classList.add('home-hero-div');

  svg.append(svgImg1, svgImg2, svgImg3, svgText);
  btn.append(btnPara, btnArrow);
  div.append(svg, para, btn);
  hero.append(div);

  return hero;
}

function about() {
  const about = document.createElement('section');

  about.classList.add('home-about');

  return about;
}

function categories() {
  const categories = document.createElement('section');

  categories.classList.add('home-categories');

  return categories;
}
