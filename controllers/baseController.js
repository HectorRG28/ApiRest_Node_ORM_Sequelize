// src/controllers/base/BaseController.js
export class BaseController {
    constructor(service) {
        this.service = service;
    }

    async getAll(req, res) {
        try {
            const items = await this.service.findAll();
            res.json(items);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    // Implementar aquí métodos para getById, create, update, delete [cite: 70]
}