const {Router} = require('express')
const productCarRouter = Router()
const authenticate = require('../middleware/token.middleware')
const {createProductInCar,getProductInCar,updateProductInCar} = require('../controllers/productCar.controller')
const {createUserValidator} = require('../validators/user.validator')


productCarRouter.post('/api/v1/product/create/incar',authenticate, createProductInCar)
productCarRouter.get('/api/v1/product/get/incar/:id', authenticate, getProductInCar )
productCarRouter.put('/api/v1/product/get/incar/:idCar',authenticate, updateProductInCar)

module.exports = productCarRouter