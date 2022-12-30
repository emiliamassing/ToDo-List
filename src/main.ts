import './style/general.scss';
import ToDoItem from './toDoItem';

const toDoList: ToDoItem[] = [];

const darkModeBtn = <HTMLButtonElement>document.querySelector('#darkModeBtn');

const incompleteTasksUl: HTMLElement = document.querySelector('#incompleteTasks') as HTMLElement;
const completedTasksUl: HTMLElement = document.querySelector('#completedTasks') as HTMLElement;

const newTaskName = <HTMLInputElement>document.querySelector('#writeItem');
const newDeadline = <HTMLInputElement>document.querySelector('#date');

const addTaskBtn = <HTMLButtonElement>document.querySelector('#addItemBtn');
const sortSelect = <HTMLInputElement>document.querySelector('#sort');

// Funktion för dark mode
function toggleDarkMode(): void {
  const bodyElement: HTMLElement = document.body;
  bodyElement.classList.toggle('darkMode');
}

darkModeBtn?.addEventListener('click', toggleDarkMode);

// Funktion för att skriva ut en ny todo
function printTaskList(): void {
  incompleteTasksUl.innerHTML = '';
  completedTasksUl.innerHTML = '';
  let toDoListHtml = '';
  let toDoCompletedHtml = '';
  const todaysDate = new Date();

  toDoList.forEach((task, index) => {
    const deadline = new Date(task.deadline);
    let deadlineCssClass = '';

    if (deadline < todaysDate) {
      deadlineCssClass = 'overdue';
    }

    if (task.isComplete) {
      toDoCompletedHtml += `
      <li>
        <span>${task.taskName}</span>
        <span class="deadline ${deadlineCssClass}">${task.deadline}</span>
        <button class="removeIcon" aria-label="Remove">
        <i class="removeIcon fa-solid fa-x fa-lg" data-id="${index}"></i>
        </button>
      </li> `;
      return;
    }
    toDoListHtml += `
    <li>
        <input type="checkbox" id="toDoCheckbox" class="toDoCheckbox" data-id="${index}">
        <span>${task.taskName}</span>
        <span class="chosenCategory"></span>
        <span class="deadline ${deadlineCssClass}">${task.deadline}</span>
        <button class="removeIcon" aria-label="Remove">
          <i class="removeIcon fa-solid fa-x fa-lg" data-id="${index}"></i>
        </button>
    </li> `;
  });

  incompleteTasksUl.innerHTML = toDoListHtml;
  completedTasksUl.innerHTML = toDoCompletedHtml;

  const tasks = Array.from(document.querySelectorAll('li button.removeIcon'));
  tasks.forEach((task) => {
    task.addEventListener('click', removeTask); // eslint-disable-line
  });

  const checkbox = Array.from(document.querySelectorAll('.toDoCheckbox'));
  checkbox.forEach((task) => {
    task.addEventListener('change', completeTask); // eslint-disable-line
  });
}

// Funktion för att markera todo som klar
function completeTask(e: Event) {
  const checkboxTarget = e.target as HTMLInputElement;
  const checkBoxIndex = Number(checkboxTarget.dataset.id);

  const todo = toDoList[checkBoxIndex];
  todo.isComplete = true;
  checkboxTarget?.parentElement?.classList.toggle('completed');
  toDoList.filter((tasks) => tasks.isComplete === true);
  printTaskList();
}

// Funktion för att ta bort todo
function removeTask(e: Event) {
  const target = e.target as HTMLElement;
  const index = Number(target.dataset.id);
  if (index !== undefined) {
    toDoList.splice(index, 1);
    printTaskList();
  }
}

printTaskList();

// Funktion för felmeddelanden
function setErrorFor(input:HTMLInputElement, message:string) {
  const formControl = <HTMLElement>input.parentElement;
  const small = <HTMLElement>formControl?.querySelector('small');
  const icon = <HTMLElement>formControl?.querySelector('.errorIcon');

  icon?.classList.remove('toggleHidden');
  small?.classList.remove('toggleHidden');

  small.innerText = message;
  formControl.className = 'formControl error';
}

// Funktion som tar bort felmeddelanden
function setSuccessFor(input:HTMLInputElement) {
  const formControl = <HTMLElement>input.parentElement;
  const small = <HTMLElement>formControl?.querySelector('small');

  small.classList.add('toggleHidden');
  formControl.className = 'formControl';
}

// Funktion för att lägga till ny todo
function addNewTask(e: Event):void {
  e.preventDefault();

  const dateAdded: Date = new Date();
  const deadline: Date = new Date(newDeadline.value);
  const deadlineDate = deadline.toLocaleDateString();
  const newTodo = new ToDoItem(newTaskName.value, deadlineDate, dateAdded, false);

  if (newTaskName.value.length === 0) {
    setErrorFor(newTaskName, 'You need to write something');
    return;
  }

  if (newDeadline.value.length === 0) {
    setErrorFor(newDeadline, 'You need to pick a deadline');
    return;
  }

  const index = toDoList.findIndex((task) => task.taskName === newTaskName.value);
  if (index === -1) {
    toDoList?.push(newTodo);
    printTaskList();
    setSuccessFor(newTaskName);
    setSuccessFor(newDeadline);
  } else {
    setErrorFor(newTaskName, "You've already added this task");
  }
}

addTaskBtn?.addEventListener('click', addNewTask);

// Funktion för sortering
function selectSorting() {
  // eslint-disable-next-line default-case
  switch (sortSelect.value) {
    case 'deadline':
      toDoList.sort((a, b) => (new Date(a.deadline).getTime() - (new Date(b.deadline).getTime())));
      printTaskList();
      break;
    case 'alfabetic':
      toDoList.sort((a, b) => {
        const textA = a.taskName.toLowerCase();
        const textB = b.taskName.toLowerCase();
        if (textA < textB) {
          return -1;
        }
        if (textA > textB) {
          return 0;
        }
        return 0;
      });
      printTaskList();
      break;
    case 'lastAdded':
      toDoList.sort((a, b) => b.addedDate.getTime() - a.addedDate.getTime());
      printTaskList();
      break;
    case 'oldestDate':
      toDoList.sort((a, b) => a.addedDate.getTime() - b.addedDate.getTime());
      printTaskList();
      break;
  }
}

sortSelect.addEventListener('input', selectSorting);
