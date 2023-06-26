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

const playerSelection = "paper";
console.log(`Player Selection: ${playerSelection}`);
const computerSelection = getComputerChoice();
console.log(`Computer Selection: ${computerSelection}`);
console.log(playRound(playerSelection, computerSelection));
