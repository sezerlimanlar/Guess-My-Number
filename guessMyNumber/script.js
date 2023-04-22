'use strict';
//DOM Manipülasyon işlemleri
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
//1 - 20 arası random sayı
let rndNumber = Math.floor(Math.random() * 20) + 1;

console.log(rndNumber); //test

//Tıklama eventleri
btnCheck.addEventListener('click', () => {
  //Girilen sayı random sayıdan küçükse;
  if (rndNumber < guess.value) {
    msg.textContent = 'Too High!';
    scores--;
    score.textContent = scores;
    //Girilen sayı random sayıdan büyükse;
  } else if (rndNumber > guess.value) {
    msg.textContent = 'Too Low!';

    scores--;
    score.textContent = scores;
    //Girilen sayı random sayıya eşitse;
  } else if (rndNumber == guess.value) {
    msg.textContent = 'Correct Number!';
    body.style.backgroundColor = 'green';
    scores--;
    btnCheck.disabled = true;
    score.textContent = scores;
    number.textContent = rndNumber;
    scoreArray.push(scores);

    highscore.textContent = scoreArray.reduce((a, b) => {
      //Math.max(...scoreArray) kullanılabilir.
      return b > a ? b : a;
    }, 0);
    console.log(scoreArray);
  }
  //Score 0'a eşitse oyun sonlanır.
  if (scores == 0) {
    btnCheck.disabled = true;
    btnCheck.style.cursor = 'no-drop';
    msg.textContent = 'GAMEOVER!';
  }
});
//Oyunu tekrar başlatmak için resetGame fonksiyonu.
const resetGame = function () {
  rndNumber = Math.floor(Math.random() * 20) + 1;
  guess.value = '';
  msg.textContent = 'Start guessing...';
  number.textContent = '?';
  scores = 20;
  score.textContent = scores;
  body.style.backgroundColor = '#222';
  highscore.textContent = scoreArray.reduce((a, b) => {
    //Math.max(...scoreArray) kullanılabilir.
    return b > a ? b : a;
  }, 0);
  btnCheck.disabled = false;
  btnCheck.style.cursor = 'pointer';
};
//Tıklama eventi ile oyunu sıfırlama fonksiyonunu çağırma
btnAgain.addEventListener('click', resetGame);
