import { createHtmlElement } from "./helper";
import storageFactory from "./storage";
import todayFactory from "./today";
import mainPageFactory from "./main";

export default function formPageFactory(page) {
  let Storage = storageFactory();
  let Today = todayFactory(page);
  let Main = mainPageFactory();
  function getFormValues(typeOfForm) {
    if (typeOfForm == "todo") {
      let title = document.getElementById("title").value;
      let project = document.getElementById("project").value;
      let details = document.getElementById("details").value;
      let dueDate = new Date(
        document.getElementById("dueDate").value
      ).toDateString();
      let priority = document.getElementById("priority").value;
      return {
        title,
        project,
        details,
        dueDate,
        priority,
      };
    } else if (typeOfForm == "project") {
      let project = document.getElementById("project").value;
      return {
        project,
      };
    }
  }

  function ValidateData(data, typeOfForm) {
    if (typeOfForm == "todo") return "yes";
    else if (typeOfForm == "project") {
      if (Storage.hasProject(data.project)) return "project";
      else return "yes";
    }
  }

  function addBtnListners(btnsDiv) {
    btnsDiv.childNodes.forEach((childBtn) => {
      if (childBtn.id == "cancel") {
        childBtn.addEventListener("click", () => {
          remove();
        });
      } else if (childBtn.id == "clear") {
      } else if (childBtn.id == "submit") {
        childBtn.addEventListener("click", (event) => {
          event.preventDefault();
          let data = getFormValues(childBtn.className);
          let errorValue = ValidateData(data, childBtn.className);
          if (errorValue == "yes" && childBtn.className == "todo") {
            Storage.addTask(
              data.title,
              data.project,
              data.details,
              data.dueDate,
              data.priority,
              false
            );
            Today.remove();
            Today.display();
          } else if (errorValue == "yes" && childBtn.className == "project") {
            Storage.addProject(data.project);
            Main.updateProjects();
            Today.remove();
            Today.display();
          } else {
            showAlert(errorValue);
          }
        });
      }
    });
  }

  function showAlert(errorValue) {
    alert(`${errorValue} is invalid.`);
  }

  function createFormBtns(typeOfForm) {
    let cancelBtn = createHtmlElement(
      "button",
      "cancel",
      [typeOfForm],
      "Cancel",
      null
    );
    cancelBtn.setAttribute("type", "button");
    let clearBtn = createHtmlElement(
      "button",
      "clear",
      [typeOfForm],
      "Clear",
      null
    );
    clearBtn.setAttribute("type", "reset");
    let submitBtn = createHtmlElement(
      "button",
      "submit",
      [typeOfForm],
      "Add",
      null
    );
    submitBtn.setAttribute("type", "submit");

    return createHtmlElement("div", null, ["btns"], null, [
      cancelBtn,
      clearBtn,
      submitBtn,
    ]);
  }
  function createFormElement(tag, id, type, required, labelText, childArray) {
    let label = createHtmlElement("label", null, null, labelText, null);
    label.setAttribute("for", id);
    let element = createHtmlElement(tag, id, null, null, childArray);
    if (required) element.toggleAttribute("required");
    if (type) element.setAttribute("type", type);
    return createHtmlElement("div", null, [id], null, [label, element]);
  }
  function createPriorityOption(value) {
    let option = createHtmlElement(
      "option",
      null,
      null,
      `${value.charAt(0).toUpperCase()}${value.slice(1)}`,
      null
    );
    option.setAttribute("value", value);
    if (value == "low") option.toggleAttribute("selected");
    return option;
  }

  function addToDoForm() {
    page.appendChild(
      createHtmlElement("h2", null, ["form-header"], "Add a new todo", null)
    );
    let btns = createFormBtns("todo");
    addBtnListners(btns);
    let form = createHtmlElement("form", null, null, null, [
      createFormElement("input", "title", "text", true, "Title:", null),
      createFormElement("input", "project", "text", true, "Project:", null),
      createFormElement("textarea", "details", null, false, "Details:", null),
      createFormElement("input", "dueDate", "date", false, "Due Date:", null),
      createFormElement("select", "priority", null, false, "Priority:", [
        createPriorityOption("low"),
        createPriorityOption("medium"),
        createPriorityOption("high"),
      ]),
      btns,
    ]);
    page.appendChild(form);
  }

  function addProjectForm() {
    page.appendChild(
      createHtmlElement("h2", null, ["form-header"], "Add a new Project", null)
    );
    let btns = createFormBtns("project");
    addBtnListners(btns);
    let form = createHtmlElement("form", null, null, null, [
      createFormElement("input", "project", "text", true, "Project:", null),
      btns,
    ]);
    page.appendChild(form);
  }

  function displayToDo() {
    page.className = "form-todo";
    addToDoForm();
  }
  function displayProject() {
    page.className = "form-project";
    addProjectForm();
  }

  function remove() {
    page.innerHTML = "";
    page.className = "";
  }
  return {
    displayToDo,
    displayProject,
    remove,
  };
}
