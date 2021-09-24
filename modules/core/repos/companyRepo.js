const repo = (genericRepo, model) => ({
  ...genericRepo(model),
  updateUserCompany: async (userId, companyInput) => {
    return model.findOneAndUpdate(
      {
        userId,
      },
      companyInput
    );
  },
  findUserCompany: async (userId) => {
    return model.findOne({ userId });
  },
});

module.exports = repo;
