

let  Bonnie  =  [ 1, 2, 3, 4, 5] ;
let  Clyde  =  [ 100, 101, 102] ;
let total1 = 0;
let total2 = 0;
for (let i = 0; i < Clyde.length; i++) {
    total2 += Clyde[i];
}

for (let i = 0; i < Bonnie.length; i++) {
total1 += Bonnie[i];
} 
console.log(total1/Bonnie.length);
console.log(total2/Clyde.length);
