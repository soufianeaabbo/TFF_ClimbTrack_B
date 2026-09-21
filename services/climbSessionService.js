const db = require("../models/config");


const climbSessionService = {

    createnewsess: async (sessionToAdd) => {
        try {
            let sessionadded = await db.ClimbSession.create(sessionToAdd)
            return sessionadded


        } catch (err) {
            console.log(err);

            throw new Error(err.message);
        }
    },

    getSessionById: async (id) => {
        try {
            // Cherche UNE session grâce à son id (clé primaire)
            const session = await db.ClimbSession.findByPk(id);

            // Renvoie la session trouvée
            return session;

        } catch (err) {
            console.log(err);
            throw new Error(err.message);
        }
    },

    // Termine une session grâce à son id
    endSession: async (id) => {
        try {
            // Cherche la session correspondant à l'id
            const session = await db.ClimbSession.findByPk(id);

            // Si la session n'existe pas
            if (!session) {
                return null;
            }

            // Passe la session en "terminée"
            session.terminee = true;

            // Enregistre la modification dans la DB
            await session.save();

            // Renvoie la session modifiée
            return session;

        } catch (err) {
            console.log(err);
            throw new Error(err.message);
        }
    },

    // Récupère la session actuellement en cours d'un utilisateur
    getCurrentSession: async (userId) => {
        try {
            const currentSession = await db.ClimbSession.findOne({
                where: {
                    user_id: userId,
                    terminee: false
                }
            });

            return currentSession;

        } catch (err) {
            console.log(err);
            throw new Error(err.message);
        }
    },
// recup toute les session finis d'un user avec son id  
    getSessionsByUser: async (userId) => {
    try {
        const sessions = await db.ClimbSession.findAll({
            where: {
                user_id: userId,
                terminee: true
            },
            // Les séances les plus récentes en premier
            order: [['date', 'DESC']]
        });

        return sessions;

    } catch (err) {
        console.log(err);
        throw new Error(err.message);
    }
},




}



module.exports = climbSessionService;