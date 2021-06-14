const readlineSync = require("readline-sync");


class Circle {

    constructor(xPos, yPoset, radius) {
        this.xPos = xPos;
        this.yPoset = yPoset;
        this.radius = radius;
    }

move (xOffset, yOffset) {
        this.xPos += xOffset;
        this.yPoset += yOffset;
}

get surface() {
return Math.PI * Math.pow(this.radius, 2 );
 }
}

let circle = new Circle(1, 3, 18);


console.log( " xPos : " + circle.xPos + " yPoset : " + circle.yPoset + " radius : " + circle.radius + " surface : " + circle.surface);
circle.move(4 , 5);
console.log( " xPos : " + circle.xPos + " yPoset : " + circle.yPoset + " radius : " + circle.radius + " surface : " + circle.surface);  



// je créer ma class Circle avec les attributs demandés dans l'ennoce. Ensuite je crée mon move avec les 2 noms demandés 
// comme mis dans la doc MND et après je fait mon assenceur comme mis dans ta doc.
// après une recherche dans tout les Math. sur MDN ; j'ai pris le Math.PI car c'est celui représente le ratio 
//entre le perimètre d'un cercle et son diametre.
//Merci à Adrien car il m'a expliqué tant bien que mal le pq mon code ne fonctionnais pas , j'avais pas compris qu'il manquait 
//un partie de mon calcule le Math.pow et je n'avait pas mis mes argument et mes texte dans le bon sens et mon move 
//ne fonctionnais pas car je n'avait pas compris que je devais mettre 

//Exercice 6.1
//Créez une classe nommée Circle avec les attributs xPos, yPoset radius. Ajoutez une méthode nommée move
//(xOffset, yOffset)qui ajustera la position du cercle. Ajoutez un accesseur getter nommé surface qui renverra 
//la surface du cercle.
//Testez sa méthode et ses accesseurs en modifiant les valeurs et en vérifiant si tout est bon.