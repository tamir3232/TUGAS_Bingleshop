const Users = require('./users')
const Items = require('./items')
const Order = require('./order')
const sequelize = require('./sequelize')

Users.hasMany(Order, {
    as: 'order',
    foreignKey: 'users_id'
})

Order.belongsTo(Users, {
    as: 'users',
    foreignKey: 'users_id'
})

Items.hasMany(Order, {
    as: 'order',
    foreignKey: 'items_id'
})
Order.belongsTo(Items, {
    as: 'items',
    foreignKey: 'items_id'
})

module.exports = {
    sequelize,
    Users,
    Items,
    Order
}