/**
 * !get htmls
 */

let getCard = document.querySelector(".getCard");
let card1 = document.querySelector(".card1");
let card2 = document.querySelector(".card2");
let card3 = document.querySelector(".card3");
let card4 = document.querySelector(".card4");
let card11 = document.querySelector(".card11");
let card22 = document.querySelector(".card22");
let card33 = document.querySelector(".card33");
let card44 = document.querySelector(".card44");
let computersPoint = document.querySelector(".computersPoint");
let playersPoints = document.querySelector(".myPoints");

/**
 * !arrays
 */

let computerCard = [];
let playerCard = [];

/**
 * !who's turn
 */

let computersTurn = false;
let playersTurn = true;

let computerMove = "";
let value = 0;
let interval;

/**
 *
 * !player
 */

const playersFunction = () => {
  if (playerCard.length === 4) {
    return;
  }

  if (computersTurn && !playersTurn) {
    return;
  }
  computerMove = Math.random() * 13;
  value = 0;

  if (computerMove > 0 && computerMove <= 1) {
    computerMove = "A";
    value = 1;
  } else if (computerMove > 1 && computerMove <= 2) {
    computerMove = 2;
    value = 2;
  } else if (computerMove > 2 && computerMove <= 3) {
    computerMove = 3;
    value = 3;
  } else if (computerMove > 3 && computerMove <= 4) {
    computerMove = 4;
    value = 4;
  } else if (computerMove > 4 && computerMove <= 5) {
    computerMove = 5;
    value = 5;
  } else if (computerMove > 5 && computerMove <= 6) {
    computerMove = 6;
    value = 6;
  } else if (computerMove > 6 && computerMove <= 7) {
    computerMove = 7;
    value = 7;
  } else if (computerMove > 7 && computerMove <= 8) {
    computerMove = 8;
    value = 8;
  } else if (computerMove > 8 && computerMove <= 9) {
    computerMove = 9;
    value = 9;
  } else if (computerMove > 9 && computerMove <= 10) {
    computerMove = "J";
    value = 10;
  } else if (computerMove > 10 && computerMove <= 11) {
    computerMove = "Q";
    value = 10;
  } else if (computerMove > 11 && computerMove <= 12) {
    computerMove = "K";
    value = 10;
  } else if (computerMove > 12 && computerMove <= 13) {
    computerMove = 10;
    value = 10;
  }

  playerCard.push({
    name: computerMove,
    points: value,
  });

  if (playerCard.length === 1) {
    card11.classList.remove("hidden");
    card11.innerHTML = computerMove;
  }

  if (playerCard.length === 2) {
    card22.classList.remove("hidden");
    card22.innerHTML = computerMove;
  }

  if (playerCard.length === 3) {
    card33.classList.remove("hidden");
    card33.innerHTML = computerMove;
  }

  if (playerCard.length === 4) {
    card44.classList.remove("hidden");
    card44.innerHTML = computerMove;
  }

  playersPoints.innerHTML =
    "Your Points:" +
    playerCard
      .map((card) => {
        return card.points;
      })
      .reduce((x, y) => {
        if (x + y > 21) {
          alert("you lost");
          computersTurn = false;
          playersTurn = false;
          return x + y;
        } else if (x + y === 21) {
          alert("You won");
          computersTurn = false;
          playersTurn = false;
          return x + y;
        } else if ((x + y, 0 < 21)) {
          return x + y;
        }
      });

  computersTurn = true;
  playersTurn = false;

  interval = setInterval(() => {
    clearInterval(interval);
    computersFunction();
  }, 500);
};

/**
 *
 * !computer
 */

const computersFunction = () => {
  if (computerCard.length === 4) {
    return;
  }

  if (playersTurn && !computersTurn) {
    return;
  }
  computerMove = Math.random() * 13;
  value = 0;

  if (computerMove > 0 && computerMove <= 1) {
    computerMove = "A";
    value = 1;
  } else if (computerMove > 1 && computerMove <= 2) {
    computerMove = 2;
    value = 2;
  } else if (computerMove > 2 && computerMove <= 3) {
    computerMove = 3;
    value = 3;
  } else if (computerMove > 3 && computerMove <= 4) {
    computerMove = 4;
    value = 4;
  } else if (computerMove > 4 && computerMove <= 5) {
    computerMove = 5;
    value = 5;
  } else if (computerMove > 5 && computerMove <= 6) {
    computerMove = 6;
    value = 6;
  } else if (computerMove > 6 && computerMove <= 7) {
    computerMove = 7;
    value = 7;
  } else if (computerMove > 7 && computerMove <= 8) {
    computerMove = 8;
    value = 8;
  } else if (computerMove > 8 && computerMove <= 9) {
    computerMove = 9;
    value = 9;
  } else if (computerMove > 9 && computerMove <= 10) {
    computerMove = "J";
    value = 10;
  } else if (computerMove > 10 && computerMove <= 11) {
    computerMove = "Q";
    value = 10;
  } else if (computerMove > 11 && computerMove <= 12) {
    computerMove = "K";
    value = 10;
  } else if (computerMove > 12 && computerMove <= 13) {
    computerMove = 10;
    value = 10;
  }

  computerCard.push({
    name: computerMove,
    points: value,
  });

  if (computerCard.length === 1) {
    card1.classList.remove("hidden");
    card1.innerHTML = computerMove;
  }

  if (computerCard.length === 2) {
    card2.classList.remove("hidden");
    card2.innerHTML = computerMove;
  }

  if (computerCard.length === 3) {
    card3.classList.remove("hidden");
    card3.innerHTML = computerMove;
  }

  if (computerCard.length === 4) {
    card4.classList.remove("hidden");
    card4.innerHTML = computerMove;
  }

  computersPoint.innerHTML =
    "Computers Points:" +
    computerCard
      .map((card) => {
        return card.points;
      })
      .reduce((x, y) => {
        if (x + y > 21) {
          alert("computer lost");
          playersTurn = false;
          computersTurn = false;
          return x + y;
        } else if (x + y === 21) {
          alert("computer won");
          playersTurn = false;
          computersTurn = false;
          return x + y;
        } else if ((x + y, 0 < 21)) {
          return x + y;
        }
      });

  computersTurn = false;
  playersTurn = true;
};

/**
 * !getCard Function
 */
getCard.addEventListener("click", () => {
  if (!computersTurn && playersTurn) {
    playersFunction();
    return;
  } else {
    computersFunction();
    return;
  }
});
