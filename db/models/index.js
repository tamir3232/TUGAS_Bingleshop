const Users = require('./users')
const Items = require('./items')
const Order = require('./order')
const sequelize = require('./sequelize')

// Order.hasMany(Users, {
//     as: 'users',
//     foreignKey: 'users_id'
// })

// Order.hasMany(Items, {
//     as: 'items',
//     foreignKey: 'items_id'
// })




module.exports = {
    sequelize,
    Users,
}