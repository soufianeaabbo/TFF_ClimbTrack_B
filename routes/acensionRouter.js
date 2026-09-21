const ascensionController = require("../controllers/ascensionController");

const ascensionRouter = require("express").Router();



ascensionRouter.post('/', ascensionController.createNewAscension)

// Récupère toutes les ascensions d'une session grâce à son id
ascensionRouter.get('/session/:id', ascensionController.getAscensionsBySession);


// ascensionRouter.get()

module.exports = ascensionRouter;