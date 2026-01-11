const { Sequelize, DataTypes } = require('sequelize');
const fs = require('fs');
const path = require('path');

// 1. CONFIGURACIÓN DE LA CONEXIÓN (Cámbialo por tus datos de MySQL/Postgres)
const sequelize = new Sequelize('nombre_tu_bd', 'tu_usuario', 'tu_password', {
    host: 'localhost',
    dialect: 'mysql', // o 'postgres'
    logging: false    // Para que no ensucie la consola con logs de SQL
});

const db = {};

// 2. CARGA AUTOMÁTICA DE MODELOS
// Esto lee todos los archivos de esta carpeta y los registra en Sequelize
fs.readdirSync(__dirname)
    .filter(file => (file.indexOf('.') !== 0) && (file !== 'index.js') && (file.slice(-3) === '.js'))
    .forEach(file => {
        const model = require(path.join(__dirname, file))(sequelize, DataTypes);
        db[model.name] = model;
    });

// 3. EXPORTAR TODO
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;