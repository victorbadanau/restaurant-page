import Icon from './icons/home-background.svg'

export default function home() {
  const element = document.createElement('div');
  element.classList.add('home');

  const h2 = document.createElement('h2');
  h2.innerHTML = 'The best pizza!';

  const h3_1 = document.createElement('h3');
  h3_1.innerHTML = 'Made with passion since 1903';

  const img = new Image();
  img.src = Icon;
  img.alt = 'pizzeria';

  const h3_2 = document.createElement('h3');
  h3_2.innerHTML = 'Order online or visit us!';

  element.appendChild(h2);
  element.appendChild(h3_1);
  element.appendChild(img);
  element.appendChild(h3_2);

  return element;
}