"use strict";

const { DATE } = require("sequelize");
const sequelize = require("sequelize");

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("roles", {
            id: {
                type: sequelize.INTEGER,
                autoincrement: true,
                primarykey: true,
                unique: true,
                allowNull: false,
            },
            name: {
                type: sequelize.STRING,
            },
            status: {
                type: sequelize.STRING,
            },
            created_at: {
                type: sequelize.DATE,
                default: new DATE(),
            },
            update_at: {
                type: sequelize.DATE,
                default: new DATE(),
            },
            deleted_at: {
                type: sequelize.DATE,
            },
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("roles");
    },
};