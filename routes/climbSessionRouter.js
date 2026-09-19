const climbSessionController  = require("../controllers/climbSessionController")
const climbSessionRouter = require("express").Router();


climbSessionRouter.post('/',climbSessionController.createnewsess)

climbSessionRouter.get('/:id', climbSessionController.getSessionById)





module.exports = climbSessionRouter;