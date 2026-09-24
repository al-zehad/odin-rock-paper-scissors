// Create a new function named getComputerChoice to get the computer's choice.
// Write the code so that getComputerChoice will randomly return one of the following string values: “rock”, “paper” or “scissors”.
function getComputerChoice() {
  // Generate a random number between 0 to 2(including) to assign them 3 different choices
  const choiceNumber = Math.floor(Math.random() * 3);
  // Create a variable without assigning a value to assign it a value based on the generated number
  let computerChoice;
  // Assign the choice value based on the conditions to previously initialized variable to store the computer's choice
  if (choiceNumber === 0) {
    computerChoice = "rock";
  } else if (choiceNumber === 1) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
  // Finally return the value of computer's choice
  return computerChoice;
}

// Create a new function named getHumanChoice.
// Write the code so that getHumanChoice will return one of the valid choices depending on what the user inputs.
function getHumanChoice(humanInput) {
  return humanInput.toLowerCase();
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  // Function to play a single round
  function playRound(computerChoice, humanChoice) {
    if (
      (humanChoice === "rock" && computerChoice === "rock") ||
      (humanChoice === "paper" && computerChoice === "paper") ||
      (humanChoice === "scissors" && computerChoice === "scissors")
    ) {
      console.log("TIE!");
      return "TIE";
    } else if (humanChoice === "rock" && computerChoice === "paper") {
      console.log("You lost! Paper beats Rock");
      return "Computer Wins";
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
      console.log("You win! Rock beats scissors");
      return "Human Wins";
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      console.log("You win! Paper beats Rock");
      return "Human Wins";
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
      console.log("You lost! Scissors beats paper");
      return "Computer Wins";
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
      console.log("You lost! Rock beats Scissors");
      return "Computer Wins";
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      console.log("You win! Scissors beats Paper");
      return "Human Wins";
    }
  }

  // Loop 5 times to play 5 rounds
  for (let i = 0; i < 5; i++) {
    // Store the human's choice in a variable
    const humanInput = prompt("Enter your choice: rock, paper, or scissors");
    const humanChoice = getHumanChoice(humanInput);

    // Store the computer's choice in a variable
    const computerChoice = getComputerChoice();
    console.log(`Computer's Choice: ${computerChoice}`);

    console.log(`Your Choice: ${humanChoice}`);

    const result = playRound(computerChoice, humanChoice);

    // Increase scores according to the round result
    if (result === "Human Wins") {
      humanScore++;
    } else if (result === "Computer Wins") {
      computerScore++;
    } else {
      humanScore++;
      computerScore++;
    }

    console.log(`Your Score: ${humanScore}, Computer's Score: ${computerScore}`);
    console.log("============================");
  }

  // Return final result based on final scores
  if (humanScore > computerScore) {
    return `You win the game! Final Score: ${humanScore}:${computerScore}`;
  } else if (computerScore > humanScore) {
    return `You lost the game! Final Score: ${humanScore}:${computerScore}`;
  } else {
    return `TIE! Final Score: ${humanScore}:${computerScore}`
  }
}

// Call the playGame function and store the final result in a variable and print the result to the console.
const finalResult = playGame();
console.log(finalResult);