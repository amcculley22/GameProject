class Dealer {
  constructor(hit, stand, [cards]) {
    this.hit = hit;
    this.stand = stand;
    this.cards = cards;
  }
}
class Player {
  constructor(hit, stand, [cards]) {
    this.hit = hit;
    this.stand = stand;
    this.cards = cards;
  }
}
var firstCard = document.querySelector("body > div > a.firstCard");
var secondCard = document.querySelector("body > div > a.secondCard");
var dealerfirst = document.querySelector("body > div > a.dealerCard1");
var dealersecond = document.querySelector("body > div > a.dealerCard2");

// Give player cards
function givePlayersCards() {
  var playerCard1 = Math.floor(Math.random() * 12);
  firstCard.innerText = playerCard1;

  var playerCard2 = Math.floor(Math.random() * 12);
  secondCard.innerText = playerCard2;

  var dealerCard1 = Math.floor(Math.random() * 12);
  dealerfirst.innerText = dealerCard1;

  var dealerCard2 = Math.floor(Math.random() * 12);
  dealersecond.innerText = dealerCard2;
}
givePlayersCards();

// Hit button
const hitButton = document.querySelector("body > div > button.hit");

// hit function

// Hit button event listener
hitButton.addEventListener("click", () => {
  function playerHit() {
    var newPlayerCard = Math.floor(Math.random() * 12);
    //create new element to add the card
    const anotherCard = document.querySelector("body > div > a");

    anotherCard.innerText = newPlayerCard;

    console.log(newPlayerCard);
  }
  playerHit();
});

// Stand button
const standButton = document.querySelector("body > div > button.stand");

// Stand button event listener
standButton.addEventListener("click", () => {
  console.log("clicked");
});
