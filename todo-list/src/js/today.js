import storageFactory from "./storage";
import { createHtmlElement, createImgElement } from "./helper";

import editSrc from "./../assets/img/edit.svg";
import deleteSrc from "./../assets/img/delete.svg";

export default function todayFactory(page) {
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

  function createTaskDiv(task) {
    let titleSpan = createHtmlElement("span", null, null, task.title, null);
    let dateEle = createHtmlElement(
      "p",
      null,
      ["task-date"],
      `${new Date(task.dueDate).toDateString()}`,
      null
    );
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
    prioritySvg.addEventListener("click", () => {
      let task = prioritySvg.parentElement.parentElement;
      task.classList.toggle("done");
      let updatedTask = Storage.getTaskById(task.id);
      updatedTask.done = !updatedTask.done;
      Storage.updateTaskById(updatedTask);
    });
    let editSvg = getSvgWithContainer(editSrc, "edit icon", ["svg-edit"]);
    editSvg.addEventListener("click", () => {
      // Edit the task
      alert("This feature is not yet implemented.");
    });
    let deleteSvg = getSvgWithContainer(deleteSrc, "delete icon", [
      "svg-delete",
    ]);
    deleteSvg.addEventListener("click", () => {
      let task = prioritySvg.parentElement.parentElement;
      Storage.deleteTaskById(task.id);
      task.remove();
    });
    let leftDiv = createHtmlElement("div", null, ["task-left"], null, [
      createHtmlElement("div", null, ["task-header"], null, [titleSpan]),
      dateEle,
    ]);
    let rightDiv = createHtmlElement("div", null, ["task-right"], null, [
      prioritySvg,
      editSvg,
      deleteSvg,
    ]);
    let taskDiv = createHtmlElement("div", task.id, ["task"], null, [
      leftDiv,
      rightDiv,
    ]);
    if (task.done) taskDiv.classList.add("done");
    return taskDiv;
  }

  function addToday() {
    let todaysDate = new Date().toDateString();
    let TaskList = Storage.getTaskListByDate(todaysDate);
    TaskList.forEach((task) => {
      page.appendChild(createTaskDiv(task));
    });
  }

  function display() {
    page.classList.add("today");
    addToday();
  }

  function remove() {
    page.innerHTML = "";
    page.className = "";
  }

  return {
    display,
    remove,
  };
}
