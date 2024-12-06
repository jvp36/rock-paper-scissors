// variables
const $body = document.getElementById("body"); 
const $buttons = document.getElementById("buttons");
const $list = document.createElement("ul");
const $rock = document.getElementById("rock");
const $paper = document.getElementById("paper");
const $scissors = document.getElementById("scissors");
const $resultContainer = document.createElement("div");


let humanScore = 0;
let computerScore = 0;
let game = 0;

$resultContainer.appendChild($list);
$body.appendChild($resultContainer);
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
const playRound = (playerSelection, computerSelection) => {  
        
    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            return `You chose rock. Computer chose rock. This round is tied! ${humanScore} - ${computerScore}`
        } else if (computerSelection === "paper") {
            computerScore += 1;
            return `You chose rock. Computer chose paper. You lost! Paper beats rock. ${humanScore} - ${computerScore} `
        } else {
            humanScore += 1;
            return `You chose rock. Computer chose scissors. You won! Rock beats scissors. ${humanScore} - ${computerScore}`
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            humanScore += 1;
            return `You chose paper. Computer chose rock. You won! Paper beats rock. ${humanScore} - ${computerScore}`
        } else if (computerSelection === "paper") {
            return `You chose paper. Computer chose paper. This round is tied! ${humanScore} - ${computerScore}`
        } else {
            computerScore += 1;
            return `You chose paper. Computer chose scissors. You lost! Scissors beats paper. ${humanScore} - ${computerScore}`
        }
    } else {
        if (computerSelection === "rock") {
            computerScore += 1;
            return `You chose scissors. Computer chose rock. You lost! Rock beats scissors. ${humanScore} - ${computerScore}`
        } else if (computerSelection === "paper") {
            humanScore += 1;
            return `You chose scissors. Computer chose paper. You won! Scissors beats paper. ${humanScore} - ${computerScore}`
        } else {
            return `You chose scissors. Computer chose scissors. This round is tied! ${humanScore} - ${computerScore}`
        }
    }
}

// Events
$rock.addEventListener("click", () => {
    game += 1;
    $round = document.createElement("li");        
    let playerSelection = "rock";
    let computerSelection = getComputerChoice();
    $round.textContent = `Game ${game}: ${playRound(playerSelection, computerSelection)}`;
    $list.appendChild($round);
    if (humanScore === 5) {
        const $newGameBtn = document.createElement("button");
        $newGameBtn.textContent = "New Game" 
        const $resume = document.createElement("h2");
        $resume.textContent = `YOU WON! ${humanScore} - ${computerScore}.` 
        $resultContainer.appendChild($resume);
        $buttons.remove();
        $resultContainer.appendChild($newGameBtn);
        $newGameBtn.addEventListener("click", () => location.reload());
    } else if (computerScore === 5) {
        const $newGameBtn = document.createElement("button");
        $newGameBtn.textContent = "New Game" 
        const $resume = document.createElement("h2");
        $resume.textContent = `YOU LOST! ${humanScore} - ${computerScore}.`
        $resultContainer.appendChild($resume);
        $buttons.remove();
        $resultContainer.appendChild($newGameBtn);
        $newGameBtn.addEventListener("click", () => location.reload());
    }         
});
$paper.addEventListener("click", () => {
    game += 1;
    $round = document.createElement("li");
        
    let playerSelection = "paper";
    let computerSelection = getComputerChoice();
    $round.textContent = `Game ${game}: ${playRound(playerSelection, computerSelection)}`;
    $list.appendChild($round); 
    if (humanScore === 5) {
        const $newGameBtn = document.createElement("button");
        $newGameBtn.textContent = "New Game" 
        const $resume = document.createElement("h2");
        $resume.textContent = `YOU WON! ${humanScore} - ${computerScore}.` 
        $resultContainer.appendChild($resume);
        $buttons.remove();
        $resultContainer.appendChild($newGameBtn);
        $newGameBtn.addEventListener("click", () => location.reload());
    } else if (computerScore === 5) {
        const $newGameBtn = document.createElement("button");
        $newGameBtn.textContent = "New Game" 
        const $resume = document.createElement("h2");
        $resume.textContent = `YOU LOST! ${humanScore} - ${computerScore}.`
        $resultContainer.appendChild($resume);
        $buttons.remove();
        $resultContainer.appendChild($newGameBtn);
        $newGameBtn.addEventListener("click", () => location.reload());
    }   
});
$scissors.addEventListener("click", () => {
    game += 1;
    $round = document.createElement("li");
        
    let playerSelection = "scissors";
    let computerSelection = getComputerChoice();
    $round.textContent = `Game ${game}: ${playRound(playerSelection, computerSelection)}`;
    $list.appendChild($round); 
    if (humanScore === 5) {
        const $newGameBtn = document.createElement("button");
        $newGameBtn.textContent = "New Game" 
        const $resume = document.createElement("h2");
        $resume.textContent = `YOU WON! ${humanScore} - ${computerScore}.` 
        $resultContainer.appendChild($resume);
        $buttons.remove();
        $resultContainer.appendChild($newGameBtn);
        $newGameBtn.addEventListener("click", () => location.reload());
    } else if (computerScore === 5) {
        const $newGameBtn = document.createElement("button");
        $newGameBtn.textContent = "New Game" 
        const $resume = document.createElement("h2");
        $resume.textContent = `YOU LOST! ${humanScore} - ${computerScore}.`
        $resultContainer.appendChild($resume);
        $buttons.remove();
        $resultContainer.appendChild($newGameBtn);
        $newGameBtn.addEventListener("click", () => location.reload());
    }        
});





