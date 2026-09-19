const ascensionService = require("../services/ascensionService");



const ascensionController = {
    createNewAscension : async (req,res)=>{
        try {
            const newAscension = req.body

            const ascensionAdded = await ascensionService.createNewAscension(newAscension)
            res.status(201).json(ascensionAdded);

        } catch (error) {
            res.status(500).json({ status: 500, message: 'Une erreur serveur est survenue' });
        }
    }



    
}

module.exports = ascensionController;