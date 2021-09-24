const service = (repo) => ({
    create: async (fields) => {
        const result = await repo.create(fields);
        return result;
    },
    findById: async (id) => {
        const result = await repo.findById(id, project);
        return result;
    },
    softDeleteById: async (id) => {
        const result = await repo.softDeleteById(id);
        return result;
    },
    hardDeleteById: async (id) => {
        const result = await repo.deleteById(id);
        return result;
    }
});

module.exports = service;
