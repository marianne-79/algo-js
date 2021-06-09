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

	
