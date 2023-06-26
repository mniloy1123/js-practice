getComputerChoice = () => {
  const randomNum = Math.random();
  if (randomNum < 0.33) return "Rock";
  else if (randomNum < 0.66) return "Paper";
  else return "Scissors";
};

playRound = (playerSelection, computerSelection) => {
  const formatPlayerSelection =
    playerSelection.charAt(0).toUpperCase() +
    playerSelection.slice(1).toLowerCase();

  if (formatPlayerSelection === computerSelection) {
    return "It's a Draw!";
  } else if (
    (formatPlayerSelection === "Rock" && computerSelection === "Scissors") ||
    (formatPlayerSelection === "Paper" && computerSelection === "Rock") ||
    (formatPlayerSelection === "Scissors" && computerSelection === "Paper")
  ) {
    return `You Win! ${formatPlayerSelection} beats ${computerSelection}`;
  }
  return `You Lose! ${computerSelection} beats ${formatPlayerSelection}`;
};

game = () => {
  let countPlayerWins = 0;
  let countComputerWins = 0;
  for (i = 0; i < 5; i++) {
    const playerSelection = prompt("Rock, Paper, or Scissors?:" );
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);

    console.log(`Round ${i + 1} - Player Selection: ${playerSelection}`);
    console.log(`Round ${i + 1} - Computer Selection: ${computerSelection}`);
    console.log(`Round ${i + 1} - ${result}`);

    if (result.includes("You Win!")) countPlayerWins++;
    else if (result.includes("You Lose!")) countComputerWins++;
  }
  console.log(`Player wins: ${countPlayerWins}`);
  console.log(`Computer wins: ${countComputerWins}`)
  
  if (countPlayerWins > countComputerWins) {
    console.log("You won the game!");
  } else if (countPlayerWins < countComputerWins) {
    console.log("Computer won the game!");
  } else {
    console.log("The game is a draw!");
  }

};

console.log(game());
