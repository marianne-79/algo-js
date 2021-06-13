const readlineSync = require("readline-sync");



let age =  readlineSync.question("Quel est ton age ? ");

if ( age < 18){
	console.log("Vous n'êtes pas encore majeur");
}

else { console.log("Vous etes majeur");
}


//Exercice 2.1
//Demandez à l'utilisateur d'entrer son âge. Si son âge est d'au moins 18 ans, affichez "Vous êtes majeur". 
//Si ce n'est pas le cas, affichez "Vous n'êtes pas encore majeur".