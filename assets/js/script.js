const cards = document.querySelectorAll('.card');
let moveCounter = document.getElementById('moves-counter');
shuffle();


let moves = 0
let flipped = false;
let lockBoard = false;
let firstFlip;
let secondFlip;
let newGame = document.querySelectorAll('.new-game');

cards.forEach(card => card.addEventListener('click', flipCard));
newGame.forEach(button => button.addEventListener('click', restart));

function flipCard() {

  if (lockBoard) return;

  this.classList.add('flip');

  moves++;
  this.classList.add('disable');

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
  //console.log({flipped, firstFlip, secondFlip});

  moveCounter.innerHTML = `${moves}`;
}


function restart() {
  cards.forEach(card => {
    card.classList.remove('flip', 'matched','disable');
  
  });
  moves = 0;
  moveCounter.innerHTML = 0;

  shuffle();
  clock();

}


function shuffle() {

  cards.forEach(panel => {
    let randomize = Math.floor(Math.random() * 12);
    panel.style.order = randomize;

  });

}

// Timer countdown

let counter = document.getElementById('counter-span');
let seconds = 5;
let interval = setInterval(clock, 1000);

function clock() {

  seconds--;
  counter.innerHTML = `${seconds}`

  if (seconds <= 0) {
    clearInterval(interval);
    //alert("Time Is Up!!  Press 'restart'; to try again");

  }
}