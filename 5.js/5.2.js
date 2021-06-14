const readlineSync = require("readline-sync");


function askTvSerie() {
    let serie = {
        acteurs: []
    }

        serie.nom = readlineSync.question(" Quel est ta serie prefere ?");
        serie.annee = new Number(readlineSync.question(" Quel est l'anne de sortie ? "));
    
    let nbrAct = new Number(readlineSync.question(" Combien y a t'il d'acteus principaux ?"));  
    for (let i = 1; i <= nbrAct; i++) {
        serie.acteurs.push(readlineSync.question(" Le nombre d'acteurs dans " + i + "la serie : "));
    }  
     return serie; 
    }
    
    console.log(askTvSerie()); 

function randomizeCast(tvSerie) {
    return tvSerie.acteurs.sort(() => Math.random() - 0.5);
    }
        
        let askSerie = askTvSerie(); 
        let mix =  randomizeCast(askSerie);


        console.log("Maintenant, on mixte le tout et ca donne ceci pour le nouveau casting: " , mix);





// Exercice 5.2
//Créez une fonction nommée randomizeCast(tvSerie)qui prendra comme argument la structure de données que vous avez 
//définie dans l'exercice précédent et renverra une liste de la même distribution mais dans un ordre aléatoire.
//Créez un programme qui utilisera randomizeCast(tvSerie)et askTvSerie()interrogera l'utilisateur 
//sur une série télévisée puis affichez une liste aléatoire du casting précédent qui formera le nouveau casting 
//de votre prochaine série.            