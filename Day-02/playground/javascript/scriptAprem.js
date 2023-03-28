//On veut modifier tous les elements qui ont element-id comme id

let elementAvecIdH1 = document.querySelectorAll("#element-h1");
/*
// MAUVAISE PRATIQUE
for (let elementDom in elementAvecIdH1) {
  elementAvecIdH1[elementDom].innerHTML = "element h1 remplacé";
}
*/
for (let elementUnique of elementAvecIdH1) {
  elementUnique.innerHTML += " MODIFIE";
}
