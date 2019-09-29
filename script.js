// CONS variables for cibling
const scorePlayer1 = document.querySelectorAll("span")[0];
const scorePlayer2 = document.querySelectorAll("span")[1];
const winnerScoreMax = document.querySelectorAll("span")[2];
const input = document.querySelector("input");
const buttonPlayer1 = document.querySelectorAll("button")[0];
const buttonPlayer2 = document.querySelectorAll("button")[1];
const buttonReset = document.querySelectorAll("button")[2];

// lET variables
let scorePl = 0;
let scoreMax = 5;

// Player 1
function createScoreIntoSpanPlayer1() {
  scorePlayer1.append(document.createTextNode(scorePl));
}

function modifyScoreValueIntoPlayer1() {
  scorePlayer1.innerText = scorePl;
}

function boostScorePlayer1() {
  if (scorePl < scoreMax) {
    scorePl++;
    scorePlayer1.innerText = scorePl;
  }
}

// Player 2
function createScoreIntoSpanPlayer2() {
  scorePlayer2.append(document.createTextNode(scorePl));
}

function modifyScoreValueIntoPlayer2() {
  scorePlayer2.innerText = scorePl;
}

function boostScorePlayer2() {
  if (scorePl < scoreMax) {
    scorePl++;
    scorePlayer2.innerText = scorePl;
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
  scorePl = 0;
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
