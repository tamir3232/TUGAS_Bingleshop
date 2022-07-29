'use strict';
const { DATE } = require("sequelize");
const sequelize = require("sequelize");

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("users", {
            id: {
                type: sequelize.INTEGER,
                autoIncrement: true,
                primarykey: true,
                unique: true,
                allowNull: false,
            },
            name: {
                type: sequelize.STRING,
            },
            username: {
                type: sequelize.STRING,
            },
            email: {
                type: sequelize.STRING,
            },
            password: {
                type: sequelize.TEXT,
            },
            created_at: {
                type: sequelize.DATE,
                default: new DATE(),
            },
            updated_at: {
                type: sequelize.DATE,
                default: new DATE(),
            },
            deleted_at: {
                type: sequelize.DATE,
            },
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("Users");
    }
};