const authService = require("../services/authService");

// Outils pour générer le token JWT
const jwtUtils = require("../utils/jwtUtils");

const authController = {

    // pour enregistrer un user
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
    },

    login: async (req, res) => {
        try {
            const { email, mdp } = req.body;
            // Trouver un user qui a cet email
            const userFound = await authService.getByEmail(email);

            // Si aucun user trouvé OU si le mot de passe est incorrect
            if (!userFound || mdp !== userFound.mdp) {
                res.status(400).json({ status: 400, message: 'Les informations de connexion sont erronées' });
            } else {
                // Génère un token pour l'utilisateur qui vient de se connecter
                const token = await jwtUtils.generate(userFound);

                // Renvoie le token + quelques infos du user
                res.status(200).json({
                    token: token,
                    user: {
                        id: userFound.id,
                        nom: userFound.nom,
                        prenom: userFound.prenom,
                        role: userFound.role
                    }
                });

            }

        } catch (error) {
            console.log(error); // 👈 affiche la vraie erreur dans le terminal
            res.status(500).json({ status: 500, message: 'Une erreur serveur est survenue' });

        }
    },





    // identifier/récupérer les infos de celui qui est connecté.
    getInfoUser: async (req, res) => {
        try {
            // Récupère le header Authorization envoyé par le front
            const authorization = req.headers.authorization;
            // Retire "Bearer " pour récupérer uniquement le token
            const token = authorization.split(' ')[1];

            // Décode le token pour récupérer les infos qu'on avait mises dedans (id + role)
            const payload = await jwtUtils.decode(token);

            // Cherche dans la DB l'utilisateur correspondant à l'id contenu dans le token
            const userConnected = await authService.getById(payload.id);
            // Renvoie les informations de l'utilisateur connecté
            res.status(200).json({
                id: userConnected.id,
                nom: userConnected.nom,
                prenom: userConnected.prenom,
                role: userConnected.role
            });

        } catch (error) {
            console.log(error);

            res.status(500).json({
                status: 500,
                message: 'Une erreur serveur est survenue'
            });
        }
    }




}


module.exports = authController;