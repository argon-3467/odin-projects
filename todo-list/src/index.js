import "./css/reset.css";
import "./css/variables.css";
import "./css/header.css";
import "./css/style.css";
import "./css/footer.css";
import { createHtmlElement, createImgElement } from "./js/helper";
import headerFactory from "./js/header";
import footerFactory from "./js/footer";

const load = (() => {
  const header = document.querySelector(".header");
  const main = document.querySelector(".main");
  const footer = document.querySelector(".footer");

  let headerSection = headerFactory(header);
  let footerSection = footerFactory(footer);
  headerSection.display();
  footerSection.display();
})();
