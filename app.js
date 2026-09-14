const express = require("express");

const app = express();
const PORT = 5000;
const db = require("./models/config");



db.sequelize.authenticate()
  .then(() => {
    console.log("✅ Connection DB - Success");
  })
  .catch((err) => {
    console.log("❌ Connection DB - Fail");
    console.log(err);
  });
  



db.sequelize.sync()
    .then(() => {
        console.log("✅ Tables synchronisées");
    })
    .catch((err) => {
        console.log("❌ Erreur de synchronisation");
        console.log(err);
    });






app.get("/", (req, res) => {
  res.send("ClimbTrack API fonctionne !");
});

app.listen(PORT, () => {
  console.log(`Serveur lancé sur le port ${PORT}`);
});


