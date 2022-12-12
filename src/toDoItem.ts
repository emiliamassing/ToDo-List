type Categories = 'important' | 'work' | 'spareTime' | 'household';

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

let incompleteTasks: ToDoItem[] = [];

export default ToDoItem;

// enbart tillfälligt angivna som tomma värden
