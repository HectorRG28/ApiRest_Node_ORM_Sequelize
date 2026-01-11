// src/routes/autoRouter.js
const { Router } = require('express');
const BaseService = require('/services/BaseService');
const BaseController = require('/controllers/BaseController');

const setupAutoRoutes = (sequelize) => {
    const router = Router();

    // Obtenemos todos los modelos definidos en Sequelize
    const models = sequelize.models;

    Object.keys(models).forEach(modelName => {
        const model = models[modelName];
        const service = new BaseService(model);
        const controller = new BaseController(service);

        const path = `/${modelName.toLowerCase()}`;

        // Definimos las rutas automáticas para cada modelo
        router.get(path, controller.getAll);
        router.post(path, controller.create);
        // router.get(`${path}/:id`, controller.getById); ...etc
        
        console.log(`✅ Ruta AutoCRUD generada: ${path}`);
    });

    return router;
};

module.exports = setupAutoRoutes;