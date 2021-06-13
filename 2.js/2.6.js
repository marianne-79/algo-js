const readlineSync = require("readline-sync");


let nf = 0;

while (nf <= 7) {

let nf = new Number(readlineSync.question(" Choisit ton numero favorit entre 1 et 7 : "));

	if(nf == 1) { console.log("lundi");} 

	else if(nf ==2) { console.log("mardi") }
	else if(nf ==3) { console.log("mercredi") }
	else if(nf ==4) { console.log("jeudi") }
	else if(nf ==5) { console.log("vendredi") }
	else if(nf ==6) { console.log("samedi") }
	else if(nf ==7) { console.log("dimanche") }


	else { 

	break;
	}
}


//Exercice 2.6
//Faites un programme qui demande à l'utilisateur d'entrer un nombre entre 1 et 7. En fonction du nombre,
//affichez le jour de la semaine qui correspond. (1 => lundi, 2 => mardi, etc...)