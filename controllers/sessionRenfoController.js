const sessionRenfoService = require("../services/sessionRenfoService");


const sessionRenfoController = {

    // Crée une nouvelle séance de renforcement
    createNewSession: async (req, res) => {
        try {
            const newSession = req.body;

            const sessionAdded = await sessionRenfoService.createNewSession(newSession);

            res.status(201).json(sessionAdded);

        } catch (err) {
            console.log(err);
            res.status(500).json({ error: err.message });
        }
    },


    // Récupère une séance grâce à son id
    getSessionById: async (req, res) => {
        try {
            const id = req.params.id;

            const session = await sessionRenfoService.getSessionById(id);

            if (!session) {
                return res.status(404).json({
                    error: "Session de renforcement introuvable"
                });
            }

            res.status(200).json(session);

        } catch (err) {
            console.log(err);
            res.status(500).json({ error: err.message });
        }
    },


    // Récupère la séance actuellement en cours d'un utilisateur
    getCurrentSession: async (req, res) => {
        try {
            const userId = req.params.userId;

            const session = await sessionRenfoService.getCurrentSession(userId);

            res.status(200).json(session);

        } catch (err) {
            console.log(err);
            res.status(500).json({ error: err.message });
        }
    },


    // Termine une séance de renforcement
    endSession: async (req, res) => {
        try {
            const id = req.params.id;

            const session = await sessionRenfoService.endSession(id);

            if (!session) {
                return res.status(404).json({
                    error: "Session de renforcement introuvable"
                });
            }

            res.status(200).json(session);

        } catch (err) {
            console.log(err);
            res.status(500).json({ error: err.message });
        }
    },


    // Récupère toutes les séances terminées d'un utilisateur
    getSessionsByUser: async (req, res) => {
        try {
            const userId = req.params.userId;

            const sessions = await sessionRenfoService.getSessionsByUser(userId);

            res.status(200).json(sessions);

        } catch (err) {
            console.log(err);
            res.status(500).json({ error: err.message });
        }
    },

}


module.exports = sessionRenfoController;