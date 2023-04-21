'use strict';
const btnAgain = document.querySelector('.again');
const btnCheck = document.querySelector('.check');
const guess = document.querySelector('.guess');
const msg = document.querySelector('.message');
const highscore = document.querySelector('.highscore');
const number = document.querySelector('.number');
const score = document.querySelector('.score');
const body = document.querySelector('body');
const scoreArray = [];

let scores = 20;

let rndNumber = Math.floor(Math.random() * 20) + 1;

let hScore = 0;
console.log(rndNumber); //
btnCheck.addEventListener('click', () => {
  if (rndNumber < guess.value) {
    msg.innerHTML = 'Too High!';
    hScore++;
    scores--;
    score.innerHTML = scores;
  } else if (rndNumber > guess.value) {
    msg.innerHTML = 'Too Low!';
    hScore++;
    scores--;
    score.innerHTML = scores;
  } else if (rndNumber == guess.value) {
    msg.innerHTML = 'Correct Number!';
    body.style.backgroundColor = 'green';
    hScore++;

    scores--;
    btnCheck.disabled = true;
    score.innerHTML = scores;
    number.innerHTML = rndNumber;
    scoreArray.push(hScore);
    highscore.innerHTML = scoreArray.reduce((a, b) => {
      return b > a ? b : a;
    }, 0);
    console.log(scoreArray);
  }

  if (scores == 0) {
    btnCheck.disabled = true;
    btnCheck.style.cursor = 'no-drop';
    msg.innerHTML = 'GAMEOVER!';
  }
});

btnAgain.addEventListener('click', () => {
  resetGame();
});
const resetGame = function () {
  guess.value = '';
  msg.innerHTML = 'Start guessing...';
  number.innerHTML = '?';
  scores = 20;
  score.innerHTML = scores;
  hScore = 0;
  body.style.backgroundColor = '#222';
  highscore.innerHTML = scoreArray.reduce((a, b) => {
    return b > a ? b : a;
  }, 0);

  btnCheck.disabled = false;
  btnCheck.style.cursor = 'pointer';
};
