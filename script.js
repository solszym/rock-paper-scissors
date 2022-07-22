function getComputerChoice() {
    let arr = ["rock", "paper", "scissors"]
    return arr[Math.floor(Math.random() * arr.length)]
}

function singleRound() {
    let beats = {
        "rock": "scissors",
        "scissors": "paper",
        "paper": "rock"
    }

    let computerChoice = getComputerChoice();
    let playerChoice = prompt("Rock, paper or scissors?");
    playerChoice = playerChoice.toLowerCase();

    while (!playerChoice.includes("rock") && !playerChoice.includes("paper") && !playerChoice.includes("scissors")) {
        console.log("Invalid input!");
        playerChoice = prompt("Rock, paper or scissors?");
        playerChoice = playerChoice.toLowerCase();
    }

    if (computerChoice == playerChoice) {
        return "It's a tie!"
    } else if (beats[playerChoice] == computerChoice) {
        return `You won! ${playerChoice} beats ${computerChoice}.`
    } else {
        return `You lost! ${computerChoice} beats ${playerChoice}.`
    }
}

function game() {
    for (let i = 1; i <= 5; i++) {
        console.log(`Round ${i}:`)
        console.log(singleRound());
    }
}

console.log(game())