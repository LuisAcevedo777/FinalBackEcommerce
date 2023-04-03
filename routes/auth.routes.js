const {userLogin} = require('../controllers/auth.controller')
const {Router}= require('express')

const loginRouter = Router()

loginRouter.post('/api/v1/auth/login', userLogin)


module.exports = loginRouter

