const cards = document.querySelectorAll('.card');

shuffle();


let moveCounter = document.getElementById('moves-counter');
let moves = 0;
let flipped = false;
let lockBoard = false;
let firstFlip;
let secondFlip;
let newGame = document.querySelectorAll('.new-game');
let totalTime = 30;
let counter = document.getElementById('counter-span');
let seconds = totalTime;
let interval; 

cards.forEach(card => card.addEventListener('click', flipCard));
newGame.forEach(button => button.addEventListener('click', restart));

//Shuffle function
function shuffle() {

  cards.forEach(card => {
    let randomize = Math.floor(Math.random() * 12);
    card.style.order = randomize;
  });}

// Timer countdown
function activeGame (){
  interval = setInterval(clock, 1000);
}

function clock() {
  counter.innerHTML = `${seconds}`;

  if (!seconds <= 0) {
    seconds--;

  } else {  
    clearInterval(interval);
  }
}

//Main flip functiom

function flipCard() {

 if (moves === 0) {

  activeGame()
 }


  if (lockBoard) return;
  
  this.classList.add('flip');
  this.classList.add('disable');
  moves++;
  moveCounter.innerHTML = `${moves}`;

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
}

//Restart function

function restart() {
  cards.forEach(card => {card.classList.remove('flip', 'matched','disable');});

  moves = 0;
  moveCounter.innerHTML = `${moves}`;
  // moveCounter.innerHTML = 0;
  counter.innerText = totalTime;
  seconds = totalTime; 
  shuffle();
}





