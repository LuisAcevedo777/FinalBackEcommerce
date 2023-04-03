const {DataTypes} = require('sequelize')
const db = require('../utils/database')


const Product = db.define('products',{

idProduct: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: 'id_product'
},

name:{

    type: DataTypes.STRING(35),
    allowNull: false,
},

description: {
    type: DataTypes.STRING(100),
    allowNull: false,
    
},

productImageId: {
    type: DataTypes.STRING(50),
    allowNull: false,
    field: 'product_image_id'
   
},

price: {
    type: DataTypes.FLOAT,
    allowNull: false
   
},

idVendedor: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'id_vendedor'
   
},

stock: {
    type: DataTypes.INTEGER,
    allowNull: false
},

},

{timestamps: false})

module.exports= Product