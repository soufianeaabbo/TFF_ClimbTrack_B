const express = require("express");

const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  res.send("ClimbTrack API fonctionne !");
});

app.listen(PORT, () => {
  console.log(`Serveur lancé sur le port ${PORT}`);
});