import { createHtmlElement, createImgElement } from "./helper";
import themeFactory from "./theme";

import hamburgerSrc from "./../assets/img/hamburger.svg";
import homeSrc from "./../assets/img/home.svg";
import addSrc from "./../assets/img/add.svg";
import calendarSrc from "./../assets/img/calendar-header.svg";
import colorPalleteSrc from "./../assets/img/color-palette.svg";

export default function headerFactory(header) {
  let leftNav = [
    getSvgWithContainer(hamburgerSrc, "hamburger icon", ["svg-hamburger"]),
    getSvgWithContainer(homeSrc, "home icon", ["svg-home"]),
  ];

  let rightNav = [
    getSvgWithContainer(addSrc, "add icon", ["svg-add"]),
    getSvgWithContainer(calendarSrc, "calendar icon", ["svg-calendar-header"]),
    getSvgWithContainer(colorPalleteSrc, "theme icon", ["svg-colorPallete"]),
  ];

  function getSvgWithContainer(src, alt, Classes) {
    const svgCard = createImgElement(src, alt, Classes, null);
    const svgContainer = createHtmlElement(
      "button",
      null,
      ["svgContainer"],
      null,
      [svgCard]
    );
    return svgContainer;
  }

  function display() {
    const leftNavContainer = createHtmlElement(
      "div",
      null,
      ["nav-left"],
      null,
      null
    );
    leftNav.forEach((ele) => {
      leftNavContainer.appendChild(ele);
    });
    const rightNavContainer = createHtmlElement(
      "div",
      null,
      ["nav-right"],
      null,
      null
    );
    rightNav.forEach((ele) => {
      rightNavContainer.appendChild(ele);
    });
    header.appendChild(leftNavContainer);
    header.appendChild(rightNavContainer);
  }
  function remove() {}
  return {
    display,
    remove,
  };
}
