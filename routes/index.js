const { Router } = require('express');
const router = Router();
const db = require('/models'); // Importa el index.js de arriba
const BaseService = require('/services/BaseService');
const BaseController = require('/controllers/BaseController');

// El bucle que genera todo
Object.keys(db.sequelize.models).forEach(modelName => {
    const model = db.sequelize.models[modelName];
    
    // 1. Creamos el servicio para este modelo
    const service = new BaseService(model);
    
    // 2. Creamos el controlador usando ese servicio
    const controller = new BaseController(service);

    const resource = modelName.toLowerCase();

    // 3. Definimos las rutas automáticas (Rutas)
    router.get(`/${resource}`, controller.getAll);
    router.get(`/${resource}/:id`, controller.getById);
    router.post(`/${resource}`, controller.create);
    router.put(`/${resource}/:id`, controller.update);
    router.delete(`/${resource}/:id`, controller.delete);
    
    console.log(`✅ [AutoCRUD] Ruta /${resource} lista`);
});

module.exports = router;