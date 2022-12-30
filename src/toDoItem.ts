class ToDoItem {
  taskName: string;

  deadline: string;

  addedDate: Date;

  isComplete: boolean;

  constructor(taskName: string, deadline: string, addedDate: Date, isComplete: boolean) {
    this.taskName = taskName;
    this.deadline = deadline;
    this.addedDate = addedDate;
    this.isComplete = isComplete;
  }
}

export default ToDoItem;
