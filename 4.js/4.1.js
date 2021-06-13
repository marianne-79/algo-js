const readlineSync = require("readline-sync");


let width = new Number(readlineSync.question("Donne moi la largeur d'un rectangle: ?"));
let height = new Number(readlineSync.question("Donne moi la longeur d'un rectangle: ?"));

function calcSurface(width, height) {
    return width * height;
  }
  
  console.log(calcSurface(width, height));

  // donc je met mon const readlineSync = require("readline-sync"); pour poser ma question et ensuite je créer mon appel 
  //aux q avec mon let puis je créer ma fonction demandée dans l'exo pour avoir ma largeur et ma longeur , 
  //ensuite j'utilise une instruction return pour definir la valeur à retourner et puis je créer mon programme 
  //avec la console 
  
  // MDN


//Exercice 4.1
//Créez une fonction nommée calcSurfacequi prend la longueur et la largeur d'un rectangle et renvoie sa surface. 
//Créez ensuite un programme qui demande la longueur et la largeur d'un rectangle à l'utilisateur puis 
//affiche la surface de ce rectangle. Ce programme doit utiliser la fonction que vous avez créée.
//Rédigez une documentation pour la calcSurfacefonction.  