const climbSessionController  = require("../controllers/climbSessionController")
const climbSessionRouter = require("express").Router();


climbSessionRouter.post('/',climbSessionController.createnewsess)

climbSessionRouter.get('/:id', climbSessionController.getSessionById)

climbSessionRouter.patch('/:id',climbSessionController.endSession)

// Récupère la session en cours d'un utilisateur
climbSessionRouter.get('/current/:userId',climbSessionController.getCurrentSession);

// Récupère toutes les sessions terminées d'un utilisateur
climbSessionRouter.get('/user/:userId',climbSessionController.getSessionsByUser);



module.exports = climbSessionRouter;