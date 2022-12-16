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

const incompleteTasks: HTMLElement = document.querySelector('#incompleteTasks') as HTMLElement;

// Funktion för att skriva ut en ny todo
function printTaskList(): void {
  incompleteTasks.innerHTML = '';
  let toDoListHtml = '';

  toDoList.forEach((task) => {
    toDoListHtml += `
    <li>
      <input type="checkbox" class="checkCompleted">
      <label>
        <input type="text" value="${task.taskName}" readonly>
      </label>
      <i></i>
      <i class="fa-solid fa-pen-to-square fa-lg" tabindex="0"></i>
      <i class="fa-solid fa-x fa-lg" tabindex="0"></i>
    </li> `;
  });

  incompleteTasks.innerHTML = toDoListHtml;

  const tasks = Array.from(document.querySelectorAll('li i.fa-x'));
  tasks.forEach((task) => {
    task.addEventListener('click', removeTask); // eslint-disable-line
  });
}

// Funktion för att ta bort todo
function removeTask(e: Event) {
  const target = e.target as HTMLElement;
  const index = toDoList.findIndex((task) => task.taskName === target.dataset.name);
  if (index > -1) {
    toDoList.splice(index, 1);
    printTaskList();
  }
}

printTaskList();

const newTaskName = <HTMLInputElement>document.querySelector('#writeItem');

// Funktion för att lägga till ny todo
function addNewTask():void {
  if (newTaskName.value.length === 0) {
    alert('You need to write something');
    return;
  }

  const index = toDoList.findIndex((task) => task.taskName === newTaskName.value);
  if (index === -1) {
    // TODO: Fyll på med rätt data för kategori, deadline, dateAdded
    // pusha in som en "instans av din ToDoItem-klass" istället
    toDoList?.push(new ToDoItem(newTaskName.value, 'household', 'deadline', 'dateAdded', false));
    printTaskList();
  } else {
    alert("You've already added this task");
  }
}

const addTaskBtn = document.querySelector('#addItemBtn');
addTaskBtn?.addEventListener('click', addNewTask);
// I denna utils-fil har vi lagrat funktioner som ofta används, t.ex. en "blanda array"-funktion
// import { shuffle } from './utils';

// I denna fil har vi lagrat vår "data", i detta exempel en ofullständig kortlek
// import exampleCardDeck from './exampleArray';
