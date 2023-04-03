const {Router} = require('express')
const userRouter = Router()
const authenticate = require('../middleware/token.middleware')
const {createUser, updateUser} = require('../controllers/user.controller')
const {createUserValidator} = require('../validators/user.validator')

userRouter.post('/api/v1/user',createUserValidator, createUser )
userRouter.put('/api/v1/user/:id',authenticate, updateUser)

module.exports = userRouter