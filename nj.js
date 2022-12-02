class Player {
  constructor(hand, pot) {
    this.hand = hand;
    this.pot = pot;
  }
}

//Deck of cards
//obj;
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
//assign hearts somewhere

let faceVal = Object.keys(deckValues);

for (let i = 0; i < faceVal.length; i++) {
  for (let j = 0; j < suits.length; j++) {
    deck.push(faceVal[i] + suits[j]);
  }
}

// class Dealer {
//   constructor(deck) {
//     this.deck = deck;
//   }
const random = (max) => {
  return Math.floor(Math.random() * (max - 1) + 1);
};
//   deal() {
//     this.deck.splice(random(deck.length), 1);
//   }
// }

const deal = () => {
  //assign random number - fisher yates shuffle (takes from the top) or math.random
  const cardArray = deck.splice(random(deck.length), 1);
  const card = cardArray[0].split(" ");

  console.log(card);
  if (typeof card[0] === "string") {
    let cardValue = deckValues[card[0]]; // hashing or hash mapping (looks abovefor the value)
    console.log(cardValue);
  }
  console.log(card[0]);
};
deal();
