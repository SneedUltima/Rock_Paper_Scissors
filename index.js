function getComputerChoice() {
    // Randomly return Rock, Paper or Scissors
    const choices = ["Rock", "Paper", "Scissors"];
    const choice = choices[Math.floor(Math.random(2) * 3)];
    return choice.toLowerCase();
}

function capitalize(word) {
    capWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    return capWord
}

function playRound(playerSelection, computerSelection) {
    // playerSelection.toLowerCase();
    // computerSelection.toLowerCase();
    
    const playerWin = `You Win! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}!`;
    const computerWin = `The Computer Wins! ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}.`;
    const draw = "It's a draw."

    if (playerSelection.toLowerCase() === "rock") {
        if (computerSelection === "scissors") {
            return playerWin
        }
        else if(computerSelection === "paper") {
            return computerWin;
        }
        else if(computerSelection === "rock") {
            return draw;
        }
    }

    if (playerSelection.toLowerCase() === "scissors") {
        if (computerSelection === "paper") {
            return playerWin
        }
        else if(computerSelection === "rock") {
            return computerWin;
        }
        else if(computerSelection === "scissors") {
            return draw;
        }
    }

    if (playerSelection.toLowerCase() === "paper") {
        if (computerSelection === "rock") {
            return playerWin
        }
        else if(computerSelection === "scissors") {
            return computerWin;
        }
        else if(computerSelection === "paper") {
            return draw;
        }
    }

    else {
        "You must choose either Rock, Paper or Scissors";
    }
}

const playerSelection = "PaPER";
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));
