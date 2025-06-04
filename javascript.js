console.log("Hello World!");

function getComputerChoice () {
    const rock = "Rock";
    const paper = "Paper";
    const scissors = "Scissors";
    
    let choice = Math.floor(Math.random() * (3 - 1 + 1) + 1);

    if (choice === 1) {
        return rock;
    } else if (choice === 2) {
        return paper;
    } else if (choice === 3) {
        return scissors;
    }
}

console.log(getComputerChoice());