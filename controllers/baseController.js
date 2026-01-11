class BaseController {
    constructor(service) {
        this.service = service;
    }

    getAll = async (req, res) => {
        try {
            const elements = await this.service.findAll();
            res.json(elements);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    getById = async (req, res) => {
        try {
            const element = await this.service.findById(req.params.id);
            element ? res.json(element) : res.status(404).json({ message: "No encontrado" });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    create = async (req, res) => {
        try {
            const newElement = await this.service.create(req.body);
            res.status(201).json(newElement);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    // Puedes añadir update y delete siguiendo la misma lógica
}

module.exports = BaseController;