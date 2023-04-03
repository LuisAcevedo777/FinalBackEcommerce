const {Router} = require('express')
const productRouter = Router()
const authenticate = require('../middleware/token.middleware')
const {getProduct, createProduct, updateProduct} = require('../controllers/product.controller')
const {createUserValidator} = require('../validators/user.validator')

productRouter.get('/api/v1/product', authenticate,getProduct)
//productRouter.post('/api/v1/product',authenticate, createProduct )
//productRouter.put('/api/v1/product/:id',authenticate, updateProduct)
productRouter.post('/api/v1/products', authenticate, createProduct)
productRouter.put('/api/v1/product/:idp', authenticate, updateProduct)

module.exports = productRouter