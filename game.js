// Function to get the computer's choice
function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }
  
  // Function to play a single round of Rock Paper Scissors
  function playRound(playerSelection, computerSelection) {
    // Make playerSelection case-insensitive
    playerSelection = playerSelection.toLowerCase();
  
    // Define possible outcomes for the game
    const outcomes = {
      rock: {
        winsAgainst: 'scissors',
        losesAgainst: 'paper'
      },
      paper: {
        winsAgainst: 'rock',
        losesAgainst: 'scissors'
      },
      scissors: {
        winsAgainst: 'paper',
        losesAgainst: 'rock'
      }
    };
  
    // Determine the outcome of the game
    if (playerSelection === computerSelection.toLowerCase()) {
      return "It's a tie!";
    } else if (outcomes[playerSelection].winsAgainst === computerSelection.toLowerCase()) {
      return `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
      return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
  }
  
  // Function to play a 5 round game of Rock Paper Scissors
  function game() {
    let playerScore = 0;
    let computerScore = 0;
  
    for (let i = 0; i < 5; i++) {
      const playerSelection = prompt("Choose Rock, Paper, or Scissors:");
      const computerSelection = getComputerChoice();
      const result = playRound(playerSelection, computerSelection);
      console.log(result);
  
      if (result.includes("win")) {
        playerScore++;
      } else if (result.includes("lose")) {
        computerScore++;
      }
    }
  
    if (playerScore > computerScore) {
      console.log(`You win the game! ${playerScore} to ${computerScore}`);
    } else if (computerScore > playerScore) {
      console.log(`You lose the game! ${computerScore} to ${playerScore}`);
    } else {
      console.log("It's a tie game!");
    }
  }
  


  
  