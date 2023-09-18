let TaskList = [];
let ProjectList = ["home", "work"];
let nextID = 1;

export default function storageFactory() {
  /**
   * Initialize TaskList and ProjectList
   */
  function init() {
    if (!localStorage.getItem("TaskList")) {
      TaskList = [
        new Task(
          "Stay happy",
          "home",
          "This is a test project",
          new Date().toDateString(),
          "high",
          false
        ),
      ];
      localStorage.setItem("TaskList", JSON.stringify(TaskList));
    } else {
      TaskList = JSON.parse(localStorage.getItem("TaskList"));
    }

    if (!localStorage.getItem("ProjectList")) {
      localStorage.setItem("ProjectList", JSON.stringify(ProjectList));
    } else {
      ProjectList = JSON.parse(localStorage.getItem("ProjectList"));
    }

    if (!localStorage.getItem("nextID")) {
      localStorage.setItem("nextID", nextID);
    } else {
      nextID = localStorage.getItem("nextID");
    }
  }

  function increaseIDbyOne() {
    ++nextID;
    localStorage.setItem("nextID", nextID);
  }

  class Task {
    constructor(title, project, details, dueDate, priority, done) {
      this.id = "task-" + nextID;
      increaseIDbyOne();
      this.title = title;
      this.details = details;
      this.project = project;
      this.dueDate = dueDate;
      this.priority = priority;
      this.done = done;
    }
  }

  function addTask(title, project, details, dueDate, priority, done) {
    TaskList.push(new Task(title, project, details, dueDate, priority, done));
    localStorage.setItem("TaskList", JSON.stringify(TaskList));
  }

  function addProject(project) {
    ProjectList.push(project);
    localStorage.setItem("ProjectList", JSON.stringify(ProjectList));
  }

  function hasProject(project) {
    if (ProjectList.some((ele) => ele == project)) return true;
    else return false;
  }

  function deleteTaskById(id) {
    TaskList = TaskList.filter((task) => task.id != id);
    localStorage.setItem("TaskList", JSON.stringify(TaskList));
  }

  function deleteProject(projectName) {
    ProjectList = ProjectList.filter((project) => project != projectName);
    localStorage.setItem("ProjectList", JSON.stringify(ProjectList));
  }

  function getTaskById(id) {
    let i = 0;
    TaskList.forEach((task, index) => {
      if (task.id == id) {
        i = index;
      }
    });
    return TaskList[i];
  }

  function updateTaskById(updatedTask) {
    let i = 0;
    TaskList.forEach((task, index) => {
      if (task.id == updatedTask.id) {
        i = index;
      }
    });
    TaskList[i] = updatedTask;
    localStorage.setItem("TaskList", JSON.stringify(TaskList));
  }

  function getProjectList() {
    return ProjectList;
  }

  function getTaskListByProject(projectName) {
    return TaskList.filter((task) => task.project == projectName);
  }

  function getTaskListByDate(date) {
    return TaskList.filter((task) => task.dueDate == date);
  }
  return {
    init,
    Task,
    addTask,
    addProject,
    hasProject,
    deleteProject,
    deleteTaskById,
    getTaskById,
    updateTaskById,
    getProjectList,
    getTaskListByDate,
    getTaskListByProject,
  };
}
