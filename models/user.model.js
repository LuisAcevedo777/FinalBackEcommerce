const {DataTypes} = require('sequelize')
const db = require('../utils/database')
const bcrypt = require('bcrypt')

const User = db.define('users',{

idUser: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: 'id_user'
},

username:{

    type: DataTypes.STRING(30),
    allowNull: false,
    unique: true
},

email: {
    type: DataTypes.STRING(50),
    allowNull: false,
    validate:{isEmail: true},
    unique: true
},
password: {
    type: DataTypes.STRING(150),
    allowNull: false
},

avatarId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'avatar_id'
},

idTypeName: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'id_type_name'
}
}, {hooks: {beforeCreate: async(user)=>{

try{  const salt = await bcrypt.genSalt(10)
    const passwordHash = await bcrypt.hash(user.password, salt)
    user.password = passwordHash}
    catch(error){throw error}





}},timestamps: false},)

module.exports= User