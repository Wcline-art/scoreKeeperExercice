// CONS variables for cibling
const scorePlayer1 = document.querySelectorAll("span")[0];
const scorePlayer2 = document.querySelectorAll("span")[1];
const winnerScoreMax = document.querySelectorAll("span")[2];
const input = document.querySelector("input");
const buttonPlayer1 = document.querySelectorAll("button")[0];
const buttonPlayer2 = document.querySelectorAll("button")[1];
const reset = document.querySelectorAll("button")[2];

// lET variables
let inputScoreMax = input.value;
let scorePl1 = 0;
let scorePl2 = 0;
let scoreMax = 5;

function boostScorePlayer1() {
  scorePlayer1.textContent = scorePl1;
  scorePl1++;
}

function boostScorePlayer2() {
  scorePlayer2.textContent = scorePl2;
  scorePl2++;
}

function addScoreMaxInput() {
  input.innerText = input.value;
}

function addScoreInWinnerScoreMax() {
  winnerScoreMax.textContent = scoreMax;
}

buttonPlayer1.addEventListener("click", boostScorePlayer1);
buttonPlayer2.addEventListener("click", boostScorePlayer2);
