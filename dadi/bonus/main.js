// Generate a random number (from 1 to 6) for the player
let userNumber = Math.floor(Math.random() * 6) + 1;
console.log("Numero dell'utente:", userNumber);

// Generate a random number (from 1 to 6) for the computer
let comNumber = Math.floor(Math.random() * 6) + 1;
console.log("Numero del computer:", comNumber);

// variables to insert values in the HTML
const playerBoard = document.getElementById("player_number");
const computerBoard = document.getElementById("computer_number");
const resultBoard = document.getElementById("result_board");

// Print the numbers in the HTML
playerBoard.append(userNumber);
computerBoard.append(comNumber);

// Check who has the higher number.
// Print the winner.
if (userNumber > comNumber) {
    resultBoard.append("Congratulations! You won!");
    resultBoard.classList.add("win");
} else if (comNumber > userNumber) {
    resultBoard.append("That's unfortunate..you lost!");
    resultBoard.classList.add("loss");
} else if (comNumber = userNumber) {
    resultBoard.append("It's a draw! Play again!");
    resultBoard.classList.add("draw");
}


