const { Router } = require('express');
const router = Router();
const db = require('../models'); // Importa tu index de modelos
const BaseService = require('../services/BaseService');
const BaseController = require('../controllers/BaseController');

// Recorremos todos los modelos definidos en Sequelize
Object.keys(db.sequelize.models).forEach(modelName => {
    const model = db.sequelize.models[modelName];
    
    // Instanciamos servicio y controlador para este modelo específico
    const service = new BaseService(model);
    const controller = new BaseController(service);

    const routeName = modelName.toLowerCase();

    // Definimos las rutas automáticas
    router.get(`/${routeName}`, controller.getAll);
    router.get(`/${routeName}/:id`, controller.getById);
    router.post(`/${routeName}`, controller.create);
    
    console.log(`✅ AutoCRUD cargado para: /${routeName}`);
});

module.exports = router;