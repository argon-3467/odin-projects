import themeFactory from "./theme";
import mainPageFactory from "./main";

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
      //  Will show Today's tasks on the main page
      alert("This feature is not yet Implemented");
    });

    let add = document.querySelector(".svg-add").parentElement;
    add.addEventListener("click", () => {
      // Will show form on main page to get a task to be added
      alert("This feature is not yet Implemented");
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
      // Will show Today's task on the main page
      alert("This feature is not yet Implemented");
    });

    let upcomingBox = document.querySelector(".box-upcoming");
    upcomingBox.addEventListener("click", () => {
      // Show weekly tasks on the main page
      alert("This feature is not yet Implemented");
    });
    let projectHeader = document.querySelector(".projects-header");
    projectHeader.addEventListener("click", () => {
      // Add a project
      alert("This feature is not yet Implemented");
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
