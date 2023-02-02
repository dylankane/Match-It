const cards = document.querySelectorAll('.card');
cards.forEach(card => card.addEventListener('click', flipCard));

let flipped = 0;
let firstFlip;
let secondFlip;

function flipCard() {
  this.classList.add('flip');
  // flipped++;



  if(flipped === 0) {
    firstFlip = this;
    flipped++;

    } else {
      secondFlip = this;
      flipped = 0;

      if (firstFlip.dataset.image === secondFlip.dataset.image) {
       
        firstFlip.removeEventListener('click', flipCard);
        secondFlip.removeEventListener('click', flipCard);

        setTimeout (() =>{
        firstFlip.classList.add('matched');
        secondFlip.classList.add('matched');
        }, 700);

      } else {
       
        setTimeout(() => {
        firstFlip.classList.remove('flip');
        secondFlip.classList.remove('flip');
        }, 1000);
  
      }  
 
    } 
    

    
      console.log({flipped, firstFlip, secondFlip});
      
  }  
  




