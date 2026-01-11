const express = require('express');
const sequelize = require('./config/db'); // O donde tengas tu conexión
const setupAutoRoutes = require('./src/routes/autoRouter'); // El paso 3

const app = express();
app.use(express.json());

// --- AQUÍ CONECTAS EL AUTOROUTER ---
// Esto lee todos tus modelos y crea /log, /usuario, /producto, etc.
const autoRouter = setupAutoRoutes(sequelize);
app.use('/api', autoRouter); 

const PORT = 3000;
sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`🚀 Servidor listo en http://localhost:${PORT}/api`);
    });
});