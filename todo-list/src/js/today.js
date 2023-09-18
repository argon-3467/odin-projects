import { Task } from "./Task";
import { createHtmlElement, createImgElement } from "./helper";

import editSrc from "./../assets/img/edit.svg";
import deleteSrc from "./../assets/img/delete.svg";

export default function todayFactory(page) {
  let TaskList = [
    new Task("a", "home", "this is a test project", "18-09-2023", "low", false),
    new Task(
      "b",
      "home",
      "this is a test project",
      "18-09-2023",
      "medium",
      false
    ),
    new Task("c", "home", "this is a test project", "18-09-2023", "high", true),
    new Task("d", "home", "this is a test project", "19-09-2023", "low", true),
    new Task(
      "e",
      "home",
      "this is a test project",
      "27-09-2023",
      "high",
      false
    ),
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

  function createTaskDiv(task) {
    let titleH2 = createHtmlElement(
      "h2",
      null,
      ["task-header"],
      task.title,
      null
    );
    let dateEle = createHtmlElement("p", null, ["task-date"], "today", null);
    let priorityDiv = createHtmlElement(
      "div",
      null,
      ["task-priority"],
      null,
      null
    );
    priorityDiv.classList.add(`${task.priority}`);
    let prioritySvg = createHtmlElement(
      "button",
      null,
      ["svgContainer"],
      null,
      [priorityDiv]
    );
    let editSvg = getSvgWithContainer(editSrc, "edit icon", ["svg-edit"]);
    let deleteSvg = getSvgWithContainer(deleteSrc, "delete icon", [
      "svg-delete",
    ]);
    let leftDiv = createHtmlElement("div", null, ["task-left"], null, [
      titleH2,
      dateEle,
    ]);
    let rightDiv = createHtmlElement("div", null, ["task-right"], null, [
      prioritySvg,
      editSvg,
      deleteSvg,
    ]);
    let taskDiv = createHtmlElement("div", null, ["task"], null, [
      leftDiv,
      rightDiv,
    ]);
    if (task.done) taskDiv.classList.add("done");
    return taskDiv;
  }

  function addToday() {
    TaskList.forEach((task) => {
      if (task.dueDate == "18-09-2023") {
        page.appendChild(createTaskDiv(task));
      }
    });
  }

  function display() {
    page.classList.add("today");
    addToday();
  }

  function remove() {
    page.innerHTML = "";
    page.classList.remove("today");
  }

  return {
    display,
    remove,
  };
}
