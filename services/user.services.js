const User = require('../models/user.model')


class UserService{

static async getUser(email){

try{ const user = await User.findOne({where: {email}})  
return user}
catch(error){throw error}
}



static async createUserService(userBody){
try{const userCreated = await User.create(userBody)
console.log(userCreated)
return userCreated
}
catch(error){throw error}}

    
static async updateUserService(id, {username, avatarId}){
    
    try{const userUpdated = await User.update({username, avatarId}, {where: {id_user: id}})
    return userUpdated
    }
    catch(error){throw error}}
    

}

module.exports = UserService