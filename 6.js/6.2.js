const readlineSync = require("readline-sync");


class Rectangle {

constructor (topLeftXPos, TopLeftYPos, width, length) {
    this.topLeftXPos = xPos;
    this.TopLeftYPos = yPoset;
    this.width = width;
    this.length = length;
}

collides(otherRectangle)  {
if (this.x < otherRectangle.x + otherRectangle.width &&
    this.x + this.width > otherRectangle.x &&
    this.y < otherRectangle.y + otherRectangle.length &&
    this.length + this.y > otherRectangle.y ) {
        return true; 
        } else {
        return false;
}
}
}
let rect1 = new Rectangle(30, 35, 55, 75);
let rect2 = new Rectangle(105, 205, 4, 6);
let rect3 = new Rectangle(400, 400, 50, 60);
let rect4 = new Rectangle(400, 400, 50, 60);

console.log(rect1.collides(rect2));
console.log(rect3.collides(rect4));


/// je créer ma class Rectangle avec les attributs demandés dans l'ennoce. Ensuite je crée ma methode collides avec mon if
// trouvé aussi dans la doc MDN après je creer mes return tru et forcement false pour quand ca renvoi une collision
//après je crer ma console pour tester.
//Merci à mes collègues ( Eli, Evy et Dieu Adrien) qui grace à eux et à cette atelier interactif qui ma permis d'avancer sur mon code 
//car là today je suis en plein craquage , je ne comprends plus rien 
// Pour Dieu Adrien; il faudra creer une statue en son honneur !


//Exercice 6.2
//Créer un nom de classe Rectangle avec des attributs topLeftXPos, topLeftYPos, width et length. 
//Ajoutez une méthode nommée collides(otherRectangle)qui true ne renvoie que si le rectangle actuel entre en collision 
//avec otherRectangle.
//Testez la collides(otherRectangle)méthode en utilisant plusieurs cas de test.