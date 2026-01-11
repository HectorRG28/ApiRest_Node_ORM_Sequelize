// src/models/log.js
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Log', {
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