const Car = require('./car.model')
const Order = require('./order.model')
const Product = require('./product.model')
const ProductInCar = require('./productInCar.model')
const User = require('./user.model')
const UserType = require('./userType.model')
const ProductInOrder = require('./productInOrder.model')
const  ProductImage = require('./productImage.model')
const  UserImage = require('./userImage.model')


const initModels = ()=> {

 
    Order.belongsToMany(Product, { through: ProductInOrder,foreignKey: 'order_id_product', otherKey: 'product_id_order'});
    Product.belongsToMany(Order, { through: ProductInOrder,foreignKey: 'product_id_order', otherKey: 'order_id_product'});

    Car.belongsToMany(Product, { through: ProductInCar,foreignKey: 'car_id', otherKey: 'product_id_car' });
    Product.belongsToMany(Car, { through: ProductInCar,foreignKey: 'product_id_car', otherKey: 'car_id'});


User.hasMany(Order, {foreignKey:'user_id_to_order'});
Order.belongsTo(User,{foreignKey:'user_id_to_order'});


UserType.hasMany(User, {foreignKey:'id_type_name'});
User.belongsTo(UserType,{foreignKey:'id_type_name'});

User.hasOne(Car, {foreignKey:'user_id_to_car'});
Car.belongsTo(User,{foreignKey:'user_id_to_car'});

UserImage.hasMany(User, {foreignKey:'avatar_id'});
User.belongsTo(UserImage,{foreignKey:'avatar_id'});

ProductImage.hasMany(Product, {foreignKey:'product_image_id'});
Product.belongsTo(ProductImage,{foreignKey:'product_image_id'});


User.hasMany(Product, {foreignKey:'id_vendedor'});
Product.belongsTo(User,{foreignKey:'id_vendedor'});

   // User.belongsToMany(Profile, { through: 'User_Profiles' });
    // Profile.belongsToMany(User, { through: 'User_Profiles' });

}
module.exports = initModels