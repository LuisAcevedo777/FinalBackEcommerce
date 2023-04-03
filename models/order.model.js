const {DataTypes} = require('sequelize')
const db = require('../utils/database')


const Order = db.define('orders',{

idOrder: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: 'id_order'
},

userIdToOrder:{

    type: DataTypes.INTEGER,
    allowNull: false,
    field: "user_id_to_order"
},

status: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    
},
},

{timestamps: false})

module.exports= Order