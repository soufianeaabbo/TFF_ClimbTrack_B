const climbSessionService = require("../services/climbSessionService")


const climbSessionController = {
    createnewsess : async (req,res)=>{
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
}



    
}

module.exports = climbSessionController;