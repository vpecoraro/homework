/*
 * DOTS: Level Two￼


/*
 *
 */
//Main Goal of Project - click on ball to get to 100 points
// Make Score
// Grab our balls 
// Grab the score display 
// Click on ball
// Score will add 10 points each click 
// Edit the text to show the new score
// When the score gets to 100, show new winner text





//Let the score=0 
let score = 0;
let arenaEl = document.querySelector('.js-arena');
console.log(arenaEl);
let scoreEl = document.querySelector('.js-score');
function declareWinner() {
    document.body.classList.add('game-over');
}
//If a user clicks on one of the white balls, then add 10 points to the score. 
arenaEl.addEventListener('click', function () {
    score = score + 10;
    console.log(score);
    scoreEl.innerText = score;

    if (score > 90) {
        declareWinner()

    }
});



