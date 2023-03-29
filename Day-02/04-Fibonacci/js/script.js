function fibonacci(rangNombreARetourer) {
  let calculNombre = 1;
  let calculNombrePrecedent = 0;
  let calculResutat = 1;
  console.log(`rang 1 : ${calculResutat}`);
  for (let position = 2; position <= rangNombreARetourer; position++) {
    calculResutat = calculNombre + calculNombrePrecedent;
    calculNombrePrecedent = calculNombre;
    calculNombre = calculResutat;
    console.log(`rang ${position} : ${calculResutat}`);
  }
  return `Nombre pour le rang ${rangNombreARetourer} = ${calculResutat}`;
}

document.querySelector("#resultat").innerHTML = fibonacci(
  parseInt(
    prompt(
      "Indiquez le rang pour lequel vous voulez le chiffre de Fibonacci correspondant :"
    )
  )
);
