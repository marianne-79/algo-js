const  readlineSync = require("readline-sync");

let  one  =  new  Number (readlineSync.question(" Donnez moi un nombre entier s'il vous plait ? "));
let  two  =  new  Number (readlineSync.question(" Donnez - moi un autre nombre entier s'il vous plaît ? "));
let divi = one / two;
console.log(" Maitenant, on les divise e ca fait " + " " +divi + "!");




//Exercice 1.6
//Demander deux nombres entiers à l'utilisateur. Affiche le reste de la division entière des deux nombres.