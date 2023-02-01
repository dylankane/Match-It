const cards = document.querySelectorAll('.card');

let flipped = false;
let firstFlip;
let secondFlip;

function flipCard() {
  this.classList.add('flip');
  // flipped++;



  if(flipped === false) {
    firstFlip = this.getAttribute("data-image");
    flipped = true;
    } else {
      secondFlip = this.getAttribute("data-image");

      if (firstFlip === secondFlip) {
        let matched = document.querySelectorAll('.card.flip');
  
        matched[0].classList.add('matched');
        matched[1].classList.add('matched');
          
      }   

    } 
    // else {
      // flipped = 1
    // }

    
      console.log({flipped, firstFlip, secondFlip});
      
  }  
  


cards.forEach(card => card.addEventListener('click', flipCard));

