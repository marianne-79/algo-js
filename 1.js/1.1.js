const readlineSync = require("readline-sync");

let userName = readlineSync.question('Pouvez-vous me donner votre nom svp ?');
console.log("Bonjour" + userName);