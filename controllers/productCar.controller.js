const ProductInCarService = require('../services/productCar.service')
const transporter = require('../utils/mailer')



const createProductInCar = async(req,res)=>{

  
    try{
        const {carId, productIdCar,quantity, status} = req.body
        const resultProductCar = await ProductInCarService.createProductInCarService({carId, productIdCar,quantity, status})
        res.status(201).send(resultProductCar)}
        catch(error){res.status(400).json(error)}
    
    }
    

    const getProductInCar = async(req,res)=>{

  
        try{
            const {id} = req.params
            const resultProductCar = await ProductInCarService.getProductInCarService(id)
            res.status(201).send(resultProductCar)}
            catch(error){res.status(400).json(error)}
        
        }

        
    const updateProductInCar = async(req,res)=>{

  
        try{
            const {idCar} = req.params
            const stat= true
            const result = await ProductInCarService.updateProductInCarService(idCar,stat)
            res.status(201).json(result)
            await transporter.sendMail({ 
            
                from: 'leavleav00@gmail.com', to: result.user.email , subject:'Gracias por tu Compra', html: `<h1>Hola ${result.user.username} , has realizado tu compra satisfactoriamente!!</h1>`
        })
        
        }

         
            


            catch(error){res.status(400).json(error)}
        
        }


        const getOrder = async(req,res)=>{

  
            try{
                const {idUser} = req.params
                const result = await ProductInCarService.getOrderService(idUser)
                res.status(201).send(result)}
                catch(error){res.status(400).json(error)}
            
            }


module.exports =  {createProductInCar, getProductInCar, updateProductInCar,getOrder}