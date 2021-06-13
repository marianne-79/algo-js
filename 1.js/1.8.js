const  readlineSync = require("readline-sync");

let q1 = readlineSync.question(" Quelle est ta couleur preferee? plus que 6 questions ");
let q2 = readlineSync.question(" Quel age as-tu es répondre ? plus que 5 questions ");
let q3 = readlineSync.question(" Quel est ton fil d'horreur prefere ? plus que 4 questions à répondre.");
let q4 = readlineSync.question(" Quel est ton fruit prefere ? plus que 3 questions auxquelles répondre.");
let q5 = readlineSync.question(" Quel est ton sport prefere ? plus que 2 questions à répondre.");
let q6 = readlineSync.question(" As-tu des enfants ? plus que 1 question à répondre.");
let q7 = readlineSync.question(" Quel est ton personnage de Disney prefere ? Voila, c'est fini pour les questions !");


console.log(" Il était une fois, " + q7 + " qui faisait du " + q5 + " en " + q1 + " " + q2 + "fois par jour avec des " + q4 + " " + q6 + " c'est fou " + " et " + q3 + " va s'occuper de ca " + "!"); 


//Exercice 1.8
//Créez un "conteur".
//Posez des questions à l'utilisateur sur différentes choses. Stockez les résultats qu'il vous donne. 
//Affichez-les de manière à créer une histoire amusante !
//Bonus : lorsque vous posez des questions à l'utilisateur, il doit pouvoir voir combien de questions
//il lui reste à poser.