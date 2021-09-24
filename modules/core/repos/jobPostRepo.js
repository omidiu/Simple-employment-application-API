const repo = (genericRepo, model) => ({
  ...genericRepo(model),
  updateById: async (jobId, jobInput) => {
    return model.findOneAndUpdate({ _id: jobId }, jobInput);
  },
  findCompanyJob: async (jobId, companyId) => {
    return model.findOne(
      { _id: jobId, companyId },
      {
        jobTitle: 1,
        jobDescription: 1,
        industry: 1,
        salary: 1,
        workingHours: 1,
        imageFile: 1,
        requireSkills: 1,
      }
    );
  },
  suggestBaseInfo: async (skillsRegex, city, ignoreIds) => {
    return model.find({
      $and: [
        { _id: { $nin: ignoreIds } },
        {
          $or: [
            { jobTitle: { $in: skillsRegex } },
            { jobDescription: { $in: skillsRegex } },
            { requireSkills: { $in: skillsRegex } },
          ],
        },
        { city },
      ],
    });
  },
  findJobsBaseOnSearch: async (searchReg) => {
    return model.find(
      {
        jobTitle: searchReg,
      },
      {
        jobTitle: 1,
        city: 1,
        jobDescription: 1,
        industry: 1,
        salary: 1,
        workingHours: 1,
        companyId: 1,
        imageFile: 1,
        requireSkills: 1,
      }
    );
  },
});

module.exports = repo;
