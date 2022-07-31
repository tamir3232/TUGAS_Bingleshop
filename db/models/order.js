const Sequelize = require('sequelize')

const sequelize = require('./sequelize')

class order extends Sequelize.Model {}

order.init({
    id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        allowNull: false
    },
    invoice: {
        type: Sequelize.DataTypes.INTEGER,
    },
    name: {
        type: Sequelize.DataTypes.STRING,
    },
    users_id: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
            model: 'users', // nama table
            key: 'id' // nama column
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    },
    qty: {
        type: Sequelize.DataTypes.INTEGER,
    },
    items_id: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
            model: 'items',
            key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    },
    price: {
        type: Sequelize.DataTypes.INTEGER,
    },
    status: {
        type: Sequelize.DataTypes.ENUM,
        values: ['BELUM DI BAYAR', 'SUDAH DI BAYAR']
    },
}, {
    sequelize: sequelize,
    timestamps: true,
    underscored: true,
    paranoid: true,
    freezeTableName: true,
    tableName: 'order'
})

module.exports = order