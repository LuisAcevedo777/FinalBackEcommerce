const {Router} = require('express')
const orderRouter = Router()
const authenticate = require('../middleware/token.middleware')
const {getOrder} = require('../controllers/productCar.controller')
const {createUserValidator} = require('../validators/user.validator')


orderRouter.get('/api/v1/order/get/incar/:idUser', authenticate, getOrder )


module.exports = orderRouter