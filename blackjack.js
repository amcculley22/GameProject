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
var firstCard = document.querySelector("body > div.firstCard");
var secondCard = document.querySelector("body > div.secondCard");

// Give player cards
function givePlayerCards() {
  var playerCard1 = Math.floor(Math.random() * 12);
  firstCard.innerText = playerCard1;

  var playerCard2 = Math.floor(Math.random() * 12);
  secondCard.innerText = playerCard2;
}
givePlayerCards();

// Hit button
const hitButton = document.querySelector("body > div > button.hit");

// hit function

// Hit button event listener
hitButton.addEventListener("click", () => {
  function playerHit() {
    var newPlayerCard = Math.floor(Math.random() * 12);
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
