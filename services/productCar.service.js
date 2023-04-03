const Product = require('../models/product.model')
const ProductInCar = require('../models/productInCar.model')
const User = require('../models/user.model')
const Car= require('../models/car.model')
const Order= require('../models/order.model')

class ProductInCarService{
    

static async createProductInCarService({carId, productIdCar,quantity, status}){
   
    try{const productCarCreated = await ProductInCar.create({carId, productIdCar,quantity, status})
        //const productGet = await Product.findByPk(productIdCar)
       //const carget= await Car.findByPk(carId)
       //const totalPrice = productGet.price * quantity + carget.totalPrice 
        //const carUpdated= await Car.update(carId, {totalPrice})
    return productCarCreated
    }
    catch(error){throw error}}

    
    static async getProductInCarService(id){
   
        try{const productCarGeted = await User.findByPk(id, {attributes: ['username'], include: {model: Car, attributes:['totalPrice'], include: {model: Product, attributes: ['name','description','price']}}})
            
        return productCarGeted
        }
        catch(error){throw error}}

        static async updateProductInCarService(idCar, stat){
   
            try{const productCarUpdate = await ProductInCar.update({status: stat}, {where: {car_id: idCar}} )
                 const userOfCar= await Car.findByPk(idCar, {include: User})
            return userOfCar
            }
            catch(error){throw error}}


            static async getOrderService(idUser){
   
                try{const orderGeted = await User.findByPk(idUser, {attributes: ['username'], include: {model: Order, attributes:['status'], include: {model: Product, attributes: ['name','description','price']}}})
                    
                return orderGeted
                }
                catch(error){throw error}}

}

module.exports = ProductInCarService