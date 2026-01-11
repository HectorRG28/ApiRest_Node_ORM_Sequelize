// src/models/log.model.js
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Log', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        log: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
};