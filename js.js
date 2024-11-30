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
        let humaChoice = prompt ("Write rock, paper or scissors? ").toLowerCase();
        if (humaChoice.trim() === "rock" || humaChoice.trim() === "paper" || humaChoice.trim() === "scissors") {
            condition = false;
            return humaChoice.trim();
        } else {
            alert("You must write only one of the three options");
        }        
    }    
}
console.log(getComputerChoice());
console.log(getHumanChoice());