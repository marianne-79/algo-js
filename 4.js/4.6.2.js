const readlineSync = require("readline-sync");



function factorial(nbr) {

  let a = nbr;
  
    while (a > 1) {
      nbr *= a-1;
      a--;
    }
    return nbr;
  }

  console.log(factorial(2));



// Alors j'ai commencé par chercher la function factorielle et la fonction récursive.
// pour les 2 et cela agit comme une boucle, sur ce site j'ai trouvé ca que j'ai appliqué pour faire fonctionner le tout 
// Bon bein reste plus qu'a faire fonctionner tout ca 



//Exercice 4.6
//Créez une fonction factorial(a)qui renvoie la factorielle d'un nombre.
//Cette fonction doit être récursive.