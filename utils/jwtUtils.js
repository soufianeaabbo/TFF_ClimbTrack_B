const jwt = require("jsonwebtoken");

const { JWT_AUDIENCE, JWT_ISSUER, JWT_SECRET } = process.env;

const jwtUtils = {

    generate : (user) => {
        // La création du token pouvant échouer et ne renvoyant pas une promesse, à nous d'en créer une
        return new Promise( (resolve, reject) => { 
            //! 1) Création du payload
            // C'est un objet qui contient les informations qu'on veut stocker dans le token
            // ⚠️ On y met jamais d'infos sensibles
            // Les claims sont les données qu'on met dans le payload
            const payload = {
                id : user.id,
                role : user.role
            }

            //! 2) Paramétrer les options
            const options = {
                // Algo de hasahge du token
                algorithm : 'HS512',
                // Choix de la date d'expiration du token
                expiresIn : '3d',
                // Info sur "à qui" est destiné le token
                audience : JWT_AUDIENCE,
                // Info sur "qui" a créé le token
                issuer : JWT_ISSUER
            }

            //! 3) Création du token
            // Pour créer le token, on utilise la méthode sign() qui demande
            // - payload
            // - secret : LE code secret qu'on ne mettra JAMAIS sur git
            // - les options
            // - le tout dernier paramètre est un callback, la fonction exécutée à la fin de la création avec soit une erreur, soit le token
            jwt.sign(payload, JWT_SECRET, options, (error, token) => {

                // Si erreur lors de la création, on reject la promesse
                if(error){
                    reject(error); 
                }
                // Si pas d'erreur, on résout la promesse et on récupère le token
                else {
                    resolve(token);
                }
            } )
        })
    },

    decode : (token) => {
        return new Promise( (resolve, reject) => {
            //! 1) Vérifier si il y a quelque chose dans le paramètre token
            if(!token){
                reject(new Error('Pas de token'));
            }

            const options = {
                audience : JWT_AUDIENCE,
                issuer : JWT_ISSUER
            }

            //! 2) Décoder le token
            // Pour décoder le token, on va utiliser la méthode verify qui prend en paramètre :
            // - token
            // - secret
            // - options
            // - le callback pour savoir si on a réussi à décoder ou pas

            jwt.verify(token, JWT_SECRET, options, (error, payload) => {
                // Si la vérification plante, on reject avec l'erreur
                if(error){
                    reject(error);
                }
                // Si la vérification réussie, on resolve en renvoyant le payload obtenu à partir du token
                else {
                    resolve(payload);
                }
            } )
        })
    }
}

module.exports = jwtUtils;