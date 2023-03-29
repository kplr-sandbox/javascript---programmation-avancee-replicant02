const express = require("express");
const app = express();

/*
app.use((request, response, next) => {
  response.setHeader("Content-Type", "text/html");
  next();
});

app.use((request, response, next) => {
  response.send("<h1>titre</h1");
});

app.listent(3002);
*/

app.get("/", (req, res) => {
  res.send("Page d'accueil");
});

app.listen(3002, () => {
  console.log("le serveur écoute sur le port 3002");
});

const routes = require("./routes");

app.use("/", routes);
