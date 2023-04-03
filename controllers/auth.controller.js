const UserService = require('../services/user.services')
const AuthServices = require('../services/token.service')
const bcrypt = require('bcrypt')

const userLogin = async (req, res, next)=> {

try{
    const {email, password}= req.body
    const userLoged = await UserService.getUser(email)
    
    if(!userLoged){return next({
        status:400,
         message: 'invalid email',
          error: 'user not found'})}

    const isValid = await bcrypt.compare(password, userLoged.password)

if(!isValid){return next({
    status:400, 
    messsage: 'the password doesnt match whith email', 
    error: 'invalid password'})}
    const {idUser, username, avatarId, idTypeName} = userLoged

    const token = AuthServices.genToken({

        idUser,username, avatarId, idTypeName
   })

res.json({
    idUser,
    email, 
    username, 
    avatarId, 
    idTypeName,
token})}
    catch(error){next(error)}}


module.exports = {userLogin}