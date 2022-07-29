const Sequelize = require('sequelize')
const sequelize = require('./sequelize')

class Items extends Sequelize.Model {}

Items.init({
    id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true
    },
    categories: {
        type: Sequelize.DataTypes.ENUM,
        values: ['Baju', 'Sepatu', 'Elektronik'],
        allowNull: false
    },
    price: {
        type: Sequelize.DataTypes.INTEGER,
    },
    name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize: sequelize,
    timestamps: true,
    underscored: true,
    paranoid: true,
    freezeTableName: true,
    tableName: 'items'
})

module.exports = Items