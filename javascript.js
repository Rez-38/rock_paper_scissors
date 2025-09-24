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


alert("Make your choice... Best of Five will win!");

let computerScore = 0;
let humanScore = 0;


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

// ========
// Rock   =
// ========
rockBtn.addEventListener('click', () => {
    // console.log("Rock was clicked");
    // Player action...
    player.textContent = 'Player chose rock.';
    

    // Computer action... 
    let vsRock = getComputerChoice();

    // Handle each scenario (Rock, paper, or scissors?)
    playRound("rock", vsRock);
    
    // Display Current Score
    scoreVal.textContent = `Computer Score: ${computerScore}. Your Score: ${humanScore}.`;
    if (computerScore < 5 && humanScore < 5) {
        return;
    } else { return winner();}
});

// ========
// Paper  =
// ========
const paperBtn = document.querySelector('#paperBtn');
paperBtn.addEventListener('click', () => {
    // Player action...
    player.textContent = "Player chose paper.";
    
    // Computer Action...
    let vsPaper = getComputerChoice();
    
    // Handle each scenario
    playRound('paper', vsPaper);
    
    // Display Current Score
    scoreVal.textContent = `Computer Score: ${computerScore}. Your Score: ${humanScore}.`;
    if (computerScore < 5 && humanScore < 5) {
        return;
    } else { return winner();}
});

// ===========
// Scissors  =
// ===========
const scissorsBtn = document.querySelector('#scissorsBtn');
scissorsBtn.addEventListener('click', () => {
    // Player action...
    player.textContent = "Player chose scissors.";
    
    // computer Action...
    let vsScissors = getComputerChoice();

    // Handle each scenario
    playRound('scissors', vsScissors);
    
    // Display Current Score
    scoreVal.textContent = `Computer Score: ${computerScore}. Your Score: ${humanScore}.`;
    if (computerScore < 5 && humanScore < 5) {
        return;
    } else { return winner();}
});

// Set up winner announcement... 
const winnerDisplay = document.createElement('h2');
winnerDisplay.setAttribute('id', 'winnerDisplay');
winnerDisplay.textContent = "";
body.appendChild(winnerDisplay);

// ==================
// Function Bank    =
// ==================

function getComputerChoice () {
    //// return rock.toLowerCase(); useful during troubleshooting
    let choice = Math.floor(Math.random() * (3 - 1 + 1) + 1);
    
    if (choice === 1) {
        console.log("Computer chose rock");
        computer.textContent = 'Computer chose rock.';
        return rock;
    } else if (choice === 2) {
        console.log("Computer chose paper");
        computer.textContent = "Computer chose paper.";
        return paper;
    } else if (choice === 3) {
        console.log("Computer chose scissors");
        computer.textContent = 'Computer chose scissors.';
        return scissors;
    }
};

function winner() {
    if (computerScore >= 5) {
        winnerDisplay.textContent = 
        "Computer Won! Refresh the page to start again...";
        
    } else if (humanScore >= 5) {
        winnerDisplay.textContent = 
        "You Won!!! Refresh the page to start over...";
    } 
    
    document.querySelector('#rockBtn').disabled = true;
    document.querySelector('#paperBtn').disabled = true;
    document.querySelector('#scissorsBtn').disabled = true;
};

function playRound(playerChoice, computerChoice) {
    // Draw scenario - no points...
    if (playerChoice === computerChoice) {
        const roundDraw = document.createElement('p');
        roundDraw.setAttribute('id', 'roundDraw');
        roundDraw.textContent = `Draw...`;
        body.insertBefore(roundDraw, log);
    } else if (
    // Win scenario - ++humanScore...
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        const playerWin = document.createElement('p');
        playerWin.setAttribute('id', 'playerWin');
        playerWin.textContent = `You win!`;
        body.insertBefore(playerWin, log);
        ++humanScore;

    } else {
    // Lose scenario - ++computerScore
        const compWin = document.createElement('p');
        compWin.setAttribute('id', 'compWin');
        compWin.textContent = `You lose...`;
        body.insertBefore(compWin, log);
        ++computerScore;
    }
};

// ==========
// Styles   =
// ==========

const buttons = document.querySelectorAll('#buttons button');
buttons.forEach((btn) => {
    btn.setAttribute("style", "padding: 1rem 2rem; font-size: 1.75rem;");
});
