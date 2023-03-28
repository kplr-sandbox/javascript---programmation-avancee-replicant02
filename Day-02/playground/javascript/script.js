/*
demander à l'utilisateur d'entrer son age
affiche "accepté" si l'age est supérieur ou égal à 18 ans, et "refusé" sinon.
*/

const ageMajorite = 18;
let ageUtilisateur = parseInt(prompt("Merci d'indiquer votre âge"));

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

let message =
  (ageUtilisateur >= ageMajorite && "Vous êtes accepté") ||
  (ageUtilisateur < ageMajorite && "Désolé vous ne pouvez pas rentrer");

alert(message);
