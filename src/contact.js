import Icon from './icons/address.png';

export default function contact() {
  const element = document.createElement('div');
  element.classList.add('contact');

  const p_1 = document.createElement('p');
  p_1.innerHTML = '📞 0123 456 789';


  const p_2 = document.createElement('p');
  p_2.innerHTML = '🏠 Hollywood Boulevard 42, Los Angeles, USA';

  const img = new Image();
  img.src = Icon;
  img.alt = 'hollywood';

  element.appendChild(p_1);
  element.appendChild(p_2);
  element.appendChild(img);

  return element;
}