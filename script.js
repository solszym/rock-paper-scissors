function getComputerChoice() {
    let arr = ["rock", "paper", "scissors"]
    return arr[Math.floor(Math.random() * arr.length)]
}

function playGame(playerChoice, computerChoice = getComputerChoice()) {
    console.log(`computer: ${computerChoice}`)
    playerChoice = playerChoice.toLowerCase();

    let rules = {
        "rock": "scissors",
        "scissors": "paper",
        "paper": "rock"
    }

    if (computerChoice == playerChoice) {
        return "It's a tie!"
    } else if (rules[playerChoice] == computerChoice) {
        return `You won! ${playerChoice} beats ${computerChoice}.`
    } else {
        return `You lost! ${computerChoice} beats ${playerChoice}.`
    }
}

console.log(playGame("rock"));