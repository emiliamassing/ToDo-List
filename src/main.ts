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

// Kod för att skriva ut li-elementen - Be om hjälp med detta, ifall det är bättre att göra såhär?
// Ska även innehålla deadline + vald kategori
const toDoListHtml = `
  <li>
    <input type="checkbox" class="checkCompleted">
    <i class="fa-solid fa-pen-to-square fa-lg" tabindex="0"></i>
    <i class="fa-solid fa-x fa-lg" tabindex="0"></i>
  </li>
`;

// Funktion för att skriva ut en ny todo
function printTaskList(): void {
  incompleteTasks.innerHTML = '';

  for (let i = 0; i < toDoList.length; i++) {
    const taskName = toDoList[i].taskName;
    const taskNode = document.createElement('li');
    const taskTextNode = document.createTextNode(taskName);

    // const editIcon = document.createElement('button');
    // const editIconTextNode = document.createTextNode('edit');
    // editIcon.classList.add('i');
    const editIcon = document.createElement('i');
    editIcon.classList.add('fa-solid');
    editIcon.classList.add('fa-pen-to-square');
    editIcon.classList.add('fa-lg');

    editIcon.setAttribute('tabindex', '0'); // 0 gör så att browsern själv avgör i vilken ordning element ska tabbas igenom, bäst att låta det vara så utifrån a11y

    /* const removeIcon = document.createElement('button');
    const removeIconTextNode = document.createTextNode('Delete');
    removeIcon.setAttribute('data-name', taskName);
    removeIcon.appendChild(removeIconTextNode); */

    // Dubbelkolla att nedanstående text är okej innan du raderar de övre blockkomentarerna

    const removeIcon = document.createElement('i');
    removeIcon.classList.add('fa-solid');
    removeIcon.classList.add('fa-x');
    removeIcon.classList.add('fa-lg');
    removeIcon.setAttribute('data-name', taskName);

    taskNode.appendChild(taskTextNode);
    taskNode.appendChild(editIcon);
    taskNode.appendChild(removeIcon);
    incompleteTasks?.appendChild(taskNode);
  }

  const tasks = Array.from(document.querySelectorAll('li i.fa-x'));
  tasks.forEach((task) => {
    task.addEventListener('click', removeTask); // eslint-disable-line
  });
}

// Funktion för att ta bort todo
function removeTask(e: Event) {
  const target = e.target as HTMLElement;
  const index = toDoList.findIndex(task => task.taskName === target.dataset.name); // Då du nu har objekt i din array, så måste vi leta efter dessa på ett annat sätt
  // const index = toDoList.indexOf(target.dataset.name);
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

  const index = toDoList.findIndex(task => task.taskName === newTaskName.value); // Då du nu har objekt i din array, så måste vi leta efter dessa på ett annat sätt

  if (index === -1) {
    // TODO: Fyll på med rätt data för kategori, deadline, dateAdded
    toDoList?.push(new ToDoItem(newTaskName.value, 'household', 'deadline', 'dateAdded', false)); // pusha in som en "instans av din ToDoItem-klass" istället
    printTaskList();
  } else { // Räcker med en else bara, behövs ingen else if :)
    alert("You've already added this task");
  }
}

const addTaskBtn = document.querySelector('#addItemBtn');
addTaskBtn?.addEventListener('click', addNewTask);
// I denna utils-fil har vi lagrat funktioner som ofta används, t.ex. en "blanda array"-funktion
// import { shuffle } from './utils';

// I denna fil har vi lagrat vår "data", i detta exempel en ofullständig kortlek
// import exampleCardDeck from './exampleArray';
