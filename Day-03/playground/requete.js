const http = require("http");

/*
const serveur = http.createServer((request, response) => {
  response.setHeader("Content-Type", "text/html");
  response.write("<h1>Bonjour en html</h1");
  response.end();
});

serveur.listen(3002);
*/

const serveur = http.createServer((request, response) => {
  let body = [];

  request.on("data", (donnees) => {
    body.push(donnees);
  });

  request.on("end", () => {
    body = Buffer.concat(body).toString();
    console.log(body);

    let username = "inconnu";
    if (body) {
      username = body.split("=")[1];
    }

    response.setHeader("Content-Type", "text/html");
    response.write(
      `<h1>Bonjour ${username}</h1>
        <form method="POST" action="/">
            <input type="text" name="username"/>
            <button type="submit">Envoyer</button>
        </form>`
    );
    response.end();
  });
});

serveur.listen(3002);
