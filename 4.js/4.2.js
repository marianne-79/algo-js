const readlineSync = require("readline-sync");

let rand10 = Math.round(Math.random() * 10); 

function rand10() {
    return Math.round(Math.random() *10);
    }
console.log(rand10);




// je créer ma function 
//je prends Math.round pour renvoyer un nombre entier
// je prends Math.random pour renvoyer un nombre flottant avec une multi qui rend max 10
// puis création prog pour afficher la réponse 


//MDN



//Exercice 4.2
//Créez une fonction nommée rand10()qui renvoie un entier aléatoire compris entre 1 et 10. 
//Créez un programme qui affichera le résultat de cette fonction à chaque exécution.
//Rédigez une documentation pour la rand10()fonction.
//Vous devrez rechercher sur Google comment générer des nombres aléatoires en JavaScript pour cet exercice.