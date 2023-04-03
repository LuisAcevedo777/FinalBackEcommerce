const UserService = require('../services/user.services')
const transporter = require('../utils/mailer')


const createUser = async(req,res)=>{

  
try{
    const userBody = req.body
   //const salt = await bcrypt.genSalt(10)
    //const passwordHash = await bcrypt.hash(userBody.password, salt)
    //const data = await UserService.createUserService(userBody)

    const data = await UserService.createUserService(userBody)
    res.status(201).json(data)

   

        await transporter.sendMail({ 
    
            from: 'leavleav00@gmail.com', to: data.email, subject:'prueba', html: `<h1>Hola ${data.username}, solo verifica tu correo</h1>`
    })
    

}
    catch(error){res.status(400).json(error)}

}

const updateUser = async(req,res)=>{

  
    try{
        const {id}= req.params
        const {username, avatarId} = req.body
       //const salt = await bcrypt.genSalt(10)
        //const passwordHash = await bcrypt.hash(userBody.password, salt)
        //const data = await UserService.createUserService(userBody)
      
        const data1 = await UserService.updateUserService(id, {username, avatarId})
       
        res.status(204).send()}
        catch(error){res.status(403).json(error)}
    
    }
module.exports =  {createUser, updateUser}