
const scissor = document.querySelector("#scissors");
const paper = document.querySelector("#paper");
const rock = document.querySelector("#rock");

scissor.addEventListener('click', function () {
    playGame("scissors");
});

paper.addEventListener('click', function () {
    playGame("paper");
});

rock.addEventListener('click', function () {
    playGame("rock");
});




// Create a function that determines the computer choice.  It should return one of the three values: 'rock', 'paper', or 'scissors'
function playGame(playerChoice) {
    // Generate a random choice for the computer
    let computerChoice = Math.random();
    if (computerChoice < 0.34) {
        computerChoice = "rock";
    } else if (computerChoice < 0.67) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }



    /* Create a function that compares the user's selection to the computer's selection.  It should then output the opponent's choice to #computerSelection and display who is the winner.
     
     */
    let result;
    if (playerChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")) {
        result = "You win!";
    } else {
        result = "You lose!";
    };



    document.querySelector("#decision").innerText = `${result}`;
    document.querySelector("#computerSelection").innerText = `${computerChoice}`;

};
