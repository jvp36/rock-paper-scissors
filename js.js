// get computer choice

const getComputerChoice = function () {
    const options = ["rock", "paper", "scissors"];
    let num = Math.floor(Math.random()*3);
    return options[num];
}

console.log(getComputerChoice());