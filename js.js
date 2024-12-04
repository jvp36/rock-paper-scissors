// variables
const $body = document.getElementById("body"); 
const $resultContainer = document.createElement("div");
const $list = document.createElement("ul");
const $rock = document.getElementById("rock");
const $paper = document.getElementById("paper");
const $scissors = document.getElementById("scissors");

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
            return "You chose rock. Computer chose rock. This round is tied!"
        } else if (computerSelection === "paper") {
            computerScore += 1;
            return "You chose rock. Computer chose paper. You lost! Paper beats rock."
        } else {
            humanScore += 1;
            return "You chose rock. Computer chose scissors. You won! Rock beats scissors."
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            humanScore += 1;
            return "You chose paper. Computer chose rock. You won! Paper beats rock."
        } else if (computerSelection === "paper") {
            return "You chose paper. Computer chose paper. This round is tied!"
        } else {
            computerScore += 1;
            return "You chose paper. Computer chose scissors. You lost! Scissors beats paper."
        }
    } else {
        if (computerSelection === "rock") {
            computerScore += 1;
            return "You chose scissors. Computer chose rock. You lost! Rock beats scissors."
        } else if (computerSelection === "paper") {
            humanScore += 1;
            return "You chose scissors. Computer chose paper. You won! Scissors beats paper."
        } else {
            return "You chose scissors. Computer chose scissors. This round is tied!"
        }
    }
}

// Events
$rock.addEventListener("click", () => {
    game += 1;
    $round = document.createElement("li");
    $roundBtn = document.createElement("button");
    $roundBtn.textContent = "Stop game";    
    let playerSelection = "rock";
    let computerSelection = getComputerChoice();
    $round.textContent = `Game ${game}: ${playRound(playerSelection, computerSelection)}`;
    $round.appendChild($roundBtn);
    $list.appendChild($round);
    $roundBtn.addEventListener("click", () => {
        $resume = document.createElement("h2");
        $resume.textContent = `You won ${humanScore} raunds, you lost ${computerScore} and ${game -(humanScore + computerScore)} tied.`
        $resultContainer.appendChild($resume); 
    })   
});
$paper.addEventListener("click", () => {
    game += 1;
    $round = document.createElement("li");
    $roundBtn = document.createElement("button");
    $roundBtn.textContent = "Stop game";    
    let playerSelection = "paper";
    let computerSelection = getComputerChoice();
    $round.textContent = `Game ${game}: ${playRound(playerSelection, computerSelection)}`;
    $round.appendChild($roundBtn);
    $list.appendChild($round);
    $roundBtn.addEventListener("click", () => {
        $resume = document.createElement("h2");
        $resume.textContent = `You won ${humanScore} raunds, you lost ${computerScore} and ${game -(humanScore + computerScore)} tied.`
        $resultContainer.appendChild($resume); 
    })
});
$scissors.addEventListener("click", () => {
    game += 1;
    $round = document.createElement("li");
    $roundBtn = document.createElement("button");
    $roundBtn.textContent = "Stop game";    
    let playerSelection = "scissors";
    let computerSelection = getComputerChoice();
    $round.textContent = `Game ${game}: ${playRound(playerSelection, computerSelection)}`;
    $round.appendChild($roundBtn);
    $list.appendChild($round);
    $roundBtn.addEventListener("click", () => {
        $resume = document.createElement("h2");
        $resume.textContent = `You won ${humanScore} raunds, you lost ${computerScore} and ${game -(humanScore + computerScore)} tied.`
        $resultContainer.appendChild($resume); 
    })    
});


