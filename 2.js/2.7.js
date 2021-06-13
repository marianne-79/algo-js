const readlineSync = require("readline-sync");


let n = new Number(readlineSync.question("tape un numero compris entre 1 et 5 : ?"));

let total = 0;

for (let i = 0; i < n; i++) {
	num = new Number(readlineSync.question("tape ton numero favori entre 1 et 5 que tu n'as pas encore ecrit ?"));
	total = total + num;

}  console.log(total);

// Pierre j'espere que tu ne regarde pas l'orthographe

//Exercice 2.7
//Créez un programme qui demande à l'utilisateur d'entrer un numéro nommé n. Puis demandez-lui le ntemps 
//de saisir un nouveau numéro. A la fin afficher la somme de tous les nombres collectés de cette façon.
//Exemple : Si l'utilisateur saisit 3pour nthen 1, 2et 3, le programme doit afficher 6.












