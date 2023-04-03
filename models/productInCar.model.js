const {DataTypes} = require('sequelize')
const db = require('../utils/database')


const ProductInCar = db.define('products_in_cars',{

idProductInCar: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: 'id_product_in_car'
},

carId:{

    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'car_id',
    unique: false
},

productIdCar: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'product_id_car',
    unique: false
},
quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: false
},


status: {
    type: DataTypes.BOOLEAN,
    allowNull: false
}
},

{timestamps: false})

module.exports= ProductInCar