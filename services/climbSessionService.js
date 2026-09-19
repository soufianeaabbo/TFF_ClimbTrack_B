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
}


}



module.exports = climbSessionService;