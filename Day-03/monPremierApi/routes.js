const express = require("express");

const router = express.Router();

const users = [
  { id: 1, username: "bob" },
  { id: 2, username: "joe" },
];

router.get("/users", (req, res) => {
  //res.send("obtenir tous les éléménts");
  res.json(users);
});

router.get("/users/:id", (req, res) => {
  res.send(`${req.params.id}`);
});

module.exports = router;
