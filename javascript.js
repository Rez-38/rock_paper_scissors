console.log("Hello World!");

const rock = "Rock";
const paper = "Paper";
const scissors = "Scissors";

function getComputerChoice () {
    //// return rock.toLowerCase(); useful during troubleshooting
    let choice = Math.floor(Math.random() * (3 - 1 + 1) + 1);
    
    if (choice === 1) {
        console.log("Computer chose rock");
        return rock.toLowerCase();
    } else if (choice === 2) {
        console.log("Computer chose paper");
        return paper.toLowerCase();
    } else if (choice === 3) {
        console.log("Computer chose scissors");
        return scissors.toLowerCase();
    }
}

alert("Make your choice... Best of Five will win!");

// function getHumanChoice () {
    
// }

let computerScore = 0;
let humanScore = 0;


// const computerSelection = getComputerChoice();
// const humanSelection = getHumanChoice();
//// console.log(computerSelection); useful during troubleshooting
//// console.log(humanSelection); useful during troubleshooting

function playRound (humanChoice, computerChoice) {
        
    ////if (humanChoice === !null) {
        ////    humanChoice = humanChoice.toLowerCase();
        ////}
        // humanChoice = humanChoice.toLowerCase();
        
        // if (humanChoice === "rock" && computerChoice === "scissors") {
        //     alert("You win this round! Rock beats Scissors!");
        //     return ++humanScore;
        // } else if (humanChoice === "paper" && computerChoice === "rock") {
        //     alert("You win this round! Paper beats Rock!");
        //     return ++humanScore;
        // } else if (humanChoice === "scissors" && computerChoice === "paper") {
        //     alert("You win this round! Scissors beat Paper!");
        //     return ++humanScore;
        // } else if (humanChoice === computerChoice) {
        //     alert("We have a draw! You both chose the same tool!");
        //     return null;
        // } else {
        //     alert("You lose...");
        //     return ++computerScore;
        // }    
        
        
        
    }


const rockBtn = document.querySelector('#rockBtn');
rockBtn.addEventListener('click', () => {
    console.log("Rock was clicked");
    let vsRock = getComputerChoice();
    console.log(vsRock);

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
    console.log("computer score: " + computerScore);
    console.log("human score: " + humanScore);
    return alert(`Computer Score: ${computerScore}. Your Score: ${humanScore}.`);
});

const paperBtn = document.querySelector('#paperBtn');
paperBtn.addEventListener('click', () => {
    console.log("Paper was clicked");
    let vsPaper = getComputerChoice();
    console.log(vsPaper);

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
    console.log("computer score: " + computerScore);
    console.log("human score: " + humanScore);
    return alert(`Computer Score: ${computerScore}. Your Score: ${humanScore}.`);
});

const scissorsBtn = document.querySelector('#scissorsBtn');
scissorsBtn.addEventListener('click', () => {
    console.log("Scissors was clicked");
    let vsScissors = getComputerChoice();
    console.log(vsScissors);

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
    console.log("computer score: " + computerScore);
    console.log("human score: " + humanScore);
    return alert(`Computer Score: ${computerScore}. Your Score: ${humanScore}.`);
});