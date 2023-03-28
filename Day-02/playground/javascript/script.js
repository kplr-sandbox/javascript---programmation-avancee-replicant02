/*
demander à l'utilisateur d'entrer son age
affiche "accepté" si l'age est supérieur ou égal à 18 ans, et "refusé" sinon.
*/

const ageMajorite = 18;
let ageUtilisateur = prompt("Merci d'indiquer votre âge");

if (parseInt(ageUtilisateur) >= ageMajorite) {
  alert("Vous êtes accepté !");
} else {
  alert("Désolé vous ne pouvez pas rentrer");
}
