const exerciceService = require("../services/exerciceService")



const exerciceController = {


    createNewExo: async (req, res) => {
        try {
            const newExo = req.body

            const exoAdded = await exerciceService.createNewExo(newExo)
            res.status(201).json(exoAdded)

        } catch (error) {
            res.status(500).json({ status: 500, message: 'Une erreur serveur est survenue' });

        }

    },
// récupérer tous les exercices qui appartiennent à un utilisateur précis.
    getExoByUser: async (req, res) => {
        try {
            const userId = req.params.userId;

            const exos = await exerciceService.getExoByUser (userId);

            res.status(200).json(exos);

        } catch (error) {
            console.log(error);

            res.status(500).json({
                status: 500,
                message: "Une erreur serveur est survenue"
            });
        }
    },
    getExoById: async (req, res) => {

        try {

            const id = req.params.id

            const exo = await exerciceService.getExoById(id)
            res.status(200).json(exo);



        } catch (error) {
            console.log(error);

            res.status(500).json({
                status: 500,
                message: "Une erreur serveur est survenue"
            });

        }



    },






}

module.exports = exerciceController;