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
        return "You won!"
    } else {
        return "You lost!"
    }

}

console.log(playGame("rock"));