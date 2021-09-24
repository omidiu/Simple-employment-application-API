const repo = (genericRepo, model) => ({
  ...genericRepo(model),
  updateUserResume: async (userId, resumeInput) => {
    return model.findOneAndUpdate(
      {
        userId,
      },
      resumeInput
    );
  },
  findUserResume: async (userId) => {
    return model.findOne({
      userId,
    });
  },
});

module.exports = repo;
