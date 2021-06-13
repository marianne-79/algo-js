const readlineSync = require("readline-sync");


let x1 = new Number(readlineSync.question("Donnez- moi un premier numero ? "));
let x2 = new Number(readlineSync.question("Donnez-moi un second numero ? "));
let y1 = new Number(readlineSync.question("Encore un ? "));
let y2 = new Number(readlineSync.question(" et enfin un dernier ? "));


let a = [x1, y1];
let b = [x2, y2];

function calcDistance(a, b) {

let xab = Math.pow((b[0] - a[0]), 2);
let yab = Math.pow((b[1] - a[1]), 2);
    return tot = Math.sqrt(xab + yab);
}


console.log(calcDistance(a, b));

// Comme signalé dans l'nnonce , j'ai ete voir sur le et pour le calcule et je me suis rappelee pq j'aimais pas les math !
// mais bon je trouvé plusieurs sites et puis je suis allée sur youtubes pour regarder et me rappeler ce fameux pythagore
//et après je me suis encore arraché les cheveux pour l'appliquer. j'ai aussi demandé de l'aide à mes super collègues car après toutes ces
// videos , je ne savais pas comment l'appliquer en js

// bon après des pleures, je créer mes let avec mes x et y, ma function et poser mes questions 
// après encore des pleures et avoir ingurjité d'autre vidéos et sites
//ensuite je retourn voir mes collègues pour m'aider et elles m'aiguille sur les fonctions math et conseil que je regarde 
//celui qui conviendrait le mieux...
// je me reprends un peu et je continue , je créer mon return pour renvoyer mon calcule tant bien que mal à mon a et b .
// et après une centaine d'essai je trouve enfin las olution et la j'en peux plus...
//je me pose bcp de questions sur moi mmeme ...


//Exercice 4.5
//Créez une fonction nommée calcDistancequi prend les coordonnées de deux points différents A et B dans un espace 2D.
// Cette fonction doit renvoyer la distance entre ces deux points.
//Exemples de résultats :
//Point A = [1, 1], point B = [2, 2] => 1,41
//Point A = [1, 1], point B = [3, 1] => 2
//Point A = [4, 1], point B = [1, 1] => 3
//Point A = [-2, 2], point B = [2, -2] => 5,65
//Créez un programme pour utiliser cette fonction.
//Rédigez une documentation pour la calcDistancefonction.
//Remarque : Vous devrez probablement effectuer des recherches sur Google pour connaître la formule mathématique 
//permettant de le faire. Vous aurez aussi probablement besoin de rechercher des fonctions utiles en JavaScript 
//pour vous aider à faire des formules mathématiques complexes...
