// variables

let humanScore = 0;
let computerScore = 0;
// get computer choice

const getComputerChoice = function () {
    const options = ["rock", "paper", "scissors"];
    let num = Math.floor(Math.random()*3);
    return options[num];
}

// get human choice

const getHumanChoice = function () {
    let condition = true;
    while (condition) {
        let humanChoice = prompt ("Write rock, paper or scissors? ").toLowerCase();
        if (humanChoice.trim() === "rock" || humanChoice.trim() === "paper" || humanChoice.trim() === "scissors") {
            condition = false;
            return humanChoice.trim();
        } else {
            alert("You must write only one of the three options");
        }        
    }    
}

// play round function

const playRound = function (humanChoice, computerChoice) {
    computerChoice = getComputerChoice();
    humanChoice = getHumanChoice();
    if (humanChoice === "rock") {
        if (computerChoice === "rock") {
            return "You chose rock. Computer chose rock. This round is tied!"
        } else if (computerChoice === "paper") {
            computerScore += 1;
            return "You chose rock. Computer chose paper. You lost! Paper beats rock."
        } else {
            humanScore += 1;
            return "You chose rock. Computer chose scissors. You won! Rock beats scissors."
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            humanScore += 1;
            return "You chose paper. Computer chose rock. You won! Paper beats rock."
        } else if (computerChoice === "paper") {
            return "You chose paper. Computer chose paper. This round is tied!"
        } else {
            computerScore += 1;
            return "You chose paper. Computer chose scissors. You lost! Scissors beats paper."
        }
    } else {
        if (computerChoice === "rock") {
            computerScore += 1;
            return "You chose scissors. Computer chose rock. You lost! Rock beats scissors."
        } else if (computerChoice === "paper") {
            humanScore += 1;
            return "You chose scissors. Computer chose paper. You won! Scissors beats paper."
        } else {
            return "You chose scissors. Computer chose scissors. This round is tied!"
        }
    }
}

// play game function

const playGame = function () {
    let game = 1
    while (game < 6) {
        console.log(`Game ${game}: ${playRound()}`);
        game ++;
    }    
}
playGame();
console.log(`You won: ${humanScore}`);
console.log(`You lost: ${computerScore}`);
console.log(`You tied: ${Math.abs(5 - (humanScore + computerScore))}`);