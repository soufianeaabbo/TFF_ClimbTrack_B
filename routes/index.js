// Création du routeur principal
const router = require("express").Router();

// Importe les routes liées aux utilisateurs
const userRouter = require ("./userRouter")
// Toutes les routes utilisateur commenceront par /users
router.use ('/users',userRouter)


const authRouter = require("./authRouter");
router.use('/auth', authRouter )


const climbSessionRouter = require("./climbSessionRouter")
router.use('/session', climbSessionRouter)


const ascensionRouter = require("./acensionRouter")
router.use('/ascension',ascensionRouter)

const exerciseRouter = require("./exerciceRouter")
router.use('/exercice', exerciseRouter)


const sessionRenfoRouter = require("./sessionRenfoRouter");
router.use('/session-renfo', sessionRenfoRouter);

const exerciceSessionRouter = require("./exerciceSessionRouter");
router.use('/exercice-session', exerciceSessionRouter);




module.exports = router;