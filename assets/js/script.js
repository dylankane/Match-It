/* jshint esversion: 11 */

const cards = document.querySelectorAll('.card');

// Shuffle functioned called early on lading page
shuffle();  

//  multiple variables defined below
let matchCounter = 0;
let finalScore = document.getElementById('final-score');
let moveCounter = document.getElementById('moves-counter'); 
let moves = 0; 

let flipped = false;
let lockBoard = false;
let firstFlip;
let secondFlip;

let totalTime = 45;
let counter = document.getElementById('counter-span');
let seconds = totalTime;
let interval;

let newGame = document.querySelectorAll('.new-game');

let timeModal = document.getElementById('time-modal');
let winModal = document.getElementById('win-modal');


// Event listener for clicks on the game cards
cards.forEach(card => card.addEventListener('click', flipCard));

// Event listeners for clicks on the restart buttons
newGame.forEach(button => button.addEventListener('click', restart));

//Card shuffle function, 
function shuffle() {

  cards.forEach(card => {
    let randomize = Math.floor(Math.random() * 12);
    card.style.order = randomize;
  });
}

//Function to set the interval for the clock
function activeGame() {
  interval = setInterval(clock, 1000);
}

//Countdown timer function
function clock() {
  counter.innerHTML = `${seconds}`; 

// If seconds not not equal 0 decrement the seconds counter
  if (!seconds <= 0) {
    seconds--;

// If seconds do equal 0 stops clock counting and activates the times up modal  
  } else {
    clearInterval(interval);
    timeModal.style.display = 'block';

//function to allow a click outside of the modal to close the modal 
    window.onclick = function (event) {
      if (event.target == timeModal) {
        timeModal.style.display = "none";
      }
    };
  }
}




// Main game function called with a click on a card 
function flipCard() {

//If the move counter is equal to 0 start the clock interval 
  if (moves === 0) {
    activeGame();
  }

// if the board is locked exit function
  if (lockBoard) return;

//Clicked card has 'flip' & 'disable' class names added for flip animation, and disabling it from being clicked
  this.classList.add('flip');
  this.classList.add('disable');

// Increments move counter on each click
  moves++;
  moveCounter.innerHTML = `${moves}`;

//If its the first of two cards to be flipped, it is stored in a variable 'firstFlip'  
  if (!flipped) {
    flipped = true;
    firstFlip = this;

//If its the second card board is locked and card is stored in secondFlip variable  
  } else {
    lockBoard = true;
    flipped = false;
    secondFlip = this;

//If cards stored above match, a class name is added for styling and board is unlocked, after 0,7 seconds.
    if (firstFlip.dataset.image === secondFlip.dataset.image) {
      setTimeout(() => {
        firstFlip.classList.add('matched');
        secondFlip.classList.add('matched');
        lockBoard = false;
      }, 700);
//Increments the matched cards counter by one 
      matchCounter++;

//If match counter reaches 6 game is completed and win modal is activated after 0.7 seconds
      if (matchCounter === 6) {
        setTimeout(() => {
          winModal.style.display = 'block';
        }, 700);

//Clock interval is stopped and final score is uptated 
        clearInterval(interval);
        finalScore.innerHTML = `${moves}`;

//Function to allow a click outside of the modal to close the modal
        window.onclick = function (event) {
          if (event.target == winModal) {
            winModal.style.display = "none";
          }
        };
      }
//If cards dont match, they are flipped back, enabled to be clicked again, board unlcked, all after 1.5 seconds
    } else {
      setTimeout(() => {
        firstFlip.classList.remove('flip', 'disable');
        secondFlip.classList.remove('flip', 'disable');
        lockBoard = false;
      }, 1500);
    }
  }
}

//Restart game function, removing class names added to cards in last game
function restart() {
  cards.forEach(card => {
    card.classList.remove('flip', 'matched', 'disable');
  });

// move and match counters set to zero
  moves = 0;
  moveCounter.innerHTML = `${moves}`;
  matchCounter = 0;

// clock stopped, time set back to beginning, modals hidden, and cards re-shuffled
  clearInterval(interval);
  counter.innerText = totalTime;
  seconds = totalTime;
  timeModal.style.display = "none";
  winModal.style.display = "none";
  shuffle();
}