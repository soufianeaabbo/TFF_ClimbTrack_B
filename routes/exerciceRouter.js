const exerciceController = require ("../controllers/exerciceController")

const exerciseRouter = require("express").Router();




// http://localhost:5000/api/exercice/user/1,2,3
exerciseRouter.get('/user/:userId',exerciceController.getExoByUser) 


// http://localhost:5000/api/exercice/1,2,3
exerciseRouter.get('/:id',exerciceController.getExoById)

http://localhost:5000/api/exercice
exerciseRouter.post('/',exerciceController.createNewExo)



module.exports = exerciseRouter;