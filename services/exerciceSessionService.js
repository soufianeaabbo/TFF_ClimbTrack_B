// sert à mettre un exercice dans une SessionRenfo précise avec ses séries/reps/charge.

const db = require("../models/config");


const exerciceSessionService = {

    // Ajoute un exercice dans une séance de renforcement
    createExerciceSession: async (exerciceToAdd) => {
        try {
            const exerciceAdded = await db.SessionExo.create(exerciceToAdd);

            return exerciceAdded;

        } catch (err) {
            console.log(err);
            throw new Error(err.message);
        }
    },


    // Récupère tous les exercices d'une séance de renforcement
    getExercicesBySession: async (sessionRenfoId) => {
        try {
            const exercices = await db.SessionExo.findAll({
                where: {
                    session_renfo_id: sessionRenfoId
                },
                // récupérer les informations de l'exercice associé, donc son nom, catégorie, etc.
                include: [
                    {
                        model: db.Exo
                    }
                ]
            });

            return exercices;

        } catch (err) {
            console.log(err);
            throw new Error(err.message);
        }
    },

}


module.exports = exerciceSessionService;