
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");
let message = "";//to get the message
let isAlive = false; //to know that the game is started 
let hasBlackJack = false;// you won or not
let sum = 0;

let player = {
    name: "vidhan",
    chips: 500
}
playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard(){
    let randomNumber = Math.floor(Math.random()*13 + 1)//1 -> 13
    if(randomNumber>10){
        return 10;
    }
    else if(randomNumber === 1){
        return 11;
    }else {
        return randomNumber
    }
}
let cards = [];
function startGame(){
isAlive = true;
let firstCard = getRandomCard();
let secondCard = getRandomCard();
cards=[firstCard, secondCard];
//search for summation using reduce method
sum = firstCard+secondCard;
renderGame();
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for(let i=0; i<cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum

    if(sum<=20){
        message = "Do you want to draw a new card"
    }else if (sum === 21){
        message = "You have got a BlackJack!!!!"
        hasBlackJack=true
    }else{
        message= "You are out of the game"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {
    if(isAlive === true && hasBlackJack === false){
        let card = getRandomCard();
        sum+= card
        cards.push(card)
        renderGame();
    }
}
