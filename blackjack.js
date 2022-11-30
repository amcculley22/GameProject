class Dealer {
  constructor(cash, bet, [cards]) {
    this.cash = cash;
    this.bet = bet;
    this.cards = cards;
  }
}
class Player {
  constructor(cash, bet, [cards]) {
    this.cash = cash;
    this.bet = bet;
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

function playerHits() {
  const newCard = document.createElement("a");
  newCard.innerText = Math.floor(Math.random() * 12);
  console.log(newCard);
}

// Hit button event listener
hitButton.addEventListener("click", () => {
  playerHits();
});

// Stand button
const standButton = document.querySelector("body > div > button.stand");

// Stand button event listener
standButton.addEventListener("click", () => {
  // run the dealer hit process if less than 17 hit. if 17 or more stand

  console.log("clicked");
});

// is dealer or player winner

// give / lose money
// restart cards
