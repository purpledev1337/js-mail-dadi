// Generate a random number (from 1 to 6) for the player
let userNumber = Math.floor(Math.random() * 6) + 1;
console.log("Numero dell'utente:", userNumber);

// Generate a random number (from 1 to 6) for the computer
let comNumber = Math.floor(Math.random() * 6) + 1;
console.log("Numero del computer:", comNumber);

// Check who has the higher number.

if (userNumber > comNumber) {
    console.log("Complimenti, hai vinto!");
} else if (comNumber > userNumber) {
    console.log("Peccato, hai perso!");
} else if (comNumber = userNumber) {
    console.log("Incredibile, è un pareggio!");
}
// Print the winner.
