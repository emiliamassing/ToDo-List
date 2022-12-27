class ToDoItem {
  taskName: string;

  category: string;

  deadline: string;

  addedDate: number;

  isComplete: boolean;

  constructor(taskName: string, category: string, deadline: string, addedDate: number, isComplete: boolean) {
    this.taskName = taskName;
    this.category = category;
    this.deadline = deadline;
    this.addedDate = addedDate;
    this.isComplete = isComplete;
  }
}

export default ToDoItem;
