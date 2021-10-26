// Create the email list manually

const emailList = ["andrea@gmail.com", "marco@gmail.com", "luca@gmail.com", "stefano@gmail.com", "giovanni@gmail.com"];

// Ask the user for the email

const userEmail = prompt("Inserisci la tua email:");

console.log(userEmail);
console.log(emailList);

// Check if the mail is in the created mail list
// Print a message based on the check result

for (i = 0; i < emailList.length; i++) {
    if (userEmail == emailList[i]) {
        console.log("La tua mail è valida!");
    }
}


