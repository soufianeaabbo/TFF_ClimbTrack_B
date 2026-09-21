
const db = require("../models/config");


const ascensionService = {

    createNewAscension: async (ascensionToAdd) => {
        try {
            let ascensionAdded = await db.Ascension.create(ascensionToAdd)
            return ascensionAdded


        } catch (err) {
            console.log(err);

            throw new Error(err.message);
        }
    },
    // Récupère toutes les ascensions appartenant à une session
    getAscensionsBySession: async (sessionId) => {
        try {

            // Cherche toutes les ascensions qui ont le même session_id
            const ascensions = await db.Ascension.findAll({
                where: {
                    session_id: sessionId
                }
            });

            // Renvoie la liste des ascensions trouvées
            return ascensions;

        } catch (err) {
            console.log(err);
            throw new Error(err.message);
        }
    },


}



module.exports = ascensionService;