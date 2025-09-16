console.log("Hello World!");

const rock = "rock";
const paper = "paper";
const scissors = "scissors";

// Creates a text log for all actions...
const log = document.createElement('div');
log.setAttribute('id', 'log');
log.textContent = '';

// Set up computer choice... (append computer to log)
const computer = document.createElement('p');
computer.setAttribute('id', 'computer');
log.appendChild(computer);

function getComputerChoice () {
    //// return rock.toLowerCase(); useful during troubleshooting
    let choice = Math.floor(Math.random() * (3 - 1 + 1) + 1);
    
    if (choice === 1) {
        // console.log("Computer chose rock");
        computer.textContent = 'Computer chose rock';
        return rock;
    } else if (choice === 2) {
        // console.log("Computer chose paper");
        computer.textContent = "Computer chose paper";
        return paper;
    } else if (choice === 3) {
        // console.log("Computer chose scissors");
        computer.textContent = 'Computer chose scissors';
        return scissors;
    }
}

alert("Make your choice... Best of Five will win!");

let computerScore = 0;
let humanScore = 0;


function winner() {
    if (computerScore >= 5) {
        winnerDisplay.textContent = 
        "Computer Won! Refresh the page to start again...";
        // alert("Computer Won!");
        // alert("Refresh the page to start again...");
        
    } else if (humanScore >= 5) {
        winnerDisplay.textContent = 
        "You Won!!! Refresh the page to start over...";
        // alert("You Won!!!");
        // alert("Refresh the page to start over...");
    } 
    
    document.querySelector('#rockBtn').disabled = true;
    document.querySelector('#paperBtn').disabled = true;
    document.querySelector('#scissorsBtn').disabled = true;
};

// Placement... (insert log before scoreDiv )
const body = document.body;
const scoreDiv = document.querySelector("#score");
body.insertBefore(log, scoreDiv);

// Set up player choice... (Append player to log)
const player = document.createElement('p');
player.setAttribute('id', 'player');
log.insertBefore(player, computer);

// Display current scoress
const scoreVal = document.querySelector('#scoreVal');
const rockBtn = document.querySelector('#rockBtn');

// Rock
rockBtn.addEventListener('click', () => {
    // console.log("Rock was clicked");
    // Player action...
    player.textContent = 'Player chose rock.';
    
    // Computer action...
    let vsRock = getComputerChoice();
    // console.log(vsRock);
    
    
    // Handle each scenario (Rock, paper, or scissors?)
    if (vsRock == "rock") {
        alert("Draw");
        null;
    } else if (vsRock == "paper") {
        alert("You lose");
        ++computerScore;
    } else if (vsRock == "scissors") {
        alert("You win");
        ++humanScore;
    }
    
    // Display Current Score
    // console.log("computer score: " + computerScore);
    // console.log("human score: " + humanScore);
    scoreVal.textContent = `Computer Score: ${computerScore}. Your Score: ${humanScore}.`;
    if (computerScore < 5 && humanScore < 5) {
        return alert(`Computer Score: ${computerScore}. Your Score: ${humanScore}.`);
    } else { return winner();}
});

// Paper
const paperBtn = document.querySelector('#paperBtn');
paperBtn.addEventListener('click', () => {
    // console.log("Paper was clicked");
    // Player action...
    player.textContent = "Player chose paper.";
    
    let vsPaper = getComputerChoice();
    // console.log(vsPaper);
    
    // Handle each scenario
    if (vsPaper == "rock") {
        alert("You win");
        ++humanScore;
    } else if (vsPaper == "paper") {
        alert("Draw");
        null;
    } else if (vsPaper == "scissors") {
        alert("You lose");
        ++computerScore;
    }
    
    // Display Current Score
    // console.log("computer score: " + computerScore);
    // console.log("human score: " + humanScore);
    scoreVal.textContent = `Computer Score: ${computerScore}. Your Score: ${humanScore}.`;
    if (computerScore < 5 && humanScore < 5) {
        return alert(`Computer Score: ${computerScore}. Your Score: ${humanScore}.`);
    } else { return winner();}
});

// Scissors
const scissorsBtn = document.querySelector('#scissorsBtn');
scissorsBtn.addEventListener('click', () => {
    // console.log("Scissors was clicked");
    // Player action...
    player.textContent = "Player chose scissors.";
    
    let vsScissors = getComputerChoice();
    // console.log(vsScissors);
    
    // Handle each scenario
    if (vsScissors == "rock") {
        alert("You lose");
        ++computerScore;
    } else if (vsScissors == "paper") {
        alert("You win");
        ++humanScore;
    } else if (vsScissors == "scissors") {
        alert("Draw");
        null;
    }
    
    // Display Current Score
    // console.log("computer score: " + computerScore);
    // console.log("human score: " + humanScore);
    scoreVal.textContent = `Computer Score: ${computerScore}. Your Score: ${humanScore}.`;
    if (computerScore < 5 && humanScore < 5) {
        return alert(`Computer Score: ${computerScore}. Your Score: ${humanScore}.`);
    } else { return winner();}
});

// Set up winner announcement... 
const winnerDisplay = document.createElement('h2');
winnerDisplay.setAttribute('id', 'winnerDisplay');
winnerDisplay.textContent = "";
body.appendChild(winnerDisplay);