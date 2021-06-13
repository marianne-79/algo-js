const readlineSync = require("readline-sync");

let n = new Number (readlineSync.question("Donne moi un chiffre entre 1 et 10 : ")); 
let array = [] ; 

function rand10() {
    return Math.round(Math.random() *10);
    }
 
function multiRand(n) {
    for (i = 0; i <= n; i++) {
        array.push(rand10());  }
            return array }
console.log(multiRand(n));


// donc je prends ma function rand10 de l'exo 2 puis j'en créé une autre multiRand  "n"
// ensuite je créer un appel n avec ma Q et un appel array   en tableau comme demandé dans l'exo
//ensuite je créer mon return pour renvoyé a mon calcule de nombre aléaoir entre 1 et 10
//ensuite je créer mon for pour définir le max de mon n et le nombre de retour 
//puis e lui fais un push  avec un renvoi pour avoir plusieurs nombrepusher dans mon tableau au max de 10
//puis mon programme 

//MDN


//Exercice 4.3
//En réutilisant la fonction rand10()créée dans l'exercice 2, écrivez une fonction nommée multiRand(n)qui 
//renvoie un tableau de n nombres compris entre 1 et 10. Vous ne devez rien modifier rand10()pour y parvenir.
//Rédigez une documentation pour la multiRand(n)fonction.
//Utilisez cette fonction pour créer un programme qui demandera le nombre de nombres aléatoires à générer puis 
//affichera ce même nombre de nombres aléatoires.



