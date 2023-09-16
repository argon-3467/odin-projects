import "./css/reset.css";
import "./css/variables.css";
import "./css/header.css";
import "./css/main.css";
import "./css/footer.css";
import { createHtmlElement, createImgElement } from "./js/helper";
import themeFactory from "./js/theme";
import headerFactory from "./js/header";
import mainPageFactory from "./js/main";
import footerFactory from "./js/footer";
import domManip from "./js/domManip";

const load = (() => {
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
  themeUpdater.addThemesCard();
  footerSection.display();
  themeUpdater.updateTheme("system");
  domManipulator.addListners();
})();
