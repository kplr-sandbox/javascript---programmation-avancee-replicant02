//PALINDROME

// fonction pour enlever les accents
// SOURCE : https://www.30secondsofcode.org/js/s/remove-accents/
const removeAccents = (str) =>
  str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

function isPalindrome(mot) {
  // enlève tous les espaces dans le string, mets en minuscule et enlève les accents
  // SOURCE : https://futurestud.io/tutorials/remove-all-whitespace-from-a-string-in-javascript
  mot = removeAccents(mot.replace(/\s/g, "").toLowerCase());
  console.log(mot);

  // itère dans le mot et compare les lettre de même rangs en partant du début et de la fin
  // on parcours donc uniquement la moitiée du tableau
  for (let i = 0; i < mot.length / 2; i++) {
    console.log(`${mot[i]} - ${mot[mot.length - 1 - i]}`);
    if (mot[i] != mot[mot.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

let motATester = prompt(
  "Indiquer un mot à tester pour voir si c'est un palindrome;"
);

if (isPalindrome(motATester)) {
  console.log("c'est un palindrome");
} else {
  console.log("désolé ce n'est pas un palindrome");
}
