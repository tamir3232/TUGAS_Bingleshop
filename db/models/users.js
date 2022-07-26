const Sequelize = require('sequelize')

const sequelize = require('./sequelize')

class users extends Sequelize.Model {}

users.init({
    id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true
    },
    name: {
        type: Sequelize.DataTypes.STRING,
    },
    username: {
        type: Sequelize.DataTypes.STRING,
    },
    password: {
        type: Sequelize.DataTypes.TEXT,
    },
}, {
    sequelize: sequelize,
    timestamps: true,
    underscored: true,
    paranoid: true,
    freezeTableName: true,
    tableName: 'roles'
})

module.exports = users