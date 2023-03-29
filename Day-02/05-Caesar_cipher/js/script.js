const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");

function isUpperCase(toTest) {
  return toTest.toUpperCase() == toTest;
}

function caesar(phraseAEncoder = "", decalage = 0) {
  decalage = parseInt(decalage);
  if (phraseAEncoder && decalage) {
    let phraseCodee = "";
    console.log(alphabetArray);
    console.log(`phrase a encoder : ${phraseAEncoder}`);
    console.log(`decalage : ${decalage}`);
    for (iPhrase = 0; iPhrase < phraseAEncoder.length; iPhrase++) {
      let rangLettreEnCours = 0;
      for (let iAlphabet = 0; iAlphabet < alphabetArray.length; iAlphabet++) {
        console.log(`lettre en cours : ${phraseAEncoder[iPhrase]}`);
        if (phraseAEncoder[iPhrase].toLowerCase() == alphabetArray[iAlphabet]) {
          rangLettreEnCours = iAlphabet;
          break;
        }
      }
      console.log(
        `lettre encodée : ${alphabetArray[rangLettreEnCours + decalage]}`
      );

      phraseCodee += isUpperCase(phraseAEncoder[iPhrase])
        ? alphabetArray[rangLettreEnCours + decalage].toUpperCase()
        : alphabetArray[rangLettreEnCours + decalage];
    }
    return phraseCodee;
  } else return phraseAEncoder;
}

let phraseAEncoder = prompt("Phrase à encoder :");
let decalage = prompt("décalage pour l'encodage : ");
document.querySelector("#resultat").innerHTML = caesar(
  phraseAEncoder,
  decalage
);
