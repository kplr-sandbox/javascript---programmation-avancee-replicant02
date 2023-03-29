console.log("Hello Node Codespace");

// bibliothèque Filesystème
const fs = require("fs");

fs.readFile("file.txt", (err, donnees) => {
  if (erreur) {
    console.log("erreur");
    return;
  } else {
    console.log("ok");
  }
});

fs.writeFile("exemple.txt", "contenu exemple", (erreur) => {
  if (erreur) {
    console.log("erreur de création de fichier");
  } else {
    console.log("fichier bien créé");
  }
});

