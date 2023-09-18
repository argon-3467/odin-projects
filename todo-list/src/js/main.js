import { createHtmlElement, createImgElement } from "./helper";

import todaySrc from "./../assets/img/today.svg";
import upcomingSrc from "./../assets/img/upcoming.svg";
import deleteSrc from "./../assets/img/delete.svg";
import addSrc from "./../assets/img/add.svg";
import storageFactory from "./storage";

export default function mainPageFactory(main) {
  let Storage = storageFactory();
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
  function createDivBox(svg, text, classList) {
    let para = createHtmlElement("p", null, null, text, null);
    let div = createHtmlElement("div", null, classList, null, [svg, para]);
    return div;
  }
  function createSideMenu() {
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
    let ProjectList = Storage.getProjectList();

    let botDiv = createHtmlElement("div", null, ["bot-div"], null, null);

    ProjectList.forEach((project) => {
      botDiv.appendChild(
        createDivBox(
          getSvgWithContainer(deleteSrc, "Delete icon", ["svg-delete"]),
          `${project}`,
          [`box-`]
        )
      );
    });

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

  function updateProjects() {
    let ProjectList = Storage.getProjectList();
    let botDiv = document.querySelector(".bot-div");
    let name = ProjectList[ProjectList.length - 1];
    let svg = getSvgWithContainer(deleteSrc, "Delete icon", ["svg-delete"]);
    botDiv.appendChild(createDivBox(svg, name, [`box-`]));
  }

  function ShowUpcoming() {}

  function ShowProject(projectName) {}

  return {
    createSideMenu,
    toggleSideMenu,
    createPage,
    updateProjects,
    ShowUpcoming,
    ShowProject,
  };
}
