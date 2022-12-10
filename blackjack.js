class Dealer {
  constructor(cards, money) {
    this.cards = [cards];
    this.money = money;
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

let suits = ["H", "D", "C", "S"];
let deck = [];

const faceVal = Object.values(deckValues);

for (let i = 2; i < 11; i++) {
  for (let j = 0; j < suits.length; j++) {
    deck.push(new Card(i, suits[j]));
  }
}
console.log(faceVal);

for (let i = 0; i < faceVal.length; i++) {
  for (let j = 0; j < suits.length; j++) {
    deck.push(new Card(faceVal[i], suits[j]));
  }
}

console.log(deck);

console.log(deckValues);

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
      const pCardArray = deck.splice(random(deck.length), 1)[0];
      const dCardArray = deck.splice(random(deck.length), 1)[0];
      player.cards.push(pCardArray);
      dealer.cards.push(dCardArray);
    };
    deal();
  }
}

function resetBoard() {
  player.cards = [];
  dealer.cards = [];
  document.querySelector("body > div > div.dealer").innerText = "";
  document.querySelector("body > div > div.player1").innerText = "";
  newDealButton.style.display = "inline";
  startButton.style.display = "none";
  hitButton.style.display = "none";
  standButton.style.display = "none";
  document.querySelector("body > div > p#dcard1").style.display = "none";
  document.querySelector("body > div > p#dcard2").style.display = "none";
  document.querySelector("body > div > p#card1").style.display = "none";
  document.querySelector("body > div > p#card2").style.display = "none";
}

function dcheck(num) {
  if (num > 21) {
    console.log(num);
    lose();
    setTimeout(alert("Dealer Bust, You Win $$"), 5000);
  }
}

function pcheck(num) {
  if (num > 21) {
    console.log(num);
    setTimeout(alert("Bust you lose"), 5000);
    lose();
    resetBoard();
  }
}

// Hit button event listener
hitButton.addEventListener("click", () => {
  //sum the
  const random = (max) => {
    return Math.floor(Math.random() * (max - 1) + 1);
  };
  const hit = () => {
    //assign random number - fisher yates shuffle (takes from the top) or math.random
    const phit = deck.splice(random(deck.length), 1)[0];
    player.cards.push(phit);
  };
  hit();
  const pcard1 = player.cards[1].value;
  const pcard2 = player.cards[2].value;
  const pcard3 = player.cards[3].value;
  if (player.cards.length > 5) {
    const pcard4 = player.cards[4].value;
    const pcard5 = player.cards[5].value;
    const totalsum = pcard1 + pcard2 + pcard3 + pcard4 + pcard5;
    document.querySelector("body > div > div.player1").innerText = totalsum;
    pcheck(totalsum);
  } else if (player.cards.length > 4) {
    const pcard4 = player.cards[4].value;
    const totalsum = pcard1 + pcard2 + pcard3 + pcard4;
    document.querySelector("body > div > div.player1").innerText = totalsum;
    pcheck(totalsum);
  } else {
    const totalsum = pcard1 + pcard2 + pcard3;
    document.querySelector("body > div > div.player1").innerText = totalsum;
    pcheck(totalsum);
  }
});

function win() {
  const money = player.money + player.bet;
  console.log(money);
  const updateMoney = (document.querySelector("body > div.money").innerText =
    money);
}

function lose() {
  const money = player.money - player.bet;
  console.log(money);
  document.querySelector("body > div.money").innerText = money;
  const updateMoney = (document.querySelector("body > div.money").innerText =
    money);
}
function flip() {
  const dnum1 = dealer.cards[1].value;
  const dsuit1 = dealer.cards[1].suit;
  const dealcard1 = `${dnum1}-${dsuit1}.png`;
  const dcard1Img = document.querySelector("body > div > p#dcard1");
  dcard1Img.style.backgroundImage = `url(./assets/${dealcard1})`;
  dcard1Img.style.display = "inline";
}

function stand() {
  const dcard1 = dealer.cards[1].value;
  const dcard2 = dealer.cards[2].value;
  const dsum = dcard1 + dcard2;
  if (dsum > 17) {
    const dcard1 = dealer.cards[1].value;
    const dcard2 = dealer.cards[2].value;
    const dsum = dcard1 + dcard2;
    const psum = document.querySelector("body > div > div.player1").innerText;
    console.log(psum);
    if (dsum < 22) {
      if (dsum > psum) {
        setTimeout(alert("Dealer Wins"), 5000);
        lose();
        resetBoard();
      } else {
        setTimeout(alert("You Win $$"), 5000);
        win();
      }
    } else {
      setTimeout(alert("You Win $$"), 5000);
      win();
    }
  } else {
    // if dealer is less than 17 get card other wise see which is larger
    if (dealer.cards.length > 4) {
      const dcard1 = dealer.cards[1].value;
      const dcard2 = dealer.cards[2].value;
      const dcard3 = dealer.cards[3].value;
      const dcard4 = dealer.cards[4].value;
      const dsum = dcard1 + dcard2 + dcard3 + dcard4;
      if (dsum < 17) {
        const random = (max) => {
          return Math.floor(Math.random() * (max - 1) + 1);
        };
        const hit = () => {
          //assign random number - fisher yates shuffle (takes from the top) or math.random
          const dhit = deck.splice(random(deck.length), 1)[0];
          dealer.cards.push(dhit);
          console.log(dealer.cards);
          const dcard1 = dealer.cards[1].value;
          const dcard2 = dealer.cards[2].value;
          const dcard3 = dealer.cards[3].value;
          const dcard4 = dealer.cards[4].value;
          const dcard5 = dealer.cards[5].value;
          const dsum = dcard1 + dcard2 + dcard3 + dcard4 + dcard5;
          console.log(dsum);
          document.querySelector("body > div > div.dealer").innerText = dsum;
          dcheck(dsum);
          const psum = document.querySelector(
            "body > div > div.player1"
          ).innerText;
          console.log(psum);
          if (dsum < 22) {
            if (dsum > psum) {
              setTimeout(alert("Dealer Wins"), 5000);
              lose();
            } else {
              setTimeout(alert("You Win $$"), 5000);
              win();
            }
          } else {
            setTimeout(alert("You Win $$"), 5000);
            win();
          }
        };
        hit();
      }
    } else if (dealer.cards.length > 3) {
      const dcard1 = dealer.cards[1].value;
      const dcard2 = dealer.cards[2].value;
      const dcard3 = dealer.cards[3].value;
      const dsum = dcard1 + dcard2 + dcard3;
      if (dsum < 17) {
        const random = (max) => {
          return Math.floor(Math.random() * (max - 1) + 1);
        };
        const hit = () => {
          //assign random number - fisher yates shuffle (takes from the top) or math.random
          const dhit = deck.splice(random(deck.length), 1)[0];
          dealer.cards.push(dhit);
          console.log(dealer.cards);
          const dcard1 = dealer.cards[1].value;
          const dcard2 = dealer.cards[2].value;
          const dcard3 = dealer.cards[3].value;
          const dcard4 = dealer.cards[4].value;
          const dsum = dcard1 + dcard2 + dcard3 + dcard4;
          console.log(dsum);
          document.querySelector("body > div > div.dealer").innerText = dsum;
          dcheck(dsum);
          const psum = document.querySelector(
            "body > div > div.player1"
          ).innerText;
          console.log(psum);
          if (dsum < 22) {
            if (dsum > psum) {
              setTimeout(alert("Dealer Wins"), 5000);
              const money = player.money - player.bet;
              lose();
            } else {
              setTimeout(alert("You Win $$"), 5000);
              win();
            }
          } else {
            setTimeout(alert("You Win $$"), 5000);
            win();
          }
        };
        hit();
      }
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
          console.log(dealer.cards);
          const dcard1 = dealer.cards[1].value;
          const dcard2 = dealer.cards[2].value;
          const dcard3 = dealer.cards[3].value;
          const dsum = dcard1 + dcard2 + dcard3;
          console.log(dsum);
          document.querySelector("body > div > div.dealer").innerText = dsum;
          const psum = document.querySelector(
            "body > div > div.player1"
          ).innerText;
          console.log(psum);
          if (dsum < 22) {
            if (dsum > psum) {
              setTimeout(alert("Dealer Wins"), 5000);
              lose();
              resetBoard();
            } else {
              setTimeout(alert("You Win $$"), 5000);
              win();
            }
          } else {
            setTimeout(alert("You Win $$"), 5000);
            win();
          }
        };
        hit();

        setTimeout(dcheck(dsum), 5000);
      }
    }
  }
  getCardImage();
}

//set time ouit for alerts (set time out (()))

// make the number to the card image
function getCardImage() {
  const faceVal = Object.keys(deckValues);
  const num1 = player.cards[1].value;
  const suit1 = player.cards[1].suit;
  const card1 = `${num1}-${suit1}.png`;
  const num2 = player.cards[2].value;
  const suit2 = player.cards[2].suit;
  const card2 = `${num2}-${suit2}.png`;
  const card1Img = document.querySelector("body > div > p#card1");
  card1Img.style.backgroundImage = `url(./assets/${card1})`;
  card1Img.style.display = "inline";
  const card2Img = document.querySelector("body > div > p#card2");
  card2Img.style.backgroundImage = `url(./assets/${card2})`;
  card2Img.style.display = "inline";
  // dealer cards
  const dnum1 = dealer.cards[1].value;
  const dsuit1 = dealer.cards[1].suit;
  const dcard1 = `${dnum1}-${dsuit1}.png`;
  const dnum2 = dealer.cards[2].value;
  const dsuit2 = dealer.cards[2].suit;
  const dcard2 = `${dnum2}-${dsuit2}.png`;
  const dcard1Img = document.querySelector("body > div > p#dcard1");
  dcard1Img.style.backgroundImage = `url(./assets/BACK.png)`;
  dcard1Img.style.display = "inline";
  const dcard2Img = document.querySelector("body > div > p#dcard2");
  dcard2Img.style.backgroundImage = `url(./assets/${dcard2})`;
  dcard2Img.style.display = "inline";
}

function hitImage() {
  console.log(player.cards);
  const num3 = player.cards[3].value;
  const suit3 = player.cards[3].suit;
  const card3 = `${num3}-${suit3}.png`;
  const card3Img = document.querySelector("body > div > p#card3");
  card3Img.style.backgroundImage = `url(./assets/${card3})`;
  card3Img.style.display = "inline";
}

startButton.addEventListener("click", () => {
  pStartGame();
  function sumCards() {
    // player money
    console.log(player.bet);
    let money = player.money;
    let bet = player.bet;
    document.querySelector("body > div.money").innerText = money;
    document.querySelector("body > div.bet").innerText = bet;
    //player cards
    const pcard1 = player.cards[1].value;
    const pcard2 = player.cards[2].value;
    const twoSum = pcard1 + pcard2;
    //Dealer Cards
    const dcard1 = dealer.cards[1].value;
    const dcard2 = dealer.cards[2].value;
    const dtwoSum = dcard1 + dcard2;
    //append the DOM

    document.querySelector("body > div > div.dealer").innerText = dtwoSum;
    document.querySelector("body > div > div.player1").innerText = twoSum;
  }
  sumCards();
  getCardImage();
});

// Stand button event listener
standButton.addEventListener("click", () => {
  flip();
  do {
    setTimeout(stand(), 5000);
  } while (document.querySelector("body > div > div.dealer").innerText < 17);
  hitButton.style.display = "none";
  standButton.style.display = "none";
  newDealButton.style.display = "inline";
  getCardImage();
});

newDealButton.addEventListener("click", () => {
  startButton.style.display = "inline";
  newDealButton.style.display = "none";
  document.querySelector("body > div > div.dealer").innerText = "";
  document.querySelector("body > div > div.player1").innerText = "";
  player.cards = [""];
  dealer.cards = [""];
  pStartGame();
  function sumCards() {
    //player cards
    console.log(player.cards);
    console.log(dealer.cards);
    const pcard1 = player.cards[1].value;
    const pcard2 = player.cards[2].value;
    const twoSum = pcard1 + pcard2;
    //Dealer Cards
    const dcard1 = dealer.cards[1].value;
    const dcard2 = dealer.cards[2].value;
    const dtwoSum = dcard1 + dcard2;
    //append the DOM

    document.querySelector("body > div > div.dealer").innerText = dtwoSum;
    document.querySelector("body > div > div.player1").innerText = twoSum;
  }
  sumCards();
  getCardImage();
});
