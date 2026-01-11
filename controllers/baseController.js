// src/controllers/BaseController.js
class BaseController {
    constructor(service) {
        this.service = service;
    }

    getAll = async (req, res) => {
        const items = await this.service.getAll();
        res.json(items);
    };

    create = async (req, res) => {
        const newItem = await this.service.create(req.body);
        res.status(201).json(newItem);
    };
    
    // ... añadir métodos para getById, update, delete
}
module.exports = BaseController;