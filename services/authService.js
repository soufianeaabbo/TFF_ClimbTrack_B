const db = require("../models/config");

const authService = {
    emailAlreadyUsed : async (email) =>{


        try {
             const userFound = await db.User.findOne({where : {'email' : email}});

        if (userFound) {
            return true;
        } else {
            return false;
        }
        
            
        } catch (error) {
            throw new Error(err.message);
        }


         
       
    },
    
    insert : async (userToAdd) => {
        try {
             let userAdded =  await db.User.create(userToAdd)

         if(userAdded){
                userAdded = await db.User.findByPk(userAdded.id, { attributes : { exclude : 'mdp'} });
            }
            return userAdded;

        } catch (error) {
            console.log(err);
            
            throw new Error(err.message);
        }


       

    }
}



module.exports = authService;