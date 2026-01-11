class BaseService {
    constructor(model) {
        this.model = model;
    }

    async findAll() {
        return await this.model.findAll();
    }

    async findById(id) {
        return await this.model.findByPk(id);
    }

    async create(data) {
        return await this.model.create(data);
    }

    async update(id, data) {
        const record = await this.model.findByPk(id);
        if (record) {
            return await record.update(data);
        }
        return null;
    }

    async delete(id) {
        const record = await this.model.findByPk(id);
        if (record) {
            await record.destroy();
            return true;
        }
        return false;
    }
}

module.exports = BaseService;