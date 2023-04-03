const ProductService = require('../services/product.service')



const getProduct = async(req,res)=>{

  
try{
    
    const productsGetted = await ProductService.getProductService()
    res.json(productsGetted)}
    catch(error){res.status(400).json(error)}

}

const createProduct = async(req,res)=>{

  
    try{
        const newProduct = req.body
        const resultProduct = await ProductService.createProductService(newProduct)
        res.status(201).send(resultProduct)}
        catch(error){res.status(400).json(error)}
    
    }
    

const updateProduct = async(req,res)=>{

  
    try{
        const {idp}= req.params
        const {description} = req.body
       //const salt = await bcrypt.genSalt(10)
        //const passwordHash = await bcrypt.hash(userBody.password, salt)
        //const data = await UserService.createUserService(userBody)
       
        const data1 = await ProductService.updateProductService(idp, {description})
       
        res.status(204).send()}
        catch(error){res.status(403).json(error)}
    
    }
module.exports =  {getProduct, createProduct, updateProduct}