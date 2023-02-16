/*
 * DOTS: Level One
 *
 */
//Main Goal of Project - click on ball to get to 100 points
// Make Score
// Grab our ball 
// Grab the score display 
// Click on ball
// Score will add 10 points each click 
// Edit the text to show the new score
// When the score gets to 100, show new winner text





//Let the score=0 
let score = 0;
let ballEl = document.querySelector('.js-ball');
console.log(ballEl);
let scoreEl = document.querySelector('.js-score');
function declareWinner() {
  document.body.classList.add('game-over');
}
//If a user clicks the white ball, then add 10 points to the score. 
ballEl.addEventListener('click', function () {
  score = score + 10;
  console.log(score);
  scoreEl.innerText = score;

  if (score > 90) {
    declareWinner()

  }
});

