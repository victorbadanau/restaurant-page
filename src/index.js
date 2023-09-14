import _ from "lodash";
import './style.css';
import home from "./home.js";
import menu from "./menu.js";
import contact from "./contact.js";
 
function documentHeight() {
  const doc = document.documentElement;
  doc.style.setProperty('--doc-height', `${window.innerHeight}px`);
}
window.addEventListener('resize', documentHeight);
documentHeight();

function component() {
  const content = document.createElement("div");
  content.classList.add("content");

  const main = document.createElement("main");
  main.classList.add("main");

  const header = document.createElement("header");
  header.classList.add("header");

  const h1 = document.createElement("h1");
  h1.innerHTML = "Casino";

  const nav = document.createElement("nav");

  const homeBtn = document.createElement("button");
  homeBtn.classList.add("btn-nav");
  homeBtn.setAttribute("id", "home");
  homeBtn.innerHTML = "Home";

  const menuBtn = document.createElement("button");
  menuBtn.classList.add("btn-nav");
  menuBtn.setAttribute("id", "menu");
  menuBtn.innerHTML = "Menu";

  const contactBtn = document.createElement("button");
  contactBtn.classList.add("btn-nav");
  contactBtn.setAttribute("id", "contact");
  contactBtn.innerHTML = "Contact";

  nav.appendChild(homeBtn);
  nav.appendChild(menuBtn);
  nav.appendChild(contactBtn);

  header.appendChild(h1);
  header.appendChild(nav);

  const footer = document.createElement("footer");
  footer.classList.add("footer");

  const p = document.createElement("p");
  p.innerHTML = "Made by victorbadanau";

  const a_1 = document.createElement("a");
  a_1.href = "https://github.com/victorbadanau";
  a_1.target = "_blank";

  const i_1 = document.createElement("i");
  i_1.classList.add("fab");
  i_1.classList.add("fa-github");

  const a_2 = document.createElement("a");
  a_2.href = "https://github.com/victorbadanau/restaurant-page";

  const i_2 = document.createElement("i");
  i_2.classList.add("fa-solid");
  i_2.classList.add("fa-code");

  a_1.appendChild(i_1);
  a_2.appendChild(i_2);

  footer.appendChild(p);
  footer.appendChild(a_1);
  footer.appendChild(a_2);

  main.appendChild(home());

  homeBtn.addEventListener("pointerdown", () => {
    removeAllChildNodes(main);
    main.appendChild(home());
  });

  menuBtn.addEventListener("pointerdown", () => {
    removeAllChildNodes(main);
    main.appendChild(menu());
  });

  contactBtn.addEventListener("pointerdown", () => {
    removeAllChildNodes(main);
    main.appendChild(contact());
  });

  content.appendChild(header);
  content.appendChild(main);
  content.appendChild(footer);

  return content;
}

document.body.appendChild(component());

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
