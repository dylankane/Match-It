const cards = document.querySelectorAll('.card');

let flipped = 0;
// let lockBoard = false;
let firstFlip;
let secondFlip;



function flipCard() {
 
  // if (lockBoard) return;

// flip cards on click
    this.classList.add('flip');
//store first click
      if(flipped === 0) {
        firstFlip = this;
        flipped++;
//Store scond click
      } else {
        secondFlip = this;
        flipped = 0;
       
// checking for match
        if (firstFlip.dataset.image === secondFlip.dataset.image) {
//If a match      
          firstFlip.removeEventListener('click', flipCard);
          secondFlip.removeEventListener('click', flipCard);

          setTimeout (() =>{
          firstFlip.classList.add('matched');
          secondFlip.classList.add('matched');
          }, 700);
//If not a match
        } else {
            // lockBoard = true;

            setTimeout(() => {
              firstFlip.classList.remove('flip');
              secondFlip.classList.remove('flip');
              document.getElementsByClassName('.cards').style.pointerEvents = "none";
              // lockBoard = false;
          }, 1500);

        
  
        }  
      }  
      console.log({flipped, firstFlip, secondFlip});
}  

function shuffle () {
  for (let i = 0; i < cards.length; i++ ) {
   let random = Math.floor(Math.random() *12);
   cards.style.order = random;
  }
}

  cards.forEach(card => card.addEventListener('click', flipCard));

  




