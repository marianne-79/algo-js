const readlineSync = require("readline-sync");

function factorial (nbr)
{
    if (nbr === 0 )
{ 
    return 1; 
}
return nbr * factorial (nbr-1);

}

console.log(factorial(6));






//



//Exercice 4.6
//Créez une fonction factorial(a)qui renvoie la factorielle d'un nombre.
//Cette fonction doit être récursive.