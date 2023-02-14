"use strict";

const player1El = document.querySelector(".player--0");
const player2El = document.querySelector(".player--1");
const score1El = document.getElementById("score--0");
const score2El = document.getElementById("score--1");
const current1El = document.getElementById("current--0");
const current2El = document.getElementById("current--1");
const player1 = document.querySelector(".player1");
const player2 = document.querySelector(".player2");
const dice_image = document.querySelector(".image");
const btnNew = document.querySelector(".newGame");
const btnRoll = document.querySelector(".rollDice");
const btnHold = document.querySelector(".changePlayer");

let random_number;
let active_score_1 = 0;
let active_score_2 = 0;
let currentScore = 0;
let active_player = 0;
let score = [0, 0];
let playing = true;

btnRoll.addEventListener("click", () => {
  if (playing) {
    random_number = Math.floor(Math.random() * 6 + 1);
    console.log(random_number);
    dice_image.src = `images/${random_number}.png`;
    dice_image.classList.remove("hidden");

    if (random_number != 1) {
      currentScore += random_number;
      document.getElementById(`current--${active_player}`).textContent =
        currentScore;
      // currentScore += random_number;
      // current_active_player.textContent = currentScore;
    } else {
      currentScore = 0;
      // document.getElementById(`current--${active_player}`).textContent = "0";
      change_player();
    }
  }
});

function change_player() {
  document.getElementById(`current--${active_player}`).textContent = 0;
  currentScore = 0;
  if (active_player == 0) {
    active_player = 1;
  } else if (active_player == 1) {
    active_player = 0;
  }
  //   player1El.classList.toggle("player--active");
  //   player2El.classList.toggle("player--active");
}
btnHold.addEventListener("click", () => {
  if (playing) {
    score[active_player] += currentScore;
    document.getElementById(`score--${active_player}`).textContent =
      score[active_player];
    if (score[active_player] >= 100) {
      playing = false;
      document.querySelector(
        `.player${active_player + 1}`
      ).style.backgroundColor = "green";
    }
    change_player();
  }
});
