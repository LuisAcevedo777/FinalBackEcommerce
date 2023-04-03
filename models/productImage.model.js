const {DataTypes} = require('sequelize')
const db = require('../utils/database')


const ProductImage = db.define('products_images',{

idImageProduct: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: 'id_image_product'
},

linkProduct:{

    type: DataTypes.STRING(100),
    allowNull: false,
    field: 'link_product'
},
},

{timestamps: false})

module.exports= ProductImage