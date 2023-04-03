const {DataTypes} = require('sequelize')
const db = require('../utils/database')


const Car = db.define('cars',{

idCar: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
},

userIdToCar:{

    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'user_id_to_car'
},

totalPrice: {
    type: DataTypes.FLOAT,
    allowNull: false,
    field: 'total_price'
}},

{timestamps: false})

module.exports= Car