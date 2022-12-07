import './style/general.scss';

// All kod härifrån och ner är bara ett exempel för att komma igång

function toggleDarkMode(){
  const body = document.body;
  body.classList.toggle('darkMode');
}

const darkModeBtn = document.querySelector('#darkModeBtn');
darkModeBtn?.addEventListener('click', e =>{ // Bättre lösning till denna?
  toggleDarkMode();
});



// I denna utils-fil har vi lagrat funktioner som ofta används, t.ex. en "blanda array"-funktion
import { shuffle } from './utils';

// I denna fil har vi lagrat vår "data", i detta exempel en ofullständig kortlek
import exampleCardDeck from './exampleArray';
