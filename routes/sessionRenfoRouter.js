const express = require("express");

const sessionRenfoController = require("../controllers/sessionRenfoController");

const sessionRenfoRouter = express.Router();


// Récupère la session de renforcement en cours d'un utilisateur
sessionRenfoRouter.get('/current/:userId',sessionRenfoController.getCurrentSession);


// Récupère toutes les sessions terminées d'un utilisateur
sessionRenfoRouter.get('/user/:userId',sessionRenfoController.getSessionsByUser);


// Récupère une session grâce à son id
sessionRenfoRouter.get('/:id', sessionRenfoController.getSessionById);


// Crée une nouvelle session de renforcement
sessionRenfoRouter.post('/',sessionRenfoController.createNewSession);

// Termine une session de renforcement
sessionRenfoRouter.patch('/:id',sessionRenfoController.endSession);


module.exports = sessionRenfoRouter;