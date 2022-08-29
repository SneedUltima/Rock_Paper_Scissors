function getComputerChoice() {
    // Randomly return Rock, Paper or Scissors
    const choices = ["Rock", "Paper", "Scissors"];
    const choice = choices[Math.floor(Math.random(2) * 3)];
    return choice;
}

function playRound(playerSelection, computerSelection) {}