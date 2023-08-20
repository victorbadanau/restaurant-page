import _ from "lodash";
import { header, footer } from "./initialPage.js";
import home from "./home.js";
import menu from "./menu.js";
import contact from "./contact.js";

function component() {
  const content = document.createElement("div");
  content.classList.add("content");

  const main = document.createElement("main");
  main.classList.add("main");

  main.appendChild(home());

  const homeBtn = header().home;
  const menuBtn = header().menu;
  const contactBtn = header().contact;

  homeBtn.addEventListener("pointerdown", () => {
    console.log("home");
    main.appendChild(home());
  });

  menuBtn.addEventListener("pointerdown", () => {
    main.removeChild(home());
    // main.appendChild(menu());
  });

  contactBtn.addEventListener("pointerdown", () => {
    main.appendChild(contact());
  });

  content.appendChild(header().element);
  content.appendChild(main);
  content.appendChild(footer());

  return content;
}

document.body.appendChild(component());
