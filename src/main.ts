import './style/general.scss';

function toggleDarkMode(){
  const body = document.body;
  body.classList.toggle('darkMode');
}

const darkModeBtn = document.querySelector('#darkModeBtn');
darkModeBtn?.addEventListener('click', toggleDarkMode);

let toDoList = ['Starta datorn', 'Öppna VS code', 'Börja koda'];
const incompleteTasks: HTMLElement = document.querySelector('#incompleteTasks') as HTMLElement;

printTaskList();

const addTaskBtn = document.querySelector('#addItemBtn');
addTaskBtn?.addEventListener('click', addNewTask);

const newTaskName = <HTMLInputElement>document.querySelector('#writeItem');

function addNewTask(){
  if(newTaskName.value.length === 0){
    alert('You need to write something');
    return;
  }

  if(toDoList.indexOf(newTaskName.value) === -1){
    toDoList?.push(newTaskName.value);
    printTaskList();
  } else if(toDoList.indexOf(newTaskName.value) > 1){
    alert("You've already added this task");
  }
}

function printTaskList(){
  incompleteTasks.innerHTML = '';
  for(let i = 0; i < toDoList.length; i++){
    const taskName = toDoList[i];
    const taskNode = document.createElement('li');
    const taskTextNode = document.createTextNode(taskName);
    taskNode.appendChild(taskTextNode);
  
    incompleteTasks?.appendChild(taskNode);
  }

  const tasks = Array.from(document.querySelectorAll('li'));
  tasks.forEach((task) => {
    task.addEventListener('click', removeTask); //Potentiell minnesläcka
  });
}

function removeTask(e: Event){
  const target = e.target as HTMLElement;
  const index = toDoList.indexOf(target.innerHTML);
  if(index > -1){
    toDoList.splice(index, 1);
    printTaskList();
  }
}

// I denna utils-fil har vi lagrat funktioner som ofta används, t.ex. en "blanda array"-funktion
//import { shuffle } from './utils';

// I denna fil har vi lagrat vår "data", i detta exempel en ofullständig kortlek
//import exampleCardDeck from './exampleArray';
