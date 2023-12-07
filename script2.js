document.addEventListener("DOMContentLoaded", () => {
  let getCard = document.querySelector(".getCard");
  let myCardsDiv = document.querySelector(".myCards");
  let myPoints = document.querySelector(".myPoints");
  let computerCardsDiv = document.querySelector(".computerCards");
  let computersPoint = document.querySelector(".computersPoint");
  const playAgain = document.querySelector(".playAgain");

  let turn = true;

  let interval;

  const allCards = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "K",
    "Q",
    "J",
    "A",
    "10",
  ];

  const points = [2, 3, 4, 5, 6, 7, 8, 10, 10, 10, 1, 10];

  let playersCards = [];
  let computerCards = [];

  let playersSum = 0;
  let compSum = 0;

  getCard.addEventListener("click", () => {
    if (turn) {
      playersMove();
    } else if (!turn) {
      computersMove();
    }
  });

  const getFunction = () => {
    return Math.floor(Math.random() * allCards.length);
  };

  const playersMove = () => {
    if (!turn) {
      return;
    }

    if (playersSum > 21 || computerCards > 21) {
      return;
    }

    const randNumber = getFunction();
    playersCards.push(points[randNumber]);
    // console.log(playersCards);

    const card = document.createElement("div");
    myCardsDiv.append(card);
    card.innerText = allCards[randNumber];

    playersSum = playersCards.reduce((x, y) => x + y, 0);
    console.log(playersSum);

    myPoints.innerHTML = `My points :${playersSum}`;

    if (playersSum > 21) {
      getCard.disabled = true;
      alert(`You lost! Your Points are ${playersSum}`);
    } else if (playersSum === 21) {
      getCard.disabled = true;
      alert(`You won! `);
    }

    turn = false;

    interval = setInterval(() => {
      clearInterval();
      computersMove();
    }, 1000);
  };

  const computersMove = () => {
    if (turn) {
      return;
    }

    if (compSum > 21 || playersSum > 21) {
      return;
    }

    const randNumber = getFunction();
    computerCards.push(points[randNumber]);
    // console.log(playersCards);

    const card1 = document.createElement("div");
    computerCardsDiv.append(card1);
    card1.innerText = allCards[randNumber];

    compSum = computerCards.reduce((x, y) => x + y, 0);
    console.log(compSum);

    computersPoint.innerHTML = `Computer points :${compSum}`;

    if (compSum > 21) {
      getCard.disabled = true;
      alert(`Computer lost! Computers Points are ${playersSum}`);
    } else if (compSum === 21) {
      getCard.disabled = true;
      alert(`Computer won! `);
    }

    turn = true;
  };

  playAgain.addEventListener("click", () => {
    playersCards = [];
    computerCards = [];

    playersSum = 0;
    compSum = 0;

    interval;

    turn = true;

    computersPoint.innerHTML = `Computer points :${compSum}`;
    myPoints.innerHTML = `My points :${playersSum}`;

    computerCardsDiv.innerHTML = "";
    myCardsDiv.innerHTML = "";
  });
});
