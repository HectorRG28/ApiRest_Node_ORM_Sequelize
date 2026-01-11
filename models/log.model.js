const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
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
    }, {
        timestamps: true // Esto crea createdAt y updatedAt automáticamente
    });
};