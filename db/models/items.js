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
    catagories: {
        type: Sequelize.DataTypes.ENUM,
        values: ['Baju', 'Sepatu', 'Elektronik'],
        allowNull: false
    },
    price: {
        type: Sequelize.DataTypes.INTEGER,
    },
    name: {
        type: Sequelize.DataTypes.STRING,
    },
}, {
    sequelize: sequelize,
    timestamps: true,
    underscored: true,
    paranoid: true,
    freezeTableName: true,
    tableName: 'users'
})

module.exports = Items