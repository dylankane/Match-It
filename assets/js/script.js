const cards = document.querySelectorAll('.card');

shuffle();

let activeGame = false;
let moveCounter = document.getElementById('moves-counter');
let moves = 0;
let flipped = false;
let lockBoard = false;
let firstFlip;
let secondFlip;
let newGame = document.querySelectorAll('.new-game');
let totalTime = 5;
let counter = document.getElementById('counter-span');
let seconds = totalTime;
let interval = setInterval(clock, 1000);

cards.forEach(card => card.addEventListener('click', flipCard));
newGame.forEach(button => button.addEventListener('click', restart));

//Main flip functiom

function flipCard() {
  
activeGame = true;

  if (lockBoard) return;
  
  this.classList.add('flip');
  this.classList.add('disable');
  moves++;

  if (!flipped) {
    flipped = true;
    firstFlip = this;

  } else {
    lockBoard = true;
    flipped = false;
    secondFlip = this;
    

    if (firstFlip.dataset.image === secondFlip.dataset.image) {   
      setTimeout(() => {
        firstFlip.classList.add('matched');
        secondFlip.classList.add('matched');
        lockBoard = false;
      }, 700);

    } else {
     
      setTimeout(() => {
        firstFlip.classList.remove('flip','disable');
        secondFlip.classList.remove('flip','disable');
       
        lockBoard = false;
      }, 1500);
    }
  }
  moveCounter.innerHTML = `${moves}`;
}

//Restart function

function restart() {
  cards.forEach(card => {card.classList.remove('flip', 'matched','disable');});

  moves = 0;
  moveCounter.innerHTML = 0;
  counter.innerText = totalTime;
  seconds = totalTime; 
  shuffle();
}


//Shuffle function

function shuffle() {

  cards.forEach(card => {
    let randomize = Math.floor(Math.random() * 12);
    card.style.order = randomize;
  });}

// Timer countdown

function clock() {
activeGame
  seconds--;
  counter.innerHTML = `${seconds}`;

  if (seconds <= 0) {
    clearInterval(interval);
  }
}