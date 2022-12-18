interface ICategories {

  important: string;
  work: string;
  spareTime: string;
  household: string;

}

class ToDoItem {
  taskName: string;

  category: ICategories;

  deadline: number;

  addedDate: number;

  isComplete: boolean;

  constructor(taskName: string, category: ICategories, deadline: number, addedDate: number, isComplete: boolean) {
    this.taskName = taskName;
    this.category = category;
    this.deadline = deadline;
    this.addedDate = addedDate;
    this.isComplete = isComplete;
  }
}

export default ToDoItem;
