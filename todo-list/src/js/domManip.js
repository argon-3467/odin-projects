import themeFactory from "./theme";
import mainPageFactory from "./main";
import formPageFactory from "./form";
import todayFactory from "./today";

export default function domManip() {
  let themeUpdater = themeFactory();
  let mainSection = mainPageFactory();

  function addHeaderListners() {
    let hamburger = document.querySelector(".svg-hamburger").parentElement;
    hamburger.addEventListener("click", () => {
      mainSection.toggleSideMenu();
    });
    let home = document.querySelector(".svg-home").parentElement;
    home.addEventListener("click", () => {
      let page = document.querySelector("#page");
      let Today = todayFactory(page);
      Today.remove();
      Today.display();
    });

    let add = document.querySelector(".svg-add").parentElement;
    add.addEventListener("click", () => {
      let page = document.querySelector("#page");
      let Form = formPageFactory(page);
      Form.remove();
      Form.displayToDo();
    });

    let calendar = document.querySelector(".svg-calendar-header").parentElement;
    calendar.addEventListener("click", () => {
      // Show weekly tasks on the main page
      alert("This feature is not yet Implemented");
    });

    let themeSvg = document.querySelector(".svg-colorPallete").parentElement;
    themeSvg.addEventListener("click", () => {
      themeUpdater.toggleThemeCard();
    });
    let Inputs = [...document.querySelectorAll(".select-theme input")];
    Inputs.forEach((input) => {
      input.addEventListener("click", (event) => {
        themeUpdater.updateTheme(event.target.value);
        themeUpdater.toggleThemeCard();
      });
    });
  }

  function addSideMenuListners() {
    let todayBox = document.querySelector(".box-today");
    todayBox.addEventListener("click", () => {
      let page = document.querySelector("#page");
      let Today = todayFactory(page);
      Today.remove();
      Today.display();
      mainSection.toggleSideMenu();
    });

    let upcomingBox = document.querySelector(".box-upcoming");
    upcomingBox.addEventListener("click", () => {
      // Show weekly tasks on the main page
      alert("This feature is not yet Implemented");
    });
    let projectHeader = document.querySelector(".projects-header");
    projectHeader.addEventListener("click", () => {
      let page = document.querySelector("#page");
      let Form = formPageFactory(page);
      Form.remove();
      Form.displayProject();
      mainSection.toggleSideMenu();
    });
    let botDiv = document.querySelector(".bot-div");
    let Projects = [...botDiv.querySelectorAll(`[class^="box-"]`)];
    Projects.forEach((project) => {
      addListnersToProject(project);
    });
  }

  function addListnersToProject(project) {
    // console.log(project.className.slice(4));
    project.addEventListener("click", () => {
      // Show Project on main page
      console.log(project.className.slice(4));
      alert("This feature is not yet Implemented");
    });
  }

  function addListners() {
    addHeaderListners();
    addSideMenuListners();
  }
  return {
    addListners,
  };
}
