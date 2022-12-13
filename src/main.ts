import './style/general.scss';
import ToDoItem from './toDoItem';

// Funktion för dark mode
function toggleDarkMode() {
  const bodyElement = document.body;
  bodyElement.classList.toggle('darkMode');
}

const darkModeBtn = document.querySelector('#darkModeBtn');
darkModeBtn?.addEventListener('click', toggleDarkMode);

const toDoList = ['Starta datorn', 'Öppna VS code', 'Börja koda'];
const incompleteTasks: HTMLElement = document.querySelector('#incompleteTasks') as HTMLElement;

// Funktion för att skriva ut en ny todo
function printTaskList() {
  incompleteTasks.innerHTML = '';
  for (let i = 0; i < toDoList.length; i++) {
    const taskName = toDoList[i];
    const taskNode = document.createElement('li');
    const taskTextNode = document.createTextNode(taskName);
    taskNode.appendChild(taskTextNode);

    incompleteTasks?.appendChild(taskNode);
  }

  const tasks = Array.from(document.querySelectorAll('li'));
  tasks.forEach((task) => {
    task.addEventListener('click', removeTask); // Potentiell minnesläcka
  });
}

// Funktion för att ta bort todo
function removeTask(e: Event) {
  const target = e.target as HTMLElement;
  const index = toDoList.indexOf(target.innerHTML);
  if (index > -1) {
    toDoList.splice(index, 1);
    printTaskList();
  }
}

printTaskList();

const newTaskName = <HTMLInputElement>document.querySelector('#writeItem');

// Funktion för att lägga till ny todo
function addNewTask() {
  if (newTaskName.value.length === 0) {
    alert('You need to write something');
    return;
  }

  if (toDoList.indexOf(newTaskName.value) === -1) {
    toDoList?.push(newTaskName.value);
    printTaskList();
  } else if (toDoList.indexOf(newTaskName.value) > 1) {
    alert("You've already added this task");
  }
}

const addTaskBtn = document.querySelector('#addItemBtn');
addTaskBtn?.addEventListener('click', addNewTask);
// I denna utils-fil har vi lagrat funktioner som ofta används, t.ex. en "blanda array"-funktion
// import { shuffle } from './utils';

// I denna fil har vi lagrat vår "data", i detta exempel en ofullständig kortlek
// import exampleCardDeck from './exampleArray';
