// Création du routeur principal
const router = require("express").Router();

// Importe les routes liées aux utilisateurs
const userRouter = require ("./userRouter")
// Toutes les routes utilisateur commenceront par /users
router.use ('/users',userRouter)


const authRouter = require("./authRouter");
router.use('/auth', authRouter )



module.exports = router;