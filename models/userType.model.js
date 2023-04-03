const {DataTypes} = require('sequelize')
const db = require('../utils/database')


const UserType = db.define('users_types',{

idUserType: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: 'id_order'
},

typeName:{

    type: DataTypes.STRING(30),
    allowNull: false,
    field: "type_name"
},


},

{timestamps: false})

module.exports= UserType