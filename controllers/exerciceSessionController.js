const exerciceSessionService = require("../services/exerciceSessionService");


const exerciceSessionController = {

    // Ajoute un exercice dans une séance de renforcement
    createExerciceSession: async (req, res) => {
        try {
            const newExerciceSession = req.body;

            const exerciceAdded =
                await exerciceSessionService.createExerciceSession(newExerciceSession);

            res.status(201).json(exerciceAdded);

        } catch (err) {
            console.log(err);
            res.status(500).json({ error: err.message });
        }
    },


    // Récupère tous les exercices d'une séance de renforcement
    getExercicesBySession: async (req, res) => {
        try {
            const sessionRenfoId = req.params.sessionRenfoId;

            const exercices =
                await exerciceSessionService.getExercicesBySession(sessionRenfoId);

            res.status(200).json(exercices);

        } catch (err) {
            console.log(err);
            res.status(500).json({ error: err.message });
        }
    },

}


module.exports = exerciceSessionController;