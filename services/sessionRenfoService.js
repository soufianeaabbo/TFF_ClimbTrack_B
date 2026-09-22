const db = require("../models/config");


const sessionRenfoService = {

    // Crée une nouvelle séance de renforcement
    createNewSession: async (sessionToAdd) => {
        try {
            let sessionAdded = await db.SessionRenfo.create(sessionToAdd);
            return sessionAdded;

        } catch (err) {
            console.log(err);
            throw new Error(err.message);
        }
    },


    // Récupère une séance grâce à son id
    getSessionById: async (id) => {
        try {
            const session = await db.SessionRenfo.findByPk(id);

            return session;

        } catch (err) {
            console.log(err);
            throw new Error(err.message);
        }
    },


    // Récupère la séance de renforcement actuellement en cours
    getCurrentSession: async (userId) => {
        try {
            const currentSession = await db.SessionRenfo.findOne({
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


    // Termine une séance de renforcement
    endSession: async (id) => {
        try {
            const session = await db.SessionRenfo.findByPk(id);

            if (!session) {
                return null;
            }

            session.terminee = true;

            await session.save();

            return session;

        } catch (err) {
            console.log(err);
            throw new Error(err.message);
        }
    },


    // Récupère toutes les séances de renforcement terminées d'un utilisateur
    getSessionsByUser: async (userId) => {
        try {
            const sessions = await db.SessionRenfo.findAll({
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


module.exports = sessionRenfoService;