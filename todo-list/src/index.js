import "./css/reset.css";
import "./css/variables.css";
import "./css/header.css";
import "./css/main.css";
import "./css/page.css";
import "./css/form.css";
import "./css/footer.css";

import { createHtmlElement, createImgElement } from "./js/helper";
import themeFactory from "./js/theme";
import headerFactory from "./js/header";
import mainPageFactory from "./js/main";
import footerFactory from "./js/footer";
import domManip from "./js/domManip";
import todayFactory from "./js/today";
import storageFactory from "./js/storage";

const load = (() => {
  let Storage = storageFactory();
  Storage.init();
  const header = document.querySelector(".header");
  const main = document.querySelector(".main");
  const footer = document.querySelector(".footer");

  let headerSection = headerFactory(header);
  let themeUpdater = themeFactory();
  let footerSection = footerFactory(footer);
  let mainSection = mainPageFactory(main);
  let domManipulator = domManip();

  headerSection.display();
  mainSection.createSideMenu();
  mainSection.createPage();
  let page = document.getElementById("page");
  let Today = todayFactory(page);
  Today.display();
  themeUpdater.addThemesCard();
  footerSection.display();
  themeUpdater.updateTheme("system");

  domManipulator.addListners();
})();
