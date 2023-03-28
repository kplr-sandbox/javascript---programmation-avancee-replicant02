//------------------------- AGE -------------------------//
/*
demander à l'utilisateur d'entrer son age
affiche "accepté" si l'age est supérieur ou égal à 18 ans, et "refusé" sinon.
*/

/*
const ageMajorite = 18;
let ageUtilisateur = parseInt(prompt("Merci d'indiquer votre âge"));
*/

/*
if (parseInt(ageUtilisateur) >= ageMajorite) {
  alert("Vous êtes accepté !");
} else {
  alert("Désolé vous ne pouvez pas rentrer");
}
*/

/*
let message =
  ageUtilisateur >= ageMajorite
    ? "Vous êtes accepté !"
    : "Désolé vous ne pouvez pas rentrer";

alert(message);
*/

// on ajoute un age maximum
const ageMaximum = 70;

// on vérifie aussi que l'âge supérieur à zéro
/*
let message =
  ageUtilisateur > 1 &&
  ageUtilisateur <= ageMaximum &&
  ageUtilisateur >= ageMajorite
    ? "Vous êtes accepté !"
    : "Désolé vous ne pouvez pas rentrer";
*/

/*
let message =
  (ageUtilisateur >= ageMajorite && "Vous êtes accepté") ||
  (ageUtilisateur < ageMajorite && "Désolé vous ne pouvez pas rentrer");

alert(message);
*/

//------------------------- TABLE MULTIPLICATION -------------------------//

let nombreChoisi = parseInt(prompt("Merci d'indiquer un nombre"));

// directement avec une boucle FOR
/*
let table = "";
for (i = 1; i <= 10; i++) {
  table = table + `${nombreChoisi} x ${i} = ${nombreChoisi * i}\n`;
}
console.log(table);
*/

// avec une boucle FOR OFF
/*
let multiplicateurs = [];
const maxMultiplicateur = 10;

for (i = 1; i <= maxMultiplicateur; i++) {
  multiplicateurs.push(i);
}

for (chiffreMultiplicateur of multiplicateurs) {
  console.log(
    `${nombreChoisi} x ${chiffreMultiplicateur} = ${
      nombreChoisi * chiffreMultiplicateur
    }`
  );
}
*/

const maxMultiplicateur = 10;
let listeMultiplicateur = {};

/*
for (i = 1; i <= maxMultiplicateur; i++) {
  listeMultiplicateur[i] = i;
}

for (const key in listeMultiplicateur) {
  console.log(
    `${nombreChoisi} x ${key} = ${nombreChoisi * listeMultiplicateur[key]}`
  );
}
*/

for (let i = 1; i <= maxMultiplicateur; i++) {
  listeMultiplicateur[`${nombreChoisi} x ${i}`] = nombreChoisi * i;
}
for (const key in listeMultiplicateur) {
  console.log(`${key} = ${listeMultiplicateur[key]}`);
}
