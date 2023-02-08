const cards = document.querySelectorAll('.card');

shuffle();

let matchCounter = 0 /*set the match counter to 0*/

let finalScore = document.getElementById('final-score') /* get the html element to display final score */
let moveCounter = document.getElementById('moves-counter'); /* get the html element to display  current moves */
let moves = 0; /* set moves counter to 0 */

let flipped = false;
let lockBoard = false;
let firstFlip;
let secondFlip;

let totalTime = 45;
let counter = document.getElementById('counter-span');
let seconds = totalTime;
let interval;

let newGame = document.querySelectorAll('.new-game');

let timeModal = document.getElementById('time-modal')
let winModal = document.getElementById('win-modal')

cards.forEach(card => card.addEventListener('click', flipCard));

newGame.forEach(button => button.addEventListener('click', restart));

//Shuffle function
function shuffle() {

  cards.forEach(card => {
    let randomize = Math.floor(Math.random() * 12);
    card.style.order = randomize;
  });
}

// Timer countdown
function activeGame() {
  interval = setInterval(clock, 1000);
}

function clock() {
  counter.innerHTML = `${seconds}`;

  if (!seconds <= 0) {
    seconds--;

  } else {
    clearInterval(interval);
    timeModal.style.display = 'block';
    window.onclick = function (event) {
      if (event.target == timeModal) {
        timeModal.style.display = "none";
      }
    }
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
      matchCounter++

      if (matchCounter === 6) {
        setTimeout(() => {
          winModal.style.display = 'block';
        }, 700);

        clearInterval(interval);
        finalScore.innerHTML = `${moves}`;

        window.onclick = function (event) {
          if (event.target == winModal) {
            winModal.style.display = "none";
          }
        }
      }

    } else {

      setTimeout(() => {
        firstFlip.classList.remove('flip', 'disable');
        secondFlip.classList.remove('flip', 'disable');

        lockBoard = false;
      }, 1500);
    }
  }
}



//Restart function

function restart() {
  cards.forEach(card => {
    card.classList.remove('flip', 'matched', 'disable');
  });

  moves = 0;
  moveCounter.innerHTML = `${moves}`;
  matchCounter = 0;

  clearInterval(interval);
  counter.innerText = totalTime;
  seconds = totalTime;
  timeModal.style.display = "none";
  winModal.style.display = "none";
  shuffle();
}