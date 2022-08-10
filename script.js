const buttons = document.querySelectorAll("button")
const results = document.querySelector('#results')
const h2 = document.querySelector('h2')
const h3 = document.querySelector('h3')
const playerWeapon = document.querySelector('#playerChoice')
const computerWeapon = document.querySelector('#computerChoice')
const playerScore = document.querySelector('#playerScore')
const computerScore = document.querySelector('#computerScore')

let computerPoints = 0;
let playerPoints = 0;

function getComputerChoice() {
    let arr = ["rock", "paper", "scissors"]
    return arr[Math.floor(Math.random() * arr.length)]
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        let beats = {
            "rock": "scissors",
            "scissors": "paper",
            "paper": "rock"
        }

        let computerChoice = getComputerChoice();
        let playerChoice = button.getAttribute('id')

        if (computerChoice == playerChoice) {
            h2.style.color = '#28334aff'
            h2.textContent = "It's a tie!"
            h3.textContent = `${computerChoice} ties with ${playerChoice}`

            playerWeapon.src = `img/${playerChoice}.webp`
            computerWeapon.src = `img/${computerChoice}.webp`

        } else if (beats[playerChoice] == computerChoice) {
            h2.style.color = '#28334aff'
            h2.textContent = `You won!`;
            h3.textContent = `${playerChoice} beats ${computerChoice}`

            playerWeapon.src = `img/${playerChoice}.webp`
            computerWeapon.src = `img/${computerChoice}.webp`

            playerPoints++;
            playerScore.textContent = `player: ${playerPoints}`
            if (playerPoints == 5) {
                h2.style.color = 'green'
                h2.textContent = 'GAME OVER!'
                h3.textContent = "you've won"
                playerPoints = 0;
                computerPoints = 0;
                playerScore.textContent = 'player: 0'
                computerScore.textContent = 'computer: 0'
                playerWeapon.src = `img/question.png`
                computerWeapon.src = 'img/question.png'
            }
        } else {
            h2.style.color = '#28334aff'
            h2.textContent = `You lost!`;
            h3.textContent = `${computerChoice} beats ${playerChoice}`;

            playerWeapon.src = `img/${playerChoice}.webp`
            computerWeapon.src = `img/${computerChoice}.webp`

            computerPoints++;
            computerScore.textContent = `computer: ${computerPoints}`
            if (computerPoints == 5) {
                h2.style.color = 'red'
                h2.textContent = 'GAME OVER'
                h3.textContent = "you've lost"
                playerPoints = 0;
                computerPoints = 0;
                playerScore.textContent = 'player: 0'
                computerScore.textContent = 'computer: 0'
                playerWeapon.src = `img/question.png`
                computerWeapon.src = 'img/question.png'
            }
        }
    })
})
