const ROCK = 'rock';
const PAPER = 'paper';
const SCISSORS = 'scissors';

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

let humanScore = 0;
let computerScore = 0;

console.log(getHumanChoice());
