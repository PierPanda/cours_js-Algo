// Améliorez ce code

let argent = 1000;
let nbGlaces = 8;
let prixGlace = 2;

argent = argent - (nbGlaces * prixGlace);
nbGlaces = nbGlaces * prixGlace;
console.log(argent);
console.log(nbGlaces);




const inflation = 0.04;

prixGlace = prixGlace * (1 + inflation);

const argentDePoche = 100;
var nbMois = 12;

argent = argent + argentDePoche * 12;

var crashBancaire = 5;

argent = argent / crashBancaire;

console.log('Argent', argent);
