//import styles
import "./reset.css";
import "./style.css";
import "./footer.css";

import hamBurgerSvg from "./assets/menu.svg";

import { createHtmlElement, createImgElement } from "./helper";
import { HomePageFactory } from "./home";

const load = (() => {
  const content = document.querySelector("#content");
  const homePage = HomePageFactory(content);

  const TabNames = ["HOME", "MENU", "GALLERY", "CONTACT", "BOOK"];
  const currentTab = "HOME";

  function addNavBar() {
    const unorderedList = document.createElement("ul");
    const cardImg = new Image(30, 30);
    cardImg.src = hamBurgerSvg;
    cardImg.alt = "menu icon";
    const toggleBtn = createHtmlElement("li", null, ["toggle-nav-bar"], null, [
      cardImg,
    ]);
    unorderedList.appendChild(toggleBtn);
    TabNames.forEach((tab) => {
      unorderedList.appendChild(createHtmlElement("li", null, null, tab, null));
    });

    const navBar = createHtmlElement("nav", null, ["nav"], null, [
      unorderedList,
    ]);
    content.appendChild(navBar);

    const TabElements = [...document.querySelectorAll(".nav li")];
    for (let i = 1; i < TabElements.length; ++i) {
      TabElements[i].addEventListener("click", switchTab);
    }

    toggleBtn.addEventListener("click", toggleNav);
  }

  function toggleNav() {
    const unorderedList = document.querySelector("ul");
    unorderedList.classList.toggle("show");
  }

  function switchTab() {
    // To do
    console.log("inside switch tab");
  }

  function colorNavBar(tab) {
    let index = TabNames.findIndex((el) => {
      return el == tab;
    });
    const tabElements = document
      .querySelector("nav")
      .querySelectorAll('li:not([class*="toggle-nav-bar"]');
    //change class of all tabs
    tabElements.forEach((t) => {
      t.classList.remove("active");
    });
    //change class of selected tab
    tabElements[index].classList.add("active");
  }

  addNavBar();
  colorNavBar("HOME");
  homePage.display();

  const footer = createHtmlElement("footer", null, ["footer"], null, null);
  footer.innerHTML = `<p>Copyright &copy;<script>document.write(new Date().getFullYear());</script>argon-3467<a href="https://github.com/argon-3467"><i class="fa-brands fa-github"></i></a></p>`;
  content.appendChild(footer);
})();

if (module.hot) {
  module.hot.accept();
}
