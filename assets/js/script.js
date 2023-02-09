const cards = document.querySelectorAll('.card');

// Shuffle functioned called early on lading page

shuffle();  

//  multiple variables defined below

let matchCounter = 0 

let finalScore = document.getElementById('final-score') 
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

let timeModal = document.getElementById('time-modal')
let winModal = document.getElementById('win-modal')


// Event listeners
cards.forEach(card => card.addEventListener('click', flipCard));
newGame.forEach(button => button.addEventListener('click', restart));

//Shuffle function
function shuffle() {

  cards.forEach(card => {
    let randomize = Math.floor(Math.random() * 12);
    card.style.order = randomize;
  });
}

// Timer countdown function
//called in the flipcard function
//activating time up modal when clock runs to zero

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

//Main flip function, activating the timer once moves are at zero,
// storing each flipped card in a variable to be compaired
// locking the board while flipping and disabling pointer events on flipped cards
// if match found appling a class name to be targeted by css
// if not, disabling the fliped styling and unflipping cards
// if all pairs found activating win modal

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
// setting moves back to zero
// clock back to beginning
// re-shuffling cards

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