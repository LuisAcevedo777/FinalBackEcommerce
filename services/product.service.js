const Product = require('../models/product.model')
const ProductImage = require('../models/productImage.model')
const User = require('../models/user.model')
const { Op } = require("sequelize");

class ProductService{

static async getProductService(){

try{ const resProduct = await Product.findAll({where: {
    stock: {[Op.gt]: 0 }}, include: [{model: ProductImage, attributes: ['linkProduct']}, {model: User, attributes: ['username']}]})  
return resProduct}
catch(error){throw error}
}


    

static async createProductService(productBody){
    try{const productCreated = await Product.create(productBody)
    return productCreated
    }
    catch(error){throw error}}

static async updateProductService(idp, {description}){
   
    try{const productUpdated = await Product.update({description}, {where: {id_product: idp}})
    return productUpdated
    }
    catch(error){throw error}}
    

}

module.exports = ProductService