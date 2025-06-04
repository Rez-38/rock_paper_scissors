console.log("Hello World!");

const rock = "Rock";
const paper = "Paper";
const scissors = "Scissors";

function getComputerChoice () {
    
    let choice = Math.floor(Math.random() * (3 - 1 + 1) + 1);

    if (choice === 1) {
        return rock;
    } else if (choice === 2) {
        return paper;
    } else if (choice === 3) {
        return scissors;
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

console.log(getHumanChoice());