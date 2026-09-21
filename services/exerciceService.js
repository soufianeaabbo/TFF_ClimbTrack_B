
const db = require("../models/config");


const exerciceService = {

    createNewExo: async (exoToAdd) => {

        try {
            let exoAdded = await db.Exo.create(exoToAdd)
            return exoAdded

        } catch (err) {
            console.log(err);

            throw new Error(err.message);
        }

    },
    getExoByUser: async (userId) => {

        try {
            const exos = await db.Exo.findAll({
                where: {
                    user_id: userId,
                },

            });

            return exos;

        } catch (err) {
            console.log(err);

            throw new Error(err.message);
        }

    },
    getExoById: async (id) => {

        try {

            const exo = await db.Exo.findByPk(id);

            return exo;


        } catch (err) {
            console.log(err);

            throw new Error(err.message);
        }

    },




}



module.exports = exerciceService;