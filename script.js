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
const h2 = document.querySelector('h2')
const h3 = document.querySelector('h3')
const playerWeapon = document.querySelector('#playerChoice')
const computerWeapon = document.querySelector('#computerChoice')

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
            h2.textContent = "It's a tie!"
            h3.textContent = `${computerChoice} ties with ${playerChoice}`
            playerWeapon.src = `img/${playerChoice}.webp`
            computerWeapon.src = `img/${computerChoice}.webp`

        } else if (beats[playerChoice] == computerChoice) {
            h2.textContent = `You won!`;
            h3.textContent = `${playerChoice} beats ${computerChoice}`

            playerWeapon.src = `img/${playerChoice}.webp`
            computerWeapon.src = `img/${computerChoice}.webp`

        } else {
            h2.textContent = `You lost!`;
            h3.textContent = `${computerChoice} beats ${playerChoice}`;

            playerWeapon.src = `img/${playerChoice}.webp`
            computerWeapon.src = `img/${computerChoice}.webp`

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