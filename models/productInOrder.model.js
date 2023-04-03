const {DataTypes} = require('sequelize')
const db = require('../utils/database')


const ProductInOrder = db.define('products_in_orders',{

idProductInOrder: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: 'id_product_in_order'
},

orderIdProduct:{

    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'order_id_product'
},

productIdOrder: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'product_id_order'
},
quantity: {
    type: DataTypes.INTEGER,
    allowNull: false
},

price: {
    type: DataTypes.FLOAT,
    allowNull: false
   
},

status: {
    type: DataTypes.BOOLEAN,
    allowNull: false
}
},

{timestamps: false})

module.exports= ProductInOrder