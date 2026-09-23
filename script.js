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
// Store the computer's choice in a variable
const computerChoice = getComputerChoice();
console.log(computerChoice);