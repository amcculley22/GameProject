class Dealer {
  constructor(cards, money) {
    this.cards = [cards];
    this.money = money;
  }
  get dealerShouldStand() {
    let total = 0;
    for (let card of this.cards) {
      total += card.value;
    }
    if (total >= 17) {
      return true;
    }
    return false;
  }
}
//make all cards instant of the class
class Card {
  constructor(value, suit) {
    this.value = value;
    this.suit = suit;
  }
}

class Player {
  constructor(cards, money, bet) {
    this.cards = [cards];
    this.money = money;
    this.bet = bet;
  }
}
const playerCard = new Card();
const dealerCard = new Card();
const player = new Player(playerCard, 100, 25);
const dealer = new Dealer(dealerCard, 100);
// does that work?

// Hit button
const startButton = document.querySelector("body > div > button.start");
const hitButton = document.querySelector("body > div > button.hit");
const standButton = document.querySelector("body > div > button.stand");
const newDealButton = document.querySelector("body > div > button.new");
//build deck -
let deckValues = {
  J: 10,
  Q: 10,
  K: 10,
  A: 11 || 1, //this is tricky
};

let suits = [" H", " D", " C", " S"];
let deck = [];

for (let i = 2; i < 11; i++) {
  for (let j = 0; j < suits.length; j++) {
    deck.push(new Card(i, suits[j]));
  }
}

let faceVal = Object.keys(deckValues);

for (let i = 0; i < faceVal.length; i++) {
  for (let j = 0; j < suits.length; j++) {
    deck.push(new Card(faceVal[i], suits[j]));
  }
}

console.log(deck);

console.log(deckValues);

// how tf do i get the card into the class?
// this is just replacing, what if I want to add

// player.card.push(deck[0]);
// player.card.push(deck[10]);
// console.log(player.card);
// console.log(player.card[1].value);
console.log(player.cards);

//map like a foreach
// this.player.card.map(vaule, index) => {

// }
//functions

function pStartGame() {
  startButton.style.display = "none";
  newDealButton.style.display = "none";
  hitButton.style.display = "inline";
  standButton.style.display = "inline";
  const random = (max) => {
    return Math.floor(Math.random() * (max - 1) + 1);
  };
  for (i = 0; i < 2; i++) {
    const deal = () => {
      //assign random number - fisher yates shuffle (takes from the top) or math.random
      const pCardArray = deck.splice(random(deck.length), 1)[0];
      const p2CardArray = deck.splice(random(deck.length), 1)[0];
      const dCardArray = deck.splice(random(deck.length), 1)[0];
      const d2CardArray = deck.splice(random(deck.length), 1)[0];
      player.cards.push(pCardArray);
      player.cards.push(p2CardArray);
      dealer.cards.push(dCardArray);
      dealer.cards.push(d2CardArray);
      // Card.forEach((cur) => {
      //   let curCard, num;
      //   if (deckValues[curCard[0]]) {
      //     player.card.value = deckValues[curCard[0]];
      //     num = cardValue;
      //   } else {
      //     num = Number(curCard[0]);
      //   }
      //   player.card += num;
      // });
      // document.querySelector("body > div > div.player1").innerText = sumValue;
      // if (sumValue === 21) {
      //   alert("BlackJack");
      // }
    };
    deal();
  }
}

function dStartGame() {
  const random = (max) => {
    return Math.floor(Math.random() * (max - 1) + 1);
  };
  for (i = 0; i < 2; i++) {
    const deal = () => {
      //assign random number - fisher yates shuffle (takes from the top) or math.random
      const cardArray = deck.splice(random(deck.length), 1);
      dealer.cards.push(cardArray[0]);
      let sumValue = 0;
      dealer.cards.forEach((cur) => {
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
      document.querySelector("body > div > div.dealer").innerText = sumValue;
      if (sumValue === 21) {
        alert("loser");
        resetBoard();
      }
    };
    deal();
  }
}

function playerHits() {
  const random = (max) => {
    return Math.floor(Math.random() * (max - 1) + 1);
  };
  const deal = () => {
    //assign random number - fisher yates shuffle (takes from the top) or math.random
    const cardArray = deck.splice(random(deck.length), 1);
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
    document.querySelector("body > div > div.player1").innerText = sumValue;
    if (sumValue > 21) {
      alert("Bust");
      resetBoard();
    }
  };
  deal();
  console.log(player.cards);
}
// value into class
function standBut() {
  const random = (max) => {
    return Math.floor(Math.random() * (max - 1) + 1);
  };
  console.log(dealer.cards.sumValue);
  const deal = () => {
    const cardArray = deck.splice(random(deck.length), 1);
    dealer.cards.push(cardArray[0]);
    let sumValue = 0;
    dealer.cards.forEach((cur) => {
      let curCard, num;
      if (typeof cur === "string") {
        curCard = cur.split(" ");
      }
      console.log(sumValue);
      if (deckValues[curCard[0]]) {
        let cardValue = deckValues[curCard[0]];
        num = cardValue;
      } else {
        num = Number(curCard[0]);
      }
      console.log(sumValue);
      if (sumValue < 17) {
        // //function stand() {
        //     for (; i < 17)
        //     sumValue += num;
        // }
      } else {
        // quesry the sums and chose bigger number
      }
    });
    document.querySelector("body > div > div.dealer").innerText = sumValue;
    console.log(sumValue);
  };
  deal();
}

function resetBoard() {
  player.cards = [];
  dealer.cards = [];
  document.querySelector("body > div > div.dealer").innerText = "";
  document.querySelector("body > div > div.player1").innerText = "";
  sumValue = 0;
  newDealButton.style.display = "inline";
  startButton.style.display = "none";
  hitButton.style.display = "none";
  standButton.style.display = "none";
}

// Hit button event listener
hitButton.addEventListener("click", () => {
  playerHits();
  document.querySelector("body > div > div.player1").innerText = sumValue;
});

startButton.addEventListener("click", () => {
  pStartGame();
  dStartGame();
  console.log(dealer.cards);
  console.log(player.cards);
  document.querySelector("body > div > div.player1").innerText = sumValue;
});

// Stand button

// Stand button event listener
standButton.addEventListener("click", () => {
  standBut();
  console.log("DealerCards: " + dealer.cards);
});

newDealButton.addEventListener("click", () => {
  pStartGame();
  document.querySelector("body > div > div.player1").innerText = sumValue;
});

// is dealer or player winner
// give / lose money
// restart cards

function stand() {
  // if dealer is less than 17 get card other wise see which is larger
  if (dealer.cards.length > 4) {
    const dcard1 = dealer.cards[1].value;
    const dcard2 = dealer.cards[2].value;
    const dcard3 = dealer.cards[3].value;
    const dcard4 = dealer.cards[4].value;
    const dsum = dcard1 + dcard2 + dcard3 + dcard4;
  } else if (dealer.cards.length > 3) {
    const dcard1 = dealer.cards[1].value;
    const dcard2 = dealer.cards[2].value;
    const dcard3 = dealer.cards[3].value;
    const dsum = dcard1 + dcard2 + dcard3;
  } else {
    const dcard1 = dealer.cards[1].value;
    const dcard2 = dealer.cards[2].value;
    const dsum = dcard1 + dcard2;
    if (dsum < 17) {
      const random = (max) => {
        return Math.floor(Math.random() * (max - 1) + 1);
      };
      const hit = () => {
        //assign random number - fisher yates shuffle (takes from the top) or math.random
        const dhit = deck.splice(random(deck.length), 1)[0];
        dealer.cards.push(dhit);
      };
      hit();
    }
  }
}
