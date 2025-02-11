// console.log("Hello World");
function getComputerChoice() {
    const min = 0;
    const max = 3;
    let randomNumber = Math.random() * (max - min) + min;
    if (randomNumber >= 0 && randomNumber <= 1) {
        return "Rock";
    }
    else if (randomNumber < 1 && randomNumber <= 2) {
        return "Paper";
    }
    else {
        return "Scissor";
    }
}
function getHumanChoice() {
    let choice = prompt("Type your choice");
    choice = choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase();
    return choice;
}
let humanScore = 0, computerScore = 0;
function playGame() {
    for (let i = 0; i < 5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        if (humanSelection === "Rock" && computerSelection === "Paper") {
            console.log("Computer Wins");
            computerScore++;
        }
        if (humanSelection === "Rock" && computerSelection === "Rock") {
            console.log("Draw");
        }
        if (humanSelection === "Rock" && computerSelection === "Scissor") {
            console.log("Human Wins");
            humanScore++;
        }
        if (humanSelection === "Paper" && computerSelection === "Paper") {
            console.log("Draw");
        }
        if (humanSelection === "Paper" && computerSelection === "Rock") {
            console.log("Human Wins");
            humanScore++;
        }
        if (humanSelection === "Paper" && computerSelection === "Scissor") {
            console.log("Computer Wins");
            computerScore++;
        }
        if (humanSelection === "Scissor" && computerSelection === "Paper") {
            console.log("Human Wins");
            humanScore++;
        }
        if (humanSelection === "Scissor" && computerSelection === "Rock") {
            console.log("Computer wins");
            computerScore++;
        }
        if (humanSelection === "Scissor" && computerSelection === "Scissor") {
            console.log("Draw");
        }
    }
}
playGame();
console.log("Human Score is equal to " + humanScore)
console.log("Computer Score is equal to " + computerScore);
if (humanScore > computerScore) {
    console.log("Human Wins");
}
if (humanScore == computerScore) {
    console.log("Draw");
}
if (humanScore < computerScore) {
    console.log("Computer Wins");
}