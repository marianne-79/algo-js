const readlineSync = require("readline-sync");



let age =  readlineSync.question("Quel est ton age ? ");

if ( age < 18){
	console.log("Vous n'êtes pas encore majeur");
}

else { console.log("Vous etes majeur");
}


