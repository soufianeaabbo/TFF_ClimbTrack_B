const authService = require("../services/authService");

const authController = {
    register: async (req, res) => {

        try {
            const newUser = req.body;


            if (await authService.emailAlreadyUsed(newUser.email)) {
                res.status(409).json({ status: 409, message: 'Cette adresse mail est déjà utilisée' });
            } else {
                const userAdded = await authService.insert(newUser);

                res.status(201).json(userAdded);

            }
        } catch (error) {
            res.status(500).json({ status: 500, message: 'Une erreur serveur est survenue' });
        }




    }
}


module.exports = authController;