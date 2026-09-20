const authController = require("../controllers/authController");
const authRouter = require("express").Router();



authRouter.post('/register', authController.register)

authRouter.post('/login', authController.login)

authRouter.get('/infoUser', authController.getInfoUser)











module.exports = authRouter;