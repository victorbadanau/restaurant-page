export function header() {
  const element = document.createElement('header');
  element.classList.add('header');

  const h1 = document.createElement('h1');
  h1.innerHTML = 'Casino';

  const nav = document.createElement('nav');

  const home = document.createElement('button');
  home.classList.add('btn-nav');
  home.setAttribute('id', 'home');
  home.innerHTML = 'Home';

  const menu = document.createElement('button');
  menu.classList.add('btn-nav');
  menu.setAttribute('id', 'menu');
  menu.innerHTML = 'Menu';

  const contact = document.createElement('button');
  contact.classList.add('btn-nav');
  contact.setAttribute('id', 'contact');
  contact.innerHTML = 'Contact';

  nav.appendChild(home);
  nav.appendChild(menu);
  nav.appendChild(contact);

  element.appendChild(h1);
  element.appendChild(nav);

  return {element, home, menu, contact};
}

export function footer() {
  const element = document.createElement('footer');
  element.classList.add('footer');

  const p = document.createElement('p');
  p.innerHTML = 'Made by victorbadanau';

  const a_1 = document.createElement('a');
  a_1.href = 'https://github.com/victorbadanau';
  a_1.target = '_blank';

  const i_1 = document.createElement('i');
  i_1.classList.add('fab');
  i_1.classList.add('fa-github');

  const a_2 = document.createElement('a');
  a_2.href = 'https://github.com/victorbadanau/restaurant-page';

  const i_2 = document.createElement('i');
  i_2.classList.add('fa-solid');
  i_2.classList.add('fa-code');

  a_1.appendChild(i_1);
  a_2.appendChild(i_2);

  element.appendChild(p);
  element.appendChild(a_1);
  element.appendChild(a_2);

  return element;
}