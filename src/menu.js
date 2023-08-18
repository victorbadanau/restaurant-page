import gamberetti from "./src/icons/gamberetti.png";
import contessa from "./src/icons/contessa.png";
import bufala from "./src/icons/bufala.png";
import salmone from "./src/icons/salmone.png";
import tartuffo from "./src/icons/tartuffo.png";
import spinacio from "./src/icons/spinacio.png";
import arugula from "./src/icons/arugula.png";
import magherita from "./src/icons/magherita.png";
import salsiccia from "./src/icons/salsiccia.png";

export default function menu() {
  const element = document.createElement("div");
  element.classList.add("menu");

  const img_1 = new Image();
  img_1.src = gamberetti;
  img_1.alt = "gamberetti";

  const h2_1 = "Gamberetti";
  const p_1 =
    "Dough, Pizza Sauce, Mozzarella, Shrimp, Cherry Tomatoes, Bell Pepper, Lemon, Oregano";

  const img_2 = new Image();
  img_2.src = contessa;
  img_2.alt = "contessa";

  const h2_2 = "Contessa";
  const p_2 =
    "Dough, Pizza Sauce, Mozzarella, Bocconcini, Prosciutto Crudo, Arugula, Pumpkin Seeds";

  const img_3 = new Image();
  img_3.src = bufala;
  img_3.alt = "bufala";

  const h2_3 = "Bufala";
  const p_3 =
    "Dough, Pizza Sauce, Mozzarella, Chorizo, Bocconcini, Cherry, Tomatoes, Pesto Sauce";

  const img_4 = new Image();
  img_4.src = salmone;
  img_4.alt = "salmone";

  const h2_4 = "Salmone";
  const p_4 =
    "Dough, Pizza Sauce, Mozzarella, Salmon Fillet, Onion, Capers, Lemon";

  const img_5 = new Image();
  img_5.src = tartuffo;
  img_5.alt = "tartuffo";

  const h2_5 = "Tartuffo";
  const p_5 =
    "Dough, Pizza Sauce, Mozzarella, Truffle Cream, Prosciutto Crudo, Mushrooms, Parmesan";

  const img_6 = new Image();
  img_6.src = spinacio;
  img_6.alt = "spinacio";

  const h2_6 = "Spinacio";
  const p_6 =
    "Dough, Pizza Sauce, Mozzarella, Spinach, Moldy Cheese, Cherry Tomatoes, Parmesan, Walnuts";

  const img_7 = new Image();
  img_7.src = arugula;
  img_7.alt = "arugula";

  const h2_7 = "Arugula";
  const p_7 =
    "Dough, Pizza Sauce, Mozzarella, Bocconcini, Arugula, Parmesan, Cherry Tomatoes";

  const img_8 = new Image();
  img_8.src = magherita;
  img_8.alt = "magherita";

  const h2_8 = "Magherita";
  const p_8 = "Dough, Pizza Sauce, Mozzarella, Basil";

  const img_9 = new Image();
  img_9.src = salsiccia;
  img_9.alt = "salsiccia";

  const h2_9 = "Salsiccia";
  const p_9 =
    "Dough, Pizza Sauce, Mozzarella, Pork Sausage, Mushrooms, Hot Peppers, Onions, Chili";

  element.appendChild(pizza(img_1, h2_1, p_1));
  element.appendChild(pizza(img_2, h2_2, p_2));
  element.appendChild(pizza(img_3, h2_3, p_3));
  element.appendChild(pizza(img_4, h2_4, p_4));
  element.appendChild(pizza(img_5, h2_5, p_5));
  element.appendChild(pizza(img_6, h2_6, p_6));
  element.appendChild(pizza(img_7, h2_7, p_7));
  element.appendChild(pizza(img_8, h2_8, p_8));
  element.appendChild(pizza(img_9, h2_9, p_9));

  return element;
}

function pizza(image, type, description) {
  const pizza = document.createElement("div");
  pizza.classList.add("pizza");

  const h2 = document.createElement("h2");
  h2.innerHTML = `${type}`;

  const p = document.createElement("p");
  p.innerHTML = `${description}`;

  pizza.appendChild(image);
  pizza.appendChild(h2);
  pizza.appendChild(p);

  return pizza;
}
