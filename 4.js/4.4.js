const readlineSync = require("readline-sync");


let arr = [];
let n = new Number (readlineSync.question("Donne moi trois chiffres entre 1 et 10 : ")); 


function rand10() {
    return Math.round(Math.random() * 10);
    }
 function multiRand(n) {
    for (i = 0; i <= n; i++) {
        arr.push(rand10()); }
            return arr }
            
function average(arr) {
            return arr.reduce((a,b)  => a + b, 0)/ arr.length;
        }                                                            

function min(arr)  {
            return Math.min(...arr);    } 


function max(arr)  {
    return Math.max(...arr);    }
        

console.log(multiRand(n) + " la moyenne est de  " + average(arr) + ", l'element minimum est de " + min(arr) + " et pour finir, l'element maximum est " + max(arr) + ".");



///ah mais putain je me mélange les pinceaux !!!!!!!!


// Donc , je reprends les funtions utilisees dns l'exo juste avant  et je rajoute les nouvelles 
// puis je créer mes appels ensuite je fais mes return respectif pour chaque fonctions 
//et je n'oublie pas mon push pour ajouter les infos les unes aux autres 


//Exercice 4.4
//Créez une fonction nommée average(arr)qui prend un tableau de nombres comme argument et renvoie la moyenne. ok
//Créez une fonction nommée min(arr)qui prend un tableau de nombres comme argument et renvoie l'élément minimum. ok 
//Créez une fonction nommée max(arr)qui prend un tableau de nombres comme argument et renvoie l'élément maximum. ok 
//Créez un programme qui demande un nombre à l'utilisateur puis génère le même nombre de nombres aléatoires  ok
//mais affiche également leur moyenne, leur min et leur max.  ok
//Pour ce faire, utilisez les trois fonctions que vous venez de créer ainsi que la multiRand(n)fonction 
//créée dans l'exercice 3. ok
//Rédigez une documentation pour toutes les fonctions que vous avez créées.