const mongoose = require("mongoose");

const { Schema } = mongoose;

const resumeSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    sex: {
      type: String,
      enum: ["female", "male", "other"],
      required: true,
    },
    birthdate: {
      type: Date,
      requried: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    resumeFile: {
      type: Schema.Types.ObjectId,
      ref: "file",
    },
    nationalCode: {
      type: String,
      //  TODO: pattern: "^d{10}$",
    },
    skills: [{ type: String }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("resume", resumeSchema);
