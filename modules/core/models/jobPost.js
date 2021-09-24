const mongoose = require("mongoose");

const { Schema } = mongoose;

const JobPostSchema = new Schema(
  {
    jobTitle: {
      type: String,
      trim: true,
      required: true,
    },
    city: {
      type: String,
      trim: true,
      required: true,
    },
    jobDescription: {
      type: String,
      trim: true,
      required: true,
    },
    industry: {
      type: String,
      trim: true,
      required: true,
    },
    salary: {
      type: Number,
      required: true,
    },
    workingHours: {
      from: {
        type: Number,
        required: true,
      },
      to: {
        type: Number,
        required: true,
      },
    },
    companyId: {
      type: Schema.Types.ObjectId,
      ref: "company",
      required: true,
    },
    imageFile: {
      type: Schema.Types.ObjectId,
      ref: "file",
    },
    requireSkills: [],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("job", JobPostSchema);
