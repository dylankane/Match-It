

const cards = document.querySelectorAll('.card');

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
   
      if(!flipped) {
        firstFlip = this;
        flipped = true;

      } else {
        secondFlip = this;
        flipped = false;
       

        if (firstFlip.dataset.image === secondFlip.dataset.image) {
    
          firstFlip.removeEventListener('click', flipCard);
          secondFlip.removeEventListener('click', flipCard);

          setTimeout (() =>{
          firstFlip.classList.add('matched');
          secondFlip.classList.add('matched');
          }, 700);

        } else {
          lockBoard = true;

            setTimeout(() => {
              firstFlip.classList.remove('flip');
              secondFlip.classList.remove('flip');
              //cards.removeEventListener('click', flipCard);
              // document.getElementsByClassName('.cards').style.pointerEvents = "none";
              lockBoard = false;
          }, 1500);

        
  
        }  
      }  
      //console.log({flipped, firstFlip, secondFlip});
      let moveCounter = document.getElementById('moves-counter')
      moveCounter.innerHTML = `${moves}`;
}  


function restart(){
  
  firstFlip.classList.remove('flip');
  secondFlip.classList.remove('flip');
  firstFlip.classList.remove('matched');
  secondFlip.classList.remove('matched');
  firstFlip.addEventListener('click', flipCard);
  secondFlip.addEventListener('click', flipCard);
  moves.innerHTML = 0

  shuffle();
  clock();

}


function shuffle() {
  
  cards.forEach(panel => {
      let randomize = Math.floor(Math.random() * 12);
      panel.style.order = randomize;
     
    }
  );
 
}

// Timer countdown

let counter = document.getElementById('counter-span');
let seconds = 5;
let interval = setInterval(clock, 1000);   

function clock() {

  seconds--;
  counter.innerHTML =`${seconds}`

  if (seconds <= 0) {
    clearInterval(interval);
    //alert("Time Is Up!!  Press 'restart'; to try again");
    
  }
}
