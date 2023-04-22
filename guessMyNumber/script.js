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

console.log(rndNumber); //
btnCheck.addEventListener('click', () => {
  if (rndNumber < guess.value) {
    msg.innerHTML = 'Too High!';
    scores--;
    score.innerHTML = scores;
  } else if (rndNumber > guess.value) {
    msg.innerHTML = 'Too Low!';

    scores--;
    score.innerHTML = scores;
  } else if (rndNumber == guess.value) {
    msg.innerHTML = 'Correct Number!';
    body.style.backgroundColor = 'green';

    scores--;
    btnCheck.disabled = true;
    score.innerHTML = scores;
    number.innerHTML = rndNumber;
    scoreArray.push(scores);
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

const resetGame = function () {
  rndNumber = Math.floor(Math.random() * 20) + 1;
  guess.value = '';
  msg.innerHTML = 'Start guessing...';
  number.innerHTML = '?';
  scores = 20;
  score.innerHTML = scores;
  body.style.backgroundColor = '#222';
  highscore.innerHTML = scoreArray.reduce((a, b) => {
    return b > a ? b : a;
  }, 0);
  btnCheck.disabled = false;
  btnCheck.style.cursor = 'pointer';
};
btnAgain.addEventListener('click', resetGame);
