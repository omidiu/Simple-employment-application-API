const repo = (genericRepo, model) => ({
  ...genericRepo(model),
  findByUsernameOrPhone: async (username, phoneNumber) => {
    return model.findOne({
      $or: [{ username }, { phoneNumber }],
    });
  },
  findByUsername: async (username) => {
    return model.findOne({
      username,
    });
  },
});

module.exports = repo;
