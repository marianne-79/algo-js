const readlineSync = require("readline-sync");


let n = new Number(readlineSync.question("tape un numero compris entre 1 et 5 : ?"));

let total = 0;

for (let i = 0; i < n; i++) {
	num = new Number(readlineSync.question("tape ton numero favori entre 1 et 5 que tu n'as pas encore ecrit ?"));
	total = total + num;

}  console.log(total);

// Pierre j'espere que tu ne regarde pas l'orthographe














