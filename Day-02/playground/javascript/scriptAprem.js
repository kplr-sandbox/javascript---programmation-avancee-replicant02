let titreH1 = document.getElementsByTagName("h1");
let buttonCacher = document.getElementById("bouton-cacher");

/*
buttonCacher.addEventListener("click", function () {
  if (titreH1[0].style.display == "none") {
    titreH1[0].style.display = "block";
    buttonCacher.innerHTML = "Masquer";
  } else {
    titreH1[0].style.display = "none";
    buttonCacher.innerHTML = "Afficher";
  }
});
*/

let voiture = document.getElementById("voiture");
let buttonRetour = document.getElementById("bouton-retour");

buttonCacher.addEventListener("click", function () {
  if (!voiture.style.paddingLeft) {
    voiture.style.paddingLeft = "10px";
  } else {
    voiture.style.paddingLeft = parseInt(voiture.style.paddingLeft) + 10 + "px";
  }
});

buttonRetour.addEventListener("click", function () {
  voiture.style.paddingLeft = 0;
});

function move(objetABouger, nombrePas, pixelsDeplacement) {
  if (!objetABouger.style.paddingLeft) {
    objetABouger.style.paddingLeft = `${pixelsDeplacement}px`;
  } else {
    objetABouger.style.paddingLeft =
      parseInt(objetABouger.style.paddingLeft) + 10 + "px";
  }
}
