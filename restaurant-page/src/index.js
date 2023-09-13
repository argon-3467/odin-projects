//import styles
import "./reset.css";
import "./style.css";
import "./footer.css";

import hamBurgerSvg from "./assets/menu.svg";

import { createHtmlElement, createImgElement } from "./helper";
import { HomePageFactory } from "./home";
import { MenuPageFactory } from "./menu";
import { GalleryPageFactory } from "./gallery";

const load = (() => {
  const content = document.querySelector("#content");
  const homePage = HomePageFactory(content);
  const menuPage = MenuPageFactory(content);
  const galleryPage = GalleryPageFactory(content);

  const TabNames = ["HOME", "MENU", "GALLERY", "CONTACT", "BOOK"];
  let currentTab = "HOME";
  // let currentTab = "MENU";
  // let currentTab = "GALLERY";

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

  function switchTab(e) {
    const newTab = e.target.textContent;
    if (newTab == currentTab) return;

    //remove current tab
    if (currentTab == "HOME") homePage.remove();
    else if (currentTab == "MENU") menuPage.remove();
    else if (currentTab == "GALLERY") galleryPage.remove();
    else if (currentTab == "CONTACT");
    else if (currentTab == "BOOK");

    //change color in nav bar
    colorNavBar(newTab);

    //load new tab
    if (newTab == "HOME") {
      homePage.display();
    } else if (newTab == "MENU") {
      menuPage.display();
    } else if (newTab == "GALLERY") {
      galleryPage.display();
    } else if (newTab == "CONTACT") {
      // galleryPage.display();
    } else if (newTab == "BOOK") {
      // galleryPage.display();
    }

    currentTab = newTab;
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
  // colorNavBar("MENU");
  // colorNavBar("GALLERY");
  homePage.display();
  // menuPage.display();
  // galleryPage.display();

  const footer = createHtmlElement("footer", null, ["footer"], null, null);
  footer.innerHTML = `<p>Copyright &copy;<script>document.write(new Date().getFullYear());</script>argon-3467<a href="https://github.com/argon-3467"><i class="fa-brands fa-github"></i></a></p>`;
  content.appendChild(footer);
})();

if (module.hot) {
  module.hot.accept();
}
