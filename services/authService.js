const db = require("../models/config");

const authService = {

    // pour savoir si l'email est deja utilisé quand le gars s'inscrit
    emailAlreadyUsed: async (email) => {


        try {
            const userFound = await db.User.findOne({ where: { 'email': email } });

            if (userFound) {
                return true;
            } else {
                return false;
            }


        } catch (error) {
            throw new Error(err.message);
        }



    },


    // pour inserer un user dans la db
    insert: async (userToAdd) => {
        try {
            let userAdded = await db.User.create(userToAdd)

            if (userAdded) {
                userAdded = await db.User.findByPk(userAdded.id, { attributes: { exclude: 'mdp' } });
            }
            return userAdded;

        } catch (error) {
            console.log(err);

            throw new Error(err.message);
        }
    },


    getByEmail: async (email) => {
        try {
            const userFound = await db.User.findOne({ where: { 'email': email } });
            return userFound;
        }
        catch (err) {
            throw new Error(err.message);
        }

    },


    getById: async (id) => {

        try {
            let userConnected = await db.User.findByPk(id)
            return userConnected;

        } catch (error) {
            console.log(err);

            throw new Error(err.message);
        }



    }
}



module.exports = authService;