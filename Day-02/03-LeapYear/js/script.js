//------------------------- EXERCICE LEAP YEAR -------------------------//

function isLeapYear(anneeUtilisateur) {
  console.log(`${anneeUtilisateur}`);

  return (!(anneeUtilisateur % 4) &&
    !(anneeUtilisateur % 100) &&
    !(anneeUtilisateur % 400)) ||
    (!(anneeUtilisateur % 4) && anneeUtilisateur % 100)
    ? true
    : false;
}

let anneeUtilisateur = parseInt(
  prompt("Indiquez une année pour savoir si elle est bissextile")
);

document.querySelector("#resultat").innerHTML = isLeapYear(anneeUtilisateur)
  ? `<strong>${anneeUtilisateur} est une année bissextile<strong>`
  : `ATTENTION : ${anneeUtilisateur} n'est PAS une année bissextile<strong>`;
