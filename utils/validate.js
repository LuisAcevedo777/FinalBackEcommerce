const{validationResult} = require('express-validator')

const validateResult = (req, res, next) =>{

    try{
 validationResult(req).throw()
 return next()  }
 catch(error){next({status: 418,name: 'validation Error', message: error.array()})}
}
module.exports= validateResult