const readlineSync = require("readline-sync");


class Rectangle {

constructor (topLeftXPos, TopLeftYPos, width, length) {
    this.topLeftXPos = xPos;
    this.TopLeftYPos = yPoset;
    this.width = width;
    this.length = length;
}

collides(otherRectangle)  {
    this.otherRectangle = Rectangle1;
    if
        (Rectangle1.topLeftXPos < Rectangle2.topLeftXPos + Rectangle2.width &&
        Rectangle1.topLeftXPos + Rectangle1.width > Rectangle2.topLeftXPos &&
        Rectangle1.topLeftYPos < Rectangle2.topLeftYPos + Rectangle2.length &&
        Rectangle1.length + Rectangle1.topLeftYPos > Rectangle2.topLeftYPos)
        { 
               console.log(true);
        }
    else{
        console.log(false);
    }   
}  
}
const Rectangle1 = new Rectangle (9, 5, 8, 3);
console.log(Rectangle1);
const Rectangle2 = new Rectangle (6,5,8,3);
console.log(Rectangle2);
console.log(Rectangle2.collide(Rectangle1));

while (a <= 1000){
    a = a + 1;
    Rectangle3 = new Rectangle(
        Math.floor(Math.random()*100)+1,
        Math.floor(Math.random()*100)+1,
        Math.floor(Math.random()*100)+1,
        Math.floor(Math.random()*100)+1
    );
    console.log(Rectangle3);
    Rectangle3.collide(Rectangle1);
    }



//j'ai manqué de temps et de neurones pour celui ci // terminé enfinnnnnnn



//Exercice 6.3
//Créez un programme qui réutilisera la Rectangleclasse que vous avez créée précédemment.
// Il devrait générer 1000 instances Rectanglealéatoires avec des positions et des tailles aléatoires. 
//Ensuite, il affichera tous les rectangles en collision parmi ceux qui ont été générés de cette façon.