import { createHtmlElement, createImgElement } from "./helper";

import todaySrc from "./../assets/img/today.svg";
import upcomingSrc from "./../assets/img/upcoming.svg";
import houseSrc from "./../assets/img/house.svg";
import workSrc from "./../assets/img/work.svg";
import addSrc from "./../assets/img/add.svg";

export default function mainPageFactory(main) {
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

  function createSideMenu() {
    function createDivBox(svg, text, classList) {
      let para = createHtmlElement("p", null, null, text, null);
      let div = createHtmlElement("div", null, classList, null, [svg, para]);
      return div;
    }

    let topDiv = createHtmlElement("div", null, ["top-div"], null, [
      createDivBox(
        getSvgWithContainer(todaySrc, "today icon", ["svg-today"]),
        "Today",
        ["box-today"]
      ),
      createDivBox(
        getSvgWithContainer(upcomingSrc, "upcoming icon", ["svg-upcoming"]),
        "Upcoming",
        ["box-upcoming"]
      ),
    ]);

    let header = createHtmlElement(
      "h2",
      null,
      ["projects-header2"],
      "Projects",
      null
    );
    let headerDiv = createHtmlElement("div", null, ["projects-header"], null, [
      header,
      getSvgWithContainer(addSrc, "Add project", ["svg-add-project"]),
    ]);
    let botDiv = createHtmlElement("div", null, ["bot-div"], null, [
      createDivBox(
        getSvgWithContainer(houseSrc, "House icon", ["svg-house"]),
        "Home",
        ["box-house"]
      ),
      createDivBox(
        getSvgWithContainer(workSrc, "work icon", ["svg-work"]),
        "Work",
        ["box-work"]
      ),
    ]);
    let sideMenu = createHtmlElement("div", null, ["sideMenu"], null, [
      topDiv,
      headerDiv,
      botDiv,
    ]);
    main.appendChild(sideMenu);
  }
  /**
   * create a div element with id page and append it to main section
   */
  function createPage() {
    main.appendChild(createHtmlElement("div", "page", null, null, null));
  }

  function toggleSideMenu() {
    document.querySelector(".sideMenu").toggleAttribute("data-open");
  }

  function ShowHome() {}

  function ShowUpcoming() {}

  function ShowProject(projectName) {}

  return {
    createSideMenu,
    toggleSideMenu,
    createPage,
    ShowHome,
    ShowUpcoming,
    ShowProject,
  };
}
