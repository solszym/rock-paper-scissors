function getComputerChoice() {
    let arr = ["rock", "paper", "scissors"]
    return arr[Math.floor(Math.random() * arr.length)]
}

// function playRoundConsole() {
//     let beats = {
//         "rock": "scissors",
//         "scissors": "paper",
//         "paper": "rock"
//     }

//     let computerChoice = getComputerChoice();
//     let playerChoice = prompt("Rock, paper or scissors?");
//     playerChoice = playerChoice.toLowerCase();

//     while (!playerChoice.includes("rock") && !playerChoice.includes("paper") && !playerChoice.includes("scissors")) {
//         console.log("Invalid input!");
//         playerChoice = prompt("Rock, paper or scissors?");
//         playerChoice = playerChoice.toLowerCase();
//     }

//     if (computerChoice == playerChoice) {
//         return "It's a tie!"
//     } else if (beats[playerChoice] == computerChoice) {
//         return `You won! ${playerChoice} beats ${computerChoice}.`
//     } else {
//         return `You lost! ${computerChoice} beats ${playerChoice}.`
//     }
// }


// function playRound(button) {

//     let beats = {
//         "rock": "scissors",
//         "scissors": "paper",
//         "paper": "rock"
//     }

//     let computerChoice = getComputerChoice();
//     let playerChoice = button.getAttribute('id')
//     console.log(`your choice: ${playerChoice}`)

//     if (computerChoice == playerChoice) {
//         console.log("It's a tie!")
//     } else if (beats[playerChoice] == computerChoice) {
//         console.log(`You won! ${playerChoice} beats ${computerChoice}.`)
//     } else {
//         console.log(`You lost! ${computerChoice} beats ${playerChoice}.`)
//     }
// }

const buttons = document.querySelectorAll("button")
const results = document.querySelector('#results')

buttons.forEach(button => {
    button.addEventListener('click', () => {
        let beats = {
            "rock": "scissors",
            "scissors": "paper",
            "paper": "rock"
        }

        let computerChoice = getComputerChoice();
        let playerChoice = button.getAttribute('id')
        console.log(`your choice: ${playerChoice}`)

        if (computerChoice == playerChoice) {
            results.textContent = "It's a tie!"
            console.log("It's a tie!")
        } else if (beats[playerChoice] == computerChoice) {
            results.textContent = `You won! ${playerChoice} beats ${computerChoice}.`;
            console.log(`You won! ${playerChoice} beats ${computerChoice}.`)
        } else {
            results.textContent = `You lost! ${computerChoice} beats ${playerChoice}.`;
            console.log(`You lost! ${computerChoice} beats ${playerChoice}.`)
        }
    })
})

// const rock = document.querySelector("#rock")
// rock.addEventListener('click', () => {
//     let beats = {
//         "rock": "scissors",
//         "scissors": "paper",
//         "paper": "rock"
//     }

//     let computerChoice = getComputerChoice();
//     let playerChoice = "rock"

//     if (computerChoice == playerChoice) {
//         console.log("It's a tie!")
//     } else if (beats[playerChoice] == computerChoice) {
//         console.log(`You won! ${playerChoice} beats ${computerChoice}.`)
//     } else {
//         console.log(`You lost! ${computerChoice} beats ${playerChoice}.`)
//     }
// });

// const paper = document.querySelector("#paper")


// const scissors = document.querySelector("#scissors")



// function game() {
//     for (let i = 1; i <= 5; i++) {
//         console.log(`Round ${i}:`)
//         console.log(playRound());
//     }
// }

// console.log(game())