const climbSessionService = require("../services/climbSessionService")


const climbSessionController = {
    createnewsess: async (req, res) => {
        try {
            const newSession = req.body


            const sessionadded = await climbSessionService.createnewsess(newSession);
            res.status(201).json(sessionadded);

        } catch (error) {
            res.status(500).json({ status: 500, message: 'Une erreur serveur est survenue' });
        }
    },

    getSessionById: async (req, res) => {
        try {
            // Récupère l'id présent dans l'URL
            const id = req.params.id;

            // Demande au service de chercher cette session
            const session = await climbSessionService.getSessionById(id);

            // Renvoie la session au frontend
            res.status(200).json(session);

        } catch (error) {
            res.status(500).json({
                status: 500,
                message: 'Une erreur serveur est survenue'
            });
        }
    },


    endSession: async (req, res) => {

        try {

            const id = req.params.id;

            const endSession = await climbSessionService.endSession(id)

            res.status(200).json(endSession);



        } catch (error) {
            res.status(500).json({
                status: 500,
                message: 'Une erreur serveur est survenue'
            });

        }



    },
    getCurrentSession: async (req, res) => {
        try {
            const userId = req.params.userId;

            const currentSession =
                await climbSessionService.getCurrentSession(userId);

            res.status(200).json(currentSession);

        } catch (error) {
            console.log(error);

            res.status(500).json({
                status: 500,
                message: "Une erreur serveur est survenue"
            });
        }
    },
    getSessionsByUser: async (req, res) => {
        try {
            // Récupère l'id du user dans l'URL
            const userId = req.params.userId;

            // Récupère toutes ses sessions terminées
            const sessions =
                await climbSessionService.getSessionsByUser(userId);

            res.status(200).json(sessions);

        } catch (error) {
            console.log(error);

            res.status(500).json({
                status: 500,
                message: "Une erreur serveur est survenue"
            });
        }
    },






}

module.exports = climbSessionController;