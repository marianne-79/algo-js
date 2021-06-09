const readlineSync = require("readline-sync");



let min = readlineSync.question(" Ecrit 1 chiffre minimum ? ");
let max = readlineSync.question(" Ecrit 1 chiffre maximum ? ");
let current = readlineSync.question(" Ecrit 1 chiffre entre les 2 ? ");

if (min > max){
	console.log(" nan , desole !");
}
else if ((current >= min) && (current <= max)) {
	console.log("c'est bon !");
}
else { console.log("c'est pas bon !");
}


