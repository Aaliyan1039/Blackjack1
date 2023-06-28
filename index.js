
let message = "" ;
let sum = 0;
let cards = [];
messageEl=document.getElementById("message-el");

sumEl = document.querySelector(".message-el1");
sumEl.textContent="Sum: " +sum;
cardsEl = document.querySelector(".message-el2");

function getRandomCard () { 
    let randomNumber = Math.floor(Math.random()*13) + 1 ;
    if (randomNumber == 1) {
        return 11 
    }
    else if (randomNumber > 10 ) {
        return 10 
    }
    else {
        return randomNumber
    }
    
}


let hasBlackJack = false ;
let isAlive = false ;

function startgame (){
    isAlive = true ;
    let firstCard = getRandomCard ();
    let secondCard = getRandomCard ();
    sum=firstCard+secondCard;
    cards.push(firstCard,secondCard);
    renderGame()
    
}
function renderGame(){
    sumEl.textContent = "Sum:" +sum ;
    cardsEl.textContent = "Cards: "
    for (let count = 0 ; count <cards.length;count++ ) {
        cardsEl.textContent = cardsEl.textContent + " " + cards[count];
    }
    if (sum < 21 ){
    
        message = "Do you want to draw a new card? ";
        }
    else if (sum == 21 ) {
        hasBlackJack = true;
        message = "YOU WIN BLACKJACK!! ";}
    else {
        message = "You're out of the game! ";
        isAlive = false ;} 
    messageEl.textContent = message;
    console.log(message);
    console.log(sumEl.textContent);
    }
function newCard () {
    if (isAlive==true && hasBlackJack==false) {
        message="Drawing a new card from the deck!";
        messageEl.textContent=message;
        let addCard = (Math.floor(Math.random() * 10) + 1)+1;
        console.log(addCard);
        sum+=addCard;
        cards.push(addCard); 
    }
    
    
    renderGame()
    
}

function Reset() { if (isAlive==false || hasBlackJack == true) {
        
        sum=0;
        cards=[];
        sumEl.textContent="Sum: " +sum;
        cardsEl.textContent = "Cards: "; 
        message= "Want to play a round? ";
        messageEl.textContent = message;
        
    }
}

