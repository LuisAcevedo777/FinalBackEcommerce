const {check}= require('express-validator')
const validateResult = require('../utils/validate')
const createUserValidator = [

    check('username', 'El nombre de usuario no debe estar vacio')
    .exists()
    .isString()
    .notEmpty()
    .withMessage('El campo no debe estar vacio')
    .isLength({min:5, max:17})
    .withMessage('La longitud debe ser minimo 5 y maximo 17 caracteres'),

    check('email',  'Error con el campo email')
.exists()
.withMessage('El email debe existir')
.notEmpty()
.withMessage('El email no debe estar vacio')
.isString()
.withMessage('El email ser string')
.isLength({min: 8})
.withMessage('El email debe tener minimo 8 caracteres')
.isEmail()
.withMessage('No tiene formato de email correcto'),

check('password',  'Error con el campo password')
.exists()
.withMessage('El password debe existir')
.notEmpty()
.withMessage('El password no debe estar vacio')
.isString()
.isLength({min: 6})
.withMessage('El password debe tener minimo 6 caracteres'),


    (req, res, next)=>{

        validateResult(req,res,next)}
]

const updateUserValidator = [

    check('username', 'El nombre de usuario no debe estar vacio')
    .isString()
    .withMessage('El campo no debe estar vacio')
    .isLength({min:5, max:17})
    .withMessage('La longitud debe ser minimo 5 y maximo 17 caracteres'),


check('password')
.not().exists()
.withMessage('El password no es permitido editar'),


    check('email')
.not().exists()
.withMessage('El email no es permitido editar'),

check('avatarId',  'Error con el campo .avatarId')
.isInt()
.withMessage('El tipo de nombre debe ser un numero'),


check('idTypeName', 'El  de usuario no debe estar vacio')
   .isInt()
    .withMessage('El tipo de nombre debe ser un numero'),

    (req, res, next)=>{

        validateResult(req,res,next)}
]



module.exports = {
    createUserValidator,
    updateUserValidator
}
