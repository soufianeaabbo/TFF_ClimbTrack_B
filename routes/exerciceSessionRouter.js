const express = require("express");

const exerciceSessionController = require("../controllers/exerciceSessionController");

const exerciceSessionRouter = express.Router();


// Récupère tous les exercices d'une séance de renforcement
exerciceSessionRouter.get(
    '/session/:sessionRenfoId',
    exerciceSessionController.getExercicesBySession
);


// Ajoute un exercice dans une séance de renforcement
exerciceSessionRouter.post(
    '/',
    exerciceSessionController.createExerciceSession
);


module.exports = exerciceSessionRouter;