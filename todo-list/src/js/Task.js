/**
 * create a new Task object
 *@param {string} title of the ToDo
 *@param {string} project
 */
class Task {
  constructor(title, project, details, dueDate, priority, done) {
    this.title = title;
    this.details = details;
    this.project = project;
    this.dueDate = dueDate;
    this.priority = priority;
    this.done = done;
  }
}

export { Task };
