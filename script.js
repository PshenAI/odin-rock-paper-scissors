const ROCK = 'rock';
const PAPER = 'paper';
const SCISSORS = 'scissors';

const POINTS_TO_WIN = 5;

let humanScore = 0;
let computerScore = 0;

const buttons = document.querySelector(".buttons");
buttons.addEventListener('click', playButtonClick);

function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3)

    if(randomNum === 0) {
        return ROCK;
    } else if (randomNum === 1) {
        return PAPER;
    } else if (randomNum === 2) {
        return SCISSORS;
    }
}

function playRound(humanChoice, computerChoice) {
    const results = document.querySelector(".results");

    const roundResult = document.querySelector(".round-result");
    const gameResult = document.querySelector(".game-result");
    if((humanChoice === ROCK && computerChoice === SCISSORS) ||
        (humanChoice === SCISSORS && computerChoice === PAPER) ||
        (humanChoice === PAPER && computerChoice === ROCK)) {
        humanScore++;

        roundResult.textContent = `You win the round. ${humanChoice} beats ${computerChoice}. Pure luck.`;
    } else if(humanChoice === computerChoice) {
        roundResult.textContent = `Tie. Try again.`;
    } else {
        computerScore++;

        roundResult.textContent = `You lost the round. ${humanChoice} loses to ${computerChoice}. No luck huh?.`;
    }


    results.appendChild(gameResult);

    gameResult.textContent = `Current score is: \nYou: ${humanScore} \nComputer: ${computerScore}`;
    results.appendChild(gameResult)

    checkForWinner(results);
}

function playButtonClick(event) {
    const button = event.target;

    switch (button.className) {
        case 'r-button' :
            console.log('User chose rock!')
            playRound(ROCK, getComputerChoice());
            break;
        case 'p-button' :
            console.log('User chose paper!');
            playRound(PAPER, getComputerChoice());
            break;
        case 's-button' :
            console.log('User chose scissors!');
            playRound(SCISSORS, getComputerChoice());
            break;
    }
}

function checkForWinner(container) {
    if(humanScore === POINTS_TO_WIN || computerScore === POINTS_TO_WIN) {
        const prevResult = document.querySelector(".round-result");

        if(prevResult !== null) {
            prevResult.textContent = '';
        }

        if(humanScore === POINTS_TO_WIN) {
            const winnerPara = document.querySelector(".winner");
            winnerPara.textContent = "You've won! Congrats. Your luck is better than that of a computer."

            container.appendChild(winnerPara);
        } else if (computerScore === POINTS_TO_WIN) {
            const winnerPara = document.querySelector(".winner");
            winnerPara.textContent = "You've lost! Bruh. Your luck is worse than that of a computer."

            container.appendChild(winnerPara);
        }

        deactivateButtons();
    }

}

function deactivateButtons() {
    const buttons = document.querySelector(".buttons").querySelectorAll("button");

    buttons.forEach(button => {
        button.disabled = true;
    })
}



