'use strict';
const { DATE } = require("sequelize");
const sequelize = require('sequelize')
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("order", {
            id: {
                type: sequelize.INTEGER,
                autoIncrement: true,
                primarykey: true,
                unique: true,
                allowNull: false,
            },
            invoice: {
                type: sequelize.INTEGER,
            },
            name: {
                type: sequelize.STRING,
            },
            users_id: {
                type: sequelize.INTEGER,
                references: {
                    model: 'users', // nama table
                    key: 'id' // nama column
                },
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE'
            },
            items_id: {
                type: sequelize.INTEGER,
                references: {
                    model: 'items',
                    key: 'id'
                },
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE'
            },

            price: {
                type: sequelize.INTEGER,
            },
            qty: {
                type: sequelize.INTEGER,
            },
            status: {
                type: sequelize.ENUM,
                values: ['BELUM DI BAYAR', 'SUDAH DI BAYAR']
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
        await queryInterface.dropTable("order");
    }
};