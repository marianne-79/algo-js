const  readlineSync  =  require ( "readline-sync" ) ;

let  prenom  =  readlineSync . question ( " Quel est votre prénom svp ?" ) ;
let  nom  =  readlineSync . question ( " Quel est votre nom de famille svp ?" ) ;
let  ville  =  readlineSync . question ( " Ou habitez-vous svp ?" ) ;
console.log ( "tu t'appelles " +  prenom + " " + nom + "et tu vis à " + ville) ;



//Exercice 1.4
//Faites la même chose que l' exercice 2 mais cette fois-ci demandez à l'utilisateur le nom, le prénom et la ville.