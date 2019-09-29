// CONS variables for cibling
const scorePlayer1 = document.querySelectorAll("span")[0];
const scorePlayer2 = document.querySelectorAll("span")[1];
const winnerScoreMax = document.querySelectorAll("span")[2];
const input = document.querySelector("input");
const buttonPlayer1 = document.querySelectorAll("button")[0];
const buttonPlayer2 = document.querySelectorAll("button")[1];
const buttonReset = document.querySelectorAll("button")[2];

// lET variables
let scorePl1 = 0;
let scorePl2 = 0;
let scoreMax = 5;

// Player 1
function createScoreIntoSpanPlayer1() {
  scorePlayer1.append(document.createTextNode(scorePl1));
}

function modifyScoreValueIntoPlayer1() {
  scorePlayer1.innerText = scorePl1;
}

function boostScorePlayer1() {
  if (scorePl1 < scoreMax && scorePl2 < scoreMax) {
    scorePl1++;
    scorePlayer1.innerText = scorePl1;
  }
}

// Player 2
function createScoreIntoSpanPlayer2() {
  scorePlayer2.append(document.createTextNode(scorePl2));
}

function modifyScoreValueIntoPlayer2() {
  scorePlayer2.innerText = scorePl2;
}

function boostScorePlayer2() {
  if (scorePl2 < scoreMax && scorePl1 < scoreMax) {
    scorePl2++;
    scorePlayer2.innerText = scorePl2;
  }
}

// Winner Score Max
function createScoreIntoSpanWinnerScoreMax() {
  winnerScoreMax.append(document.createTextNode(scoreMax));
}

function modifyScoreValueIntoWinnerScoreMax() {
  winnerScoreMax.innerText = scoreMax;
}

function setWinnerScoreMax() {
  createScoreIntoSpanWinnerScoreMax();
}

// Reset
function resetScores() {
  scorePl1 = 0;
  scorePl2 = 0;
  modifyScoreValueIntoPlayer1();
  modifyScoreValueIntoPlayer2();
}

// Function Global
function setScoreMax() {
  scoreMax = +input.value;
  winnerScoreMax.innerText = +input.value;
}

function scoreKeeper() {
  createScoreIntoSpanWinnerScoreMax();
  createScoreIntoSpanPlayer1();
  createScoreIntoSpanPlayer2();
}

buttonPlayer1.addEventListener("click", boostScorePlayer1);
buttonPlayer2.addEventListener("click", boostScorePlayer2);
buttonReset.addEventListener("click", resetScores);
window.addEventListener("load", scoreKeeper);
input.addEventListener("change", setScoreMax);
