const express = require('express')
const app =  express()
const morgan = require('morgan')
const cors = require('cors')
const initModels = require('../models/initModel')
const userRouter = require('../routes/user.routes')
const productRouter = require('../routes/product.routes')
const loginRouter = require('../routes/auth.routes')
const productCarRouter = require('../routes/productCar.routes')
const orderRouter = require('../routes/order.routes')
const transporter = require('../utils/mailer')
const swaggerUi = require('swagger-ui-express')
const swaggerDoc = require('./swagger.json')
require('dotenv').config()
const db = require('../utils/database')
const PORT = process.env.PORT || 8000

app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc))
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(userRouter)
app.use(loginRouter)
app.use(productRouter)
app.use(productCarRouter)
app.use(orderRouter)



/*try{

    const info= transporter.sendMail({ 

        from: 'leavleav00@gmail.com', to: 'japay01@hotmail.com', subject:'prueba', html: '<h1>Hola Alejs, soy un servidor</h1>'
})
}catch(error){console.log(error)}*/



initModels()
db.sync({alter: true})
.then(()=>{console.log('sincronizada la bd')})
.catch((error)=>{console.log(error)})

db.authenticate()
.then(()=>{console.log('conexion lista')})
.catch((error)=>{console.log(error)})

app.listen(PORT, ()=>{console.log(`servidor corriendo en ${PORT}`)})