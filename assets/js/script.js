const cards = document.querySelectorAll('.card');

let flipped = 0;
let firstFlip;
let secondFlip;

function flipCard() {
  this.classList.add('flip');
  // flipped++;



  if(flipped === 0) {
    firstFlip = this.dataset.image;
    flipped++;

    } else {
      secondFlip = this.dataset.image;
      flipped = 0;

      if (firstFlip === secondFlip) {
       
        // firstFlip.removeEventListener('click', flipCard);
        // secondFlip.removeEventListener('click', flipCard);

       
          
      } else {
       
        setTimeout(() => {
        firstFlip.classList.remove('flip');
        secondFlip.classList.remove('flip');
        }, 1500);
  
      }  
 
    } 
    

    
      console.log({flipped, firstFlip, secondFlip});
      
  }  
  


cards.forEach(card => card.addEventListener('click', flipCard));

