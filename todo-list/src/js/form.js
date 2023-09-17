import { createHtmlElement } from "./helper";

export default function formPageFactory(page) {
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
          // Verify the data and add to the local storage
          console.log("Page should not refresh!");
        });
      }
    });
  }

  function createFormBtns() {
    let cancelBtn = createHtmlElement("button", "cancel", null, "Cancel", null);
    cancelBtn.setAttribute("type", "button");
    let clearBtn = createHtmlElement("button", "clear", null, "Clear", null);
    clearBtn.setAttribute("type", "reset");
    let submitBtn = createHtmlElement("button", "submit", null, "Submit", null);
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
    let btns = createFormBtns();
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
    let btns = createFormBtns();
    addBtnListners(btns);
    let form = createHtmlElement("form", null, null, null, [
      createFormElement("input", "project", "text", true, "Project:", null),
      btns,
    ]);
    page.appendChild(form);
  }

  function displayToDo() {
    page.classList.add("form-todo");
    addToDoForm();
  }
  function displayProject() {
    page.classList.add("form-project");
    addProjectForm();
  }

  function remove() {
    page.innerHTML = "";
    page.classList.remove("form-todo");
    page.classList.remove("form-project");
  }
  return {
    displayToDo,
    displayProject,
    remove,
  };
}
