/*
 * DOTS: Level Three 
Level Three
//Main Goal of Project - click on ball to get to 100 points






Level 3 also has 3 moving balls but of different sizes! Each ball is therefore worth a different amount of points. The number of points the user should get for each ball is saved in side of a data attribute on the ball HTML elements. You can access the data attribute of an element from the event object by looking at the event target's `dataset` property. When the user clicks on a ball, increment their score based on how many points that ball is worth until they reach 100.
 */

// Make Score
let score = 0;

// Grab our balls 
let arenaEl = document.querySelector('.js-arena');
console.log(arenaEl);

// Grab the score display 
let scoreEl = document.querySelector('.js-score');

function declareWinner() {
    document.body.classList.add('game-over');
}
//
// Click on ball and get assigned points
arenaEl.addEventListener('click', function (e) {
    e.preventDefault();
    console.log(e);
    console.log(e.target.classList.contains("js-ball"))
    if (e.target.classList.contains("js-ball")) {

        //edit the score text to show the new score
        scoreEl.innerText = score;
    }


    //When score gets to 100, show winner text
    if (score > 90) {
        declareWinner()

    }
});



