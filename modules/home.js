export default function home() {
  const home = [hero(), about(), categories()];

  return home;
}

function hero() {
  const hero = document.createElement('section');
  const div = document.createElement('div');
  const para = document.createElement('p');
  const span1 = document.createElement('span');
  const span2 = document.createElement('span');
  const btn = document.createElement('button');
  const btnPara = document.createElement('p');
  const btnArrow = document.createElement('img');

  span1.textContent = 'Grow';
  span2.textContent = 'with us';
  btnPara.textContent = 'Start Your Green Journey';
  btnArrow.setAttribute('src', '../media/images/btn-arrow.png')

  hero.classList.add('home-hero');
  div.classList.add('home-hero-div');

  para.append(span1, span2);
  btn.append(btnPara, btnArrow);
  div.append(para, btn);
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
