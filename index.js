////////**** GAME LOGIC ****/////////

// Randomly return Rock, Paper or Scissors
function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const choice = choices[Math.floor(Math.random(2) * 3)];
    return choice.toLowerCase();
}

// Player Scores
let playerCount = 0;
let computerCount = 0;

// Logic on who wins each round based on player decision and providing result
function playRound(playerSelection, computerSelection) {
    
    const playerWin = `You Win This Round! ${playerSelection} beats ${computerSelection}!`;
    const computerWin = `The Computer Wins This Round! ${computerSelection} beats ${playerSelection}.`;
    const draw = "This round is a draw."

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

// Displays winner and clears game if score equals 5
function gameWinner() {
    const playerWon = `You won the game with ${playerCount} ${playerCount > 1 ? "points" : "point"}`;
    const computerWon = `The Computer won the game with ${computerCount} ${computerCount > 1 ? "points" : "point"}`;

    if (playerCount >= 5) {
        playerCount ++;
        showModal(playerWon)
        clearGame()
        showBlur()
    }
    else if(computerCount >=5 ) {
        computerCount ++;
        showModal(computerWon)
        clearGame()
        showBlur()
    }
}


////////**** DOM MANIPULATION ****/////////
const rockBtn = document.querySelector("#rock-btn");
const paperBtn = document.querySelector("#paper-btn");
const scissorsBtn = document.querySelector("#scissors-btn");
const resultContainer = document.querySelector(".results")
let playerScore = document.querySelector("#playerScore")
let computerScore = document.querySelector("#computerScore")

function showResult(choice)  {
    let result = playRound(choice, getComputerChoice())
    return result;
}

function createElement(result) {
    removeAllChildNodes(resultContainer)
    const presentResult = document.createElement("p");
    presentResult.textContent = (result)
    resultContainer.appendChild(presentResult);
}

rockBtn.addEventListener("click", () => {
    result = showResult("Rock")
    createElement(result)
    updateScore();
})

paperBtn.addEventListener("click", () => {
    result = showResult("Paper")
    createElement(result)
    updateScore();
})

scissorsBtn.addEventListener("click", () => {
    result = showResult("Scissors")
    createElement(result)
    updateScore();
})

function updateScore() {
    playerScore.textContent = `Player Score: ${playerCount}`
    computerScore.textContent = `Computer Score: ${computerCount}`
    gameWinner();
}

function clearGame() {
    playerCount = 0;
    computerCount = 0;
    playerScore.textContent = `Player Score: ${playerCount}`
    computerScore.textContent = `Computer Score: ${computerCount}`
    removeAllChildNodes(resultContainer)
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}


////////**** MODAL ALERT ****/////////
const bodyContainer = document.getElementById("body-container")
const modalContainer = document.getElementById("modal-container")
const close = document.getElementById("close")
const modalResult = document.getElementById("modal-result")

function showModal(winner) {
    modalContainer.classList.add("show")
    modalResult.textContent = `${winner}`
}

function closeModal() {
    modalContainer.classList.remove("show")
}

function showBlur() {
    bodyContainer.classList.add("show")
}

close.addEventListener("click", () => {
    closeModal()
})