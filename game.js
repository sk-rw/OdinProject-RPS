function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }
  
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


  
  