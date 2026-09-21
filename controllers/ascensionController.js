const ascensionService = require("../services/ascensionService");



const ascensionController = {
    createNewAscension: async (req, res) => {
        try {
            const newAscension = req.body

            const ascensionAdded = await ascensionService.createNewAscension(newAscension)
            res.status(201).json(ascensionAdded);

        } catch (error) {
            res.status(500).json({ status: 500, message: 'Une erreur serveur est survenue' });
        }
    },
    getAscensionsBySession: async (req, res) => {
        try {

            // Récupère l'id de la session présent dans l'URL
            const sessionId = req.params.id;

            // Récupère toutes les ascensions liées à cette session
            const ascensions = await ascensionService.getAscensionsBySession(sessionId);

            // Renvoie les ascensions au frontend
            res.status(200).json(ascensions);

        } catch (error) {
            console.log(error);

            res.status(500).json({
                status: 500,
                message: "Une erreur serveur est survenue"
            });
        }
    },




}

module.exports = ascensionController;