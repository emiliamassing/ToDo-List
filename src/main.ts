import './style/general.scss';
import ToDoItem from './toDoItem';

const toDoList: ToDoItem[] = [];

// Funktion för dark mode
function toggleDarkMode(): void {
  const bodyElement = document.body;
  bodyElement.classList.toggle('darkMode');
}

const darkModeBtn = document.querySelector('#darkModeBtn');
darkModeBtn?.addEventListener('click', toggleDarkMode);

const incompleteTasksUl: HTMLElement = document.querySelector('#incompleteTasks') as HTMLElement;
const completedTasksUl: HTMLElement = document.querySelector('#completedTasks') as HTMLElement;
const newTaskName = <HTMLInputElement>document.querySelector('#writeItem');
const newDeadline = <HTMLInputElement>document.querySelector('#date');

// Funktion för att se om deadline passerat
/* function checkDueDate(): void {
  const todaysDate = new Date();
  const deadline = new Date(newDeadline.value);
  const span = <HTMLElement>document.querySelector('.deadline');
  if (deadline < todaysDate) {
    span?.classList.add('overdue');
    console.log('rödmarkera');
  }
} */

// Funktion för att skriva ut en ny todo
function printTaskList(): void {
  incompleteTasksUl.innerHTML = '';
  completedTasksUl.innerHTML = '';
  let toDoListHtml = '';
  let toDoCompletedHtml = '';

  toDoList.forEach((task, index) => {
    if (task.isComplete) {
      toDoCompletedHtml += `
      <li>
        <label>
          <input type="text" value="${task.taskName}" id="editInput" class="editInput" readonly>
        </label>
        <span class="deadline">${task.deadline}</span>
        <i></i> <!--Till kategori-->
        <button class="removeIcon" aria-label="Remove">
        <i class="removeIcon fa-solid fa-x fa-lg" data-id="${index}"></i>
        </button>
      </li> `;
      return;
    }
    toDoListHtml += `
    <li>
        <input type="checkbox" id="toDoCheckbox" class="toDoCheckbox" data-id="${index}">
        <label>
          <input type="text" value="${task.taskName}" id="editInput" class="editInput" readonly>
        </label>
        <span class="deadline">${task.deadline}</span>
        <i></i> <!--Till kategori-->
        <button class="editIcon" aria-label="Edit">
        <i class="editIcon fa-solid fa-pen-to-square fa-lg"></i>
        </button>
        <button class="removeIcon" aria-label="Remove">
          <i class="removeIcon fa-solid fa-x fa-lg" data-id="${index}"></i>
        </button>
    </li> `;
  });

  incompleteTasksUl.innerHTML = toDoListHtml;
  completedTasksUl.innerHTML = toDoCompletedHtml;

  const todaysDate = new Date();
  const deadline = new Date(newDeadline.value);
  const span = <HTMLElement>document.querySelector('.deadline');

  if (deadline < todaysDate) {
    span?.classList.add('overdue');
    console.log('rödmarkera');
  }

  const tasks = Array.from(document.querySelectorAll('li i.removeIcon'));
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
  const completedTasks = toDoList.filter((tasks) => tasks.isComplete === true);
  console.log(completedTasks);
  printTaskList();
}

// Funktion för att ta bort todo
function removeTask(e: Event) {
  const target = e.target as HTMLElement;
  const index = Number(target.dataset.id);
  console.log(index);
  if (index !== undefined) {
    toDoList.splice(index, 1);
    printTaskList();
  }
}
printTaskList();

// Funktion för felmeddelanden
function setErrorFor(input:HTMLInputElement, message:string) {
  const formControl = <HTMLElement>document.querySelector('.formControl');
  const small = <HTMLElement>document.querySelector('small');
  const icon = <HTMLElement>document.querySelector('.errorIcon');

  icon?.classList.remove('toggleHidden');
  small?.classList.remove('toggleHidden');

  small.innerText = message;
  formControl?.classList.add('error');
}

// Funktion som tar bort felmeddelanden
function setSuccessFor(input:HTMLInputElement) {
  const formControl = <HTMLElement>document.querySelector('.formControl');
  const small = <HTMLElement>document.querySelector('small');
  const icon = <HTMLElement>document.querySelector('.errorIcon');

  icon.classList.add('toggleHidden');
  small.classList.add('toggleHidden');
  formControl.classList.remove('error');
}

// Funktion för att lägga till ny todo
// Fixa problemet med att det blir felmeddelanden på rätt input
function addNewTask(e: Event):void {
  e.preventDefault();

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
    const dateAdded = new Date();
    const deadline = new Date(newDeadline.value);
    const deadlineDate = deadline.toLocaleDateString();
    toDoList?.push(new ToDoItem(newTaskName.value, 'household', deadlineDate, dateAdded, false));
    // localStorage.setItem('todo', JSON.stringify(toDoList));
    printTaskList();
    setSuccessFor(newTaskName);
    setSuccessFor(newDeadline);
  } else {
    setErrorFor(newTaskName, "You've already added this task");
  }
}

const addTaskBtn = <HTMLButtonElement>document.querySelector('#addItemBtn');
addTaskBtn?.addEventListener('click', addNewTask);

const sortSelect = <HTMLInputElement>document.querySelector('#sort');

// Sortering
function selectSorting() {
  // eslint-disable-next-line default-case
  switch (sortSelect.value) {
    case 'deadline':
      toDoList.sort((a, b) => (new Date(a.deadline).getTime() - (new Date(b.deadline).getTime())));
      printTaskList();
      break;
    case 'alfabetic':
      toDoList.sort((a, b) => { // Fixa felmeddelande
        const textA = a.taskName.toLowerCase();
        const textB = b.taskName.toLowerCase();
        if (textA < textB) {
          return -1;
        }
        if (textA > textB) {
          return 0;
        }
      });
      printTaskList();
      break;
    case 'lastAdded':
      toDoList.sort((a, b) => b.addedDate - a.addedDate);
      printTaskList();
      break;
    case 'oldestDate':
      toDoList.sort((a, b) => a.addedDate - b.addedDate);
      printTaskList();
      break;
  }
}

sortSelect.addEventListener('input', selectSorting);

// I denna utils-fil har vi lagrat funktioner som ofta används, t.ex. en "blanda array"-funktion
// import { shuffle } from './utils';

// I denna fil har vi lagrat vår "data", i detta exempel en ofullständig kortlek
// import exampleCardDeck from './exampleArray'
