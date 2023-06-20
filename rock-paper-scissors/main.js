function getComputerChoice() {
    let v = Math.random() * 3;
    if (v < 1) return "rock";
    else if (v < 2) return "paper";
    else return "scissor";
}

function playRound(playerSelection, computerSelection) {
    let p = playerSelection.toLowerCase();
    let c = computerSelection;
    if (c == "rock" && p == "paper") console.log("You win! paper beats rock");
    else if (c == "rock" && p == "scissor") console.log("You Loose! rock beats scissor");
    else if (c == "rock" && p == "rock") console.log("Draw! you both choose rock");
    else if (c == "paper" && p == "rock") console.log("You Loose! paper beats rock");
    else if (c == "paper" && p == "scissor") console.log("You Win! scissor beats paper");
    else if (c == "paper" && p == "paper") console.log("Draw! you both choose paper");
    else if (c == "scissor" && p == "rock") console.log("You win! rock beats scissor");
    else if (c == "scissor" && p == "paper") console.log("You Loose! scissor beats paper");
    else if (c == "scissor" && p == "scissor") console.log("Draw! you both choose scissor");
    else console.log("Invalid inputs");
}

function game(n) {
    for (let i = 0; i < n; i++){
        const playerSelection = prompt("Enter your choice: ");
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    }
}