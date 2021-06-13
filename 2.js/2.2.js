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



//Exercice 2.2
//Demandez à l'utilisateur d'entrer trois chiffres : min, maxet current. 
//Afficher si currentest compris entre minet max.
//Bonus : si minest supérieur à max, affiche un message d'erreur pour expliquer à l'utilisateur qu'il ne comprend 
//rien puis quitte le programme. (Il ne doit pas poser d'autre question.)
//Bonus 2 : soyez poli dans les messages d'erreur. (facultatif)