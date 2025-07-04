const score1 = document.querySelector(".score1");
const score2 = document.querySelector(".score2");
const curr1 = document.querySelector(".current-score-player1");
const curr2 = document.querySelector(".current-score-player2");
const newgame = document.querySelector("#new-game");
const dice = document.querySelector("#dice");
const hold = document.querySelector("#hold");
const diceImg = document.querySelector("img");
const turnIndicator = document.querySelector("#turn-indicator");
let currentScore = 0;
let activePlayer = 1;
let totalScore1 = 0;
let totalScore2 = 0;
let isGameOver = false;
let intervalId = null;
function updateTurnIndicator() {
  if (isGameOver) {
    turnIndicator.textContent = "Game Over!";
  } else {
    turnIndicator.textContent = `Player ${activePlayer}'s Turn`;
  }
}
function resetGame() {
  totalScore1 = 0;
  totalScore2 = 0;
  currentScore = 0;
  activePlayer = 1;
  isGameOver = false;
  score1.textContent = 0;
  score2.textContent = 0;
  curr1.textContent = 0;
  curr2.textContent = 0;
  diceImg.src = "1.jpg";
  clearInterval(intervalId);
  intervalId = null;
  updateTurnIndicator();
  score1.style.fontSize = "70px";
  score2.style.fontSize = "70px";
  diceImg.style.display="block";
  dice.style.display = "block";
  hold.style.display = "block";
}
newgame.addEventListener("click", resetGame);
dice.addEventListener("click", () => {
  if (isGameOver || intervalId) return;
  intervalId = setInterval(() => {
    const randomNumber = Math.trunc(Math.random() * 6) + 1;
    diceImg.src = `${randomNumber}.jpg`;
    if (randomNumber !== 1) {
      currentScore += randomNumber;
      if (activePlayer === 1) {
        curr1.textContent = currentScore;
      } else {
        curr2.textContent = currentScore;
      }
    } else {
      if (activePlayer === 1) {
        totalScore1 += currentScore;
        if (totalScore1 >= 100) {
          score1.textContent = "YOU WON!!!";
          score1.style.fontSize = "40px";
          isGameOver = true;
        } else {
          score1.textContent = totalScore1;
        }
        currentScore = 0;
        curr1.textContent = 0;
        activePlayer = 2;
      } else {
        totalScore2 += currentScore;
        if (totalScore2 >= 100) {
          score2.textContent = "YOU WON!!!";
          score2.style.fontSize = "40px";
          isGameOver = true;
        } else {
          score2.textContent = totalScore2;
        }
        currentScore = 0;
        curr2.textContent = 0;
        activePlayer = 1;
      }
      clearInterval(intervalId);
      intervalId = null;
      updateTurnIndicator();
    }
    if (isGameOver) {
      buttonsDiv.style.display = "none";
      updateTurnIndicator();
    }
  }, 1000);
});

hold.addEventListener("click", () => {
  if (isGameOver || !intervalId) return;
  clearInterval(intervalId);
  intervalId = null;
  if (activePlayer === 1) {
    totalScore1 += currentScore;
    score1.textContent = totalScore1;
    curr1.textContent = 0;
    if (totalScore1 >= 100) {
      score1.textContent = "YOU WON!!!";
      score1.style.fontSize = "40px";
      isGameOver = true;
    } else {
      activePlayer = 2;
    }
  } else {
    totalScore2 += currentScore;
    score2.textContent = totalScore2;
    curr2.textContent = 0;
    if (totalScore2 >= 100) {
      score2.textContent = "YOU WON!!!";
      score2.style.fontSize = "40px";
      isGameOver = true;
    } else {
      activePlayer = 1;
    }
  }
  currentScore = 0;
  updateTurnIndicator();
  if (isGameOver) {
    diceImg.style.display="none";
    dice.style.display = "none";
    hold.style.display = "none";
  }
});


// const score1 = document.querySelector(".score1");
// const score2 = document.querySelector(".score2");
// const curr1 = document.querySelector(".current-score-player1");
// const curr2 = document.querySelector(".current-score-player2");
// const newgame = document.querySelector("#new-game");
// const dice = document.querySelector("#dice");
// const hold = document.querySelector("#hold");
// const diceImg = document.querySelector("img");
// const msg=document.querySelector("body");

// let currentScore = 0;
// let activePlayer = 1;
// let totalScore1 = 0;
// let totalScore2 = 0;

// newgame.addEventListener("click", () => {
//   totalScore1 = 0;
//   totalScore2 = 0;
//   currentScore = 0;
//   activePlayer = 1;
//   score1.textContent = 0;
//   score2.textContent = 0;
//   curr1.textContent = 0;
//   curr2.textContent = 0;
//   diceImg.src = "1.jpg";
// });

// // dice.addEventListener("click", () => {
// //   const randomNumber = Math.trunc(Math.random() * 6) + 1;
// //   console.log(randomNumber);
// //   diceImg.src =`${randomNumber}.jpg`;

// //   if (randomNumber !== 1) {
// //     currentScore += randomNumber;
// //     if (activePlayer === 1) {
// //       curr1.textContent = currentScore;
// //     } else {
// //       curr2.textContent = currentScore;
// //     }
// //   } else {
// //     currentScore = 0;
// //     if (activePlayer === 1) {
// //       curr1.textContent = 0;
// //       activePlayer = 2;
// //     } else {
// //       curr2.textContent = 0;
// //       activePlayer = 1;
// //     }
// //   }
// // });
// dice.addEventListener("click", () => {
//   const intervalId = setInterval(() => {
//     const randomNumber = Math.floor(Math.random() * 6) + 1;
//     console.log(randomNumber);
//     diceImg.src = `${randomNumber}.jpg`;

//     if (randomNumber !== 1) {
//       currentScore += randomNumber;
//       if (activePlayer === 1) {
//         curr1.textContent = currentScore;
//       } else {
//         curr2.textContent = currentScore;
//       }
//     } else {
//       currentScore = 0;
//       if (activePlayer === 1) {
//         curr1.textContent = 0;
//         activePlayer = 2;
//       } else {
//         curr2.textContent = 0;
//         activePlayer = 1;
//       }
//       clearInterval(intervalId); // Stop auto-rolling
//     }
//   }, 3000);
// });



// hold.addEventListener("click", () => {
//   if (activePlayer === 1) {
//     totalScore1 += currentScore;
//     score1.textContent = totalScore1;
//     curr1.textContent = 0;
//     if (totalScore1 >= 100) {
//       score1.textContent="PLAYER 1 WINS";
//       score1.style.fontSize = "40px";
//     } else {
//       activePlayer = 2;
//     }
//   } else {
//     totalScore2 += currentScore;
//     score2.textContent = totalScore2;
//     curr2.textContent = 0;
//     if (totalScore2 >= 100) {
//       score2.textContent="PLAYER 2 WINS";
//       score2.style.fontSize = "40px";
//     } else {
//       activePlayer = 1;
//     }
//   }
//   currentScore = 0;
// });
