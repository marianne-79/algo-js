const readlineSync = require("readline-sync");


let rep = 0;

while (rep != 42) {
	rep = new Number(readlineSync.question("Quel est ton numero favorit ?"));
if (rep != 42) {
	console.log("t'es sur ?");
}
else { 
	console.log("c'est genial !");
 }	
	}

	
	//Exercice 2.5
	//Créez un programme qui demande le numéro favori de l'utilisateur. Si ce nombre est autre que 42, affichez
	// « Êtes-vous sûr ? » et demander à nouveau. (Ce programme ne devrait jamais se terminer tant que l'utilisateur 
	//n'a pas choisi 42).