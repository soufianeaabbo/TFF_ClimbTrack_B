const ascensionController = require("../controllers/ascensionController");

const ascensionRouter = require("express").Router();



ascensionRouter.post('/',ascensionController.createNewAscension)


// ascensionRouter.get()

module.exports = ascensionRouter;