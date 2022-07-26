const { config } = require('dotenv')
const Sequelize = require('sequelize')
const configs = require('../../config/config.js')


const sequelize = new Sequelize(configs.database, configs.username, configs.password, { // database , username , password
    dialect: configs.dialect,
    host: configs.host,
    port: parseInt(configs.port)
})

module.exports = sequelize