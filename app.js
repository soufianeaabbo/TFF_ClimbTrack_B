const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;
const db = require("./models/config");

// Importe toutes les routes de l'API
const router = require("./routes");

// Autorise le frontend à appeler l'API
app.use(cors());


app.use(express.json());

// Toutes les routes commenceront par /api
app.use('/api', router);


db.sequelize.authenticate()
  .then(() => {
    console.log("✅ Connection DB - Success");
  })
  .catch((err) => {
    console.log("❌ Connection DB - Fail");
    console.log(err);
  });
  




// { alter: true } dans le parametre de db.sequelize.sync  car j'ai ajouter la colonne terminée plus tards dans le projet elle a servis a ajouter une collone

db.sequelize.sync()
    .then(() => {
        console.log("✅ Tables synchronisées");
    })
    .catch((err) => {
        console.log("❌ Erreur de synchronisation");
        console.log(err);
    });








app.listen(PORT, () => {
  console.log(`Serveur lancé sur le port ${PORT}`);
});


