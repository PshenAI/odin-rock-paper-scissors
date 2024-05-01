const ROCK = 'rock';
const PAPER = 'paper';
const SCISSORS = 'scissors';

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3)

    if(randomNum === 0) {
        return "rock";
    } else if (randomNum === 1) {
        return "paper";
    } else if (randomNum === 2) {
        return "scissors";
    }
}

function getHumanChoice() {

    let toggle = true;

    while(toggle) {
        const userInput = prompt('Enter your choice: ').toLowerCase();

        if(userInput === ROCK) {
            toggle = false;
            return "rock";
        } else if (userInput === PAPER) {
            toggle = false;
            return "paper";
        } else if (userInput === SCISSORS) {
            toggle = false;
            return "scissors";
        } else {
            console.log("Enter valid value! (rock | paper | scissors)");
        }
    }
}

function playRound(humanChoice, computerChoice) {
    if((humanChoice === ROCK && computerChoice === SCISSORS) ||
        (humanChoice === SCISSORS && computerChoice === PAPER) ||
        (humanChoice === PAPER && computerChoice === ROCK)) {
        humanScore++;
        console.log(`You win. ${humanChoice} beats ${computerChoice}. Pure luck.`)
    } else {
        computerScore++;
        console.log(`You lost. ${computerChoice} beats ${humanChoice}. No luck huh?.`)
    }
    console.log(`Current score is: \nYou: ${humanScore} \nComputer: ${computerScore}`);
    console.log('');
}

function playGame() {
    console.log(`Let the game begin! There will be a game of 5 rounds. Good luck!`);
    console.log('');
    let counter = 0;

    while(counter < 6) {
        console.log(`Round: ${counter}`)
        playRound(getHumanChoice(), getComputerChoice());
        counter++;
    }


    if(humanScore > computerScore) {
        console.log(`Game is finished! You've won. You're luckier than computer so far.`)
    } else {
        console.log(`Game is finished! You've lost. You're unluckier than computer. Bruh.`)
    }
}

playGame();


