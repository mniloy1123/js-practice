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

  if (formatPlayerSelection === "Rock" && computerSelection === "Scissors") {
    return "You Win! Rock beats Scissors";
  } else if (formatPlayerSelection === "Rock" && computerSelection === "Paper") {
    return "You Lose! Paper beats Rock";
  } else if (formatPlayerSelection === "Paper" && computerSelection === "Rock") {
    return "You Win! Paper beats Rock";
  } else if (formatPlayerSelection === "Paper" && computerSelection === "Scissors") {
    return "You Lose! Scissors beats Paper";
  } else if (formatPlayerSelection === "Scissors" && computerSelection === "Paper") {
    return "You Win! Scissors beats Paper";
  } else if (formatPlayerSelection === "Scissors" && computerSelection === "Rock") {
    return "You Lose! Rock beats Scissors";
  } else if (formatPlayerSelection === computerSelection) {
    return "It's a draw!"
  }
};

const playerSelection = "paper";
console.log(`Player Selection: ${playerSelection}`);
const computerSelection = getComputerChoice();
console.log(`Computer Selection: ${computerSelection}`);
console.log(playRound(playerSelection, computerSelection));
