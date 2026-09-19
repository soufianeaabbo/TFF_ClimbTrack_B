
const db = require("../models/config");


const ascensionService = {

    createNewAscension : async(ascensionToAdd) => {
        try {
                let ascensionAdded  = await db.Ascension.create(ascensionToAdd)
                return ascensionAdded
                
            
        } catch (err) {
            console.log(err);
            
            throw new Error(err.message);
        }
    }
    
   
}



module.exports = ascensionService;