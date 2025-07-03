const score1 = document.querySelector(".score1");
const score2 = document.querySelector(".score2");
const curr1 = document.querySelector(".current-score-player1");
const curr2 = document.querySelector(".current-score-player2");
const newgame = document.querySelector("#new-game");
const dice = document.querySelector("#dice");
const hold = document.querySelector("#hold");
const diceImg = document.querySelector("img");
const msg=document.querySelector("body");

let currentScore = 0;
let activePlayer = 1;
let totalScore1 = 0;
let totalScore2 = 0;

newgame.addEventListener("click", () => {
  totalScore1 = 0;
  totalScore2 = 0;
  currentScore = 0;
  activePlayer = 1;
  score1.textContent = 0;
  score2.textContent = 0;
  curr1.textContent = 0;
  curr2.textContent = 0;
  diceImg.src = "1.jpg";
});

dice.addEventListener("click", () => {
  const randomNumber = Math.trunc(Math.random() * 6) + 1;
  console.log(randomNumber);
  diceImg.src =`${randomNumber}.jpg`;

  if (randomNumber !== 1) {
    currentScore += randomNumber;
    if (activePlayer === 1) {
      curr1.textContent = currentScore;
    } else {
      curr2.textContent = currentScore;
    }
  } else {
    currentScore = 0;
    if (activePlayer === 1) {
      curr1.textContent = 0;
      activePlayer = 2;
    } else {
      curr2.textContent = 0;
      activePlayer = 1;
    }
  }
});

hold.addEventListener("click", () => {
  if (activePlayer === 1) {
    totalScore1 += currentScore;
    score1.textContent = totalScore1;
    curr1.textContent = 0;
    if (totalScore1 >= 100) {
      score1.textContent="PLAYER 1 WINS";
      score1.style.fontSize = "40px";
    } else {
      activePlayer = 2;
    }
  } else {
    totalScore2 += currentScore;
    score2.textContent = totalScore2;
    curr2.textContent = 0;
    if (totalScore2 >= 100) {
      score2.textContent="PLAYER 2 WINS";
      score2.style.fontSize = "40px";
    } else {
      activePlayer = 1;
    }
  }
  currentScore = 0;
});
