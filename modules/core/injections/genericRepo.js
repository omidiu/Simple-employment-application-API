const repo = (model) => ({
    create: async (fields) => {
        const result = await model.create(fields);
        return result;
    },
    findById: async (id) => {
        let result = model.findById(id);
        result = await result.exec();
        if (!result) return null;
        return result.isDeleted ? null : result; // TODO: Change it later
    },
    softDeleteById: async (id) => {
        const result = await model.findByIdAndUpdate(id, { isDeleted: true });
        return result;
    },
    hardDeleteById: async (id) => {
        const result = await model.findByIdAndDelete(id);
        return result;
    }
});

module.exports = repo;
