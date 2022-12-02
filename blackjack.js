class Dealer {
  constructor(hand) {
    this.hand = hand;
  }
}
// class Player {
//   constructor(cash, bet) {
//     this.cash = cash;
//     this.bet = bet;
//     this.pcards = [];
//   }
// }
class Player {
  constructor(hand, pot) {
    this.hand = hand;
    this.pot = pot;
  }
}
const player = {
  cash: 100,
  bet: 25,
  cards: [],
};

//create an obj with key value pair - jack = 10, king = 10, etc.

//object.keys - create an array of the keys * 4 so have 4 of each cards

// then radomize an index when dealing to splice a card.
// math.random and take that number (index) from the array

// calculate the value = based on the cards. Look up to the obj to set the value
// hit give the player another card

// Give player cards
// function givePlayersCards() {
//   playerCard1 = Math.floor(Math.random() * 11) + 1;
//   player.cards.push(playerCard1);
//   playerCard2 = Math.floor(Math.random() * 11) + 1;
//   player.cards.push(playerCard2);
//   document.querySelector("body > div.playerCards").append(player.cards);
// }
// givePlayersCards();

// Hit button
const hitButton = document.querySelector("body > div > button.hit");

let deckValues = {
  J: 10,
  Q: 10,
  K: 10,
  A: 11 || 1, //this is tricky
};

let suits = [" hearts", " diamonds", " clubs", " spades"];
let deck = [];

for (let i = 2; i < 11; i++) {
  for (let j = 0; j < suits.length; j++) {
    deck.push(i + suits[j]);
  }
}

let faceVal = Object.keys(deckValues);

for (let i = 0; i < faceVal.length; i++) {
  for (let j = 0; j < suits.length; j++) {
    deck.push(faceVal[i] + suits[j]);
  }
}

function playerHits() {
  console.log(player.cards);
  const random = (max) => {
    return Math.floor(Math.random() * (max - 1) + 1);
  };
  const deal = () => {
    //assign random number - fisher yates shuffle (takes from the top) or math.random
    const cardArray = deck.splice(random(deck.length), 1);
    //const card = cardArray[0].split(" ");

    player.cards.push(cardArray[0]);
    let sumValue = 0;
    player.cards.forEach((cur) => {
      let curCard, num;
      if (typeof cur === "string") {
        curCard = cur.split(" ");
      }
      if (deckValues[curCard[0]]) {
        let cardValue = deckValues[curCard[0]];
        num = cardValue;
      } else {
        num = Number(curCard[0]);
      }

      sumValue += num;
    });
    document.querySelector("body > div").innerText = sumValue;
    if (sumValue > 21) {
      resetBoard();
      alert("bust City");
    }
  };
  deal();

  console.log(player.cards);
}
function resetBoard() {
  player.cards = [];
  sumValue = 0;
  document.querySelector("body > div").innerText = "";
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
