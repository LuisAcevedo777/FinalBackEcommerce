const {DataTypes} = require('sequelize')
const db = require('../utils/database')


const UserImage = db.define('users_images',{

idImageUser: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: 'id_image_user'
},

linkUser:{

    type: DataTypes.STRING(100),
    allowNull: false,
    field: 'link_user'
},
},

{timestamps: false})

module.exports= UserImage