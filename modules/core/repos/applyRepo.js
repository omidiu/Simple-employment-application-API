const repo = (genericRepo, model) => ({
  ...genericRepo(model),
  findEmployeeApply: async (jobId, resumeId) => {
    return model.findOne({
      jobId,
      resumeId,
    });
  },
  findUserApplies: async (resumeId) => {
    return model.find({
      resumeId,
    });
  },
});

module.exports = repo;
