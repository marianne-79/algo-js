const  readlineSync = require("readline-sync");

let  pointure  =  new  Number (readlineSync.question(" Quelle est votre pointure svp ? "));
let  an  =  new  Number (readlineSync.question(" Quelle est votre année de naissance svp ? "));
let rep1 = pointure * 2;
let rep2 = rep1 + 5;
let rep3 = rep2 * 50;
let rep4 = rep3 - an;
let rep5 = rep4 + 1766;


console.log("Maintenant, on multiplie votre pointure par 2 puis ajouter 5 puis on la multiplie par 50 puis on retire votre année de naissance et enfin on ajoute 1766 et ca fait " + " " + rep5 + "!");



//Exercice 1.7
//Demandez à l'utilisateur sa pointure et son année de naissance. Faites ensuite le calcul suivant :
//Multipliez la pointure par 2
//Ajouter 5 au résultat
//Multipliez cela par 50
//Soustraire l'année de naissance
//Ajouter 1766
//Testez avec votre année de naissance et votre pointure.