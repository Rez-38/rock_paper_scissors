console.log("Hello World!");

const rock = "Rock";
const paper = "Paper";
const scissors = "Scissors";

function getComputerChoice () {
    
    let choice = Math.floor(Math.random() * (3 - 1 + 1) + 1);
    
    if (choice === 1) {
        return rock.toLowerCase();
    } else if (choice === 2) {
        return paper.toLowerCase();
    } else if (choice === 3) {
        return scissors.toLowerCase();
    }
}

function getHumanChoice () {
    
    let tool = prompt("Choose your tool...", "rock, paper, scissors");
    
    if (!tool) {
        alert("You gotta choose something!");
        return null;
    }
    
    tool = tool.toLowerCase();
    
    if (tool === "rock") {
        alert(`You chose ${rock}`);
        return rock;
    } else if (tool === "paper") {
        alert(`You chose ${paper}`);
        return paper;
    } else if (tool === "scissors") {
        alert(`You chose ${scissors}`);
        return scissors;
    } else {
        alert("C'mon man, check your spelling... And don't type any nonsense!");
        return null;
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound (humanChoice, computerChoice) {

    //if (humanChoice === !null) {
    //    humanChoice = humanChoice.toLowerCase();
    //}
    humanChoice = humanChoice.toLowerCase();
    
    if (humanChoice === "rock" && computerChoice === "scissors") {
        alert("You win this round! Rock beats Scissors!");
        return ++humanScore;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        alert("You win this round! Paper beats Rock!");
        return ++humanScore;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        alert("You win this round! Scissors beat Paper!");
        return ++humanScore;
    } else if (humanChoice === computerChoice) {
        alert("We have a draw! You both chose the same tool!");
        return null;
    } else {
        alert("You lose...");
        return ++computerScore;
    }    
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);