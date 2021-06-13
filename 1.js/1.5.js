const  readlineSync = require("readline-sync");

let  one  =  new  Number (readlineSync.question(" Donnez moi un premier nombre avec une décimale ? "));
let  two  =  new  Number (readlineSync.question(" Donnez moi un second nombre toujours avec une décimale. ? "));
let multi = Math.trunc(one) * two;


console.log (" maintenant, on multiplie les 2 en supprimant la partie decimale et ca fait" + " " + multi + "!");




//Demandez à l'utilisateur deux nombres avec une partie décimale. Pour le premier ne gardez que la partie entière.
// Ensuite, multipliez-les et affichez le résultat.
//Il vous faudra effectuer une recherche sur Google pour savoir ne garder que la partie entière d'un nombre.