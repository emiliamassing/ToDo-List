type Categories = 'important' | 'work' | 'spareTime' | 'household'; // ta ev bort denna och byt till string

class ToDoItem {
  taskName: string;

  category: Categories;

  deadline: string;

  addedDate: string;

  isComplete: boolean;

  constructor(taskName: string, category: Categories, deadline: string, addedDate: string, isComplete: boolean) {
    this.taskName = taskName;
    this.category = category;
    this.deadline = deadline;
    this.addedDate = addedDate;
    this.isComplete = isComplete;
  }
}

export default ToDoItem;
