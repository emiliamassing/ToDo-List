import './style/general.scss';

function toggleDarkMode(){
  const body = document.body;
  body.classList.toggle('darkMode');
}

const darkModeBtn = document.querySelector('#darkModeBtn');
darkModeBtn?.addEventListener('click', e =>{ // Bättre lösning till denna?
  toggleDarkMode();
});

let toDo = ['Starta datorn', 'Öppna VS code', 'Börja koda'];
const incompleteTasks = document.querySelector('#incompleteTasks');

const task1Name = toDo[0];
const task1Node = document.createElement('li');
const task1TextNode = document.createTextNode(task1Name);


// I denna utils-fil har vi lagrat funktioner som ofta används, t.ex. en "blanda array"-funktion
//import { shuffle } from './utils';

// I denna fil har vi lagrat vår "data", i detta exempel en ofullständig kortlek
//import exampleCardDeck from './exampleArray';
