function getComputerChoice() {
    // Randomly return Rock, Paper or Scissors
    const choices = ["Rock", "Paper", "Scissors"];
    const choice = choices[Math.floor(Math.random(2) * 3)];
    return choice.toLowerCase();
}

let playerCount = 0;
let computerCount = 0;

function playRound(playerSelection, computerSelection) {
    
    const playerWin = `You Win This Round! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}!`;
    const computerWin = `The Computer Wins This Round! ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}.`;
    const draw = "This round is a draw"

    if (playerSelection.toLowerCase() === "rock") {
        if (computerSelection === "scissors") {
            playerCount ++;
            return playerWin;
        }
        else if(computerSelection === "paper") {
            computerCount ++;
            return computerWin;
        }
        else if(computerSelection === "rock") {
            return draw;
        }
    }

    if (playerSelection.toLowerCase() === "scissors") {
        if (computerSelection === "paper") {
            playerCount ++;
            return playerWin
        }
        else if(computerSelection === "rock") {
            computerCount ++;
            return computerWin;
        }
        else if(computerSelection === "scissors") {
            return draw;
        }
    }

    if (playerSelection.toLowerCase() === "paper") {
        if (computerSelection === "rock") {
            playerCount ++;
            return playerWin
        }
        else if(computerSelection === "scissors") {
            computerCount ++;
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

// const computerSelection = getComputerChoice();

function game() {
    for (let i = 0; i < 5; i++) {
        let computerSelection = getComputerChoice();
        let playerSelection = prompt("Choose either Rock, Paper or Scissors: ");
        console.log(playRound(playerSelection, computerSelection));
    }
    gameWinner();
}

function gameWinner() {
    const playerWon = `You won the game with ${playerCount} ${playerCount > 1 ? "points" : "point"}`;
    const computerWon = `The Computer won the game with ${computerCount} ${computerCount > 1 ? "points" : "point"}`;
    const gameDraw = `The game was a draw with both points being equal`;

    if (playerCount > computerCount) {
        return alert(playerWon);
    }
    else if(playerCount < computerCount) {
        return alert(computerWon);
    }
    else if(playerCount === computerCount) {
        return alert(gameDraw)
    }

}

function capitalize(word) {
    capWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    return capWord
}

game();