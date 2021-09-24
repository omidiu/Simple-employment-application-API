const mongoose = require("mongoose");

const { Schema } = mongoose;

const applySchema = new Schema(
  {
    jobId: {
      type: Schema.Types.ObjectId,
      ref: "job",
      required: true,
    },
    resumeId: {
      type: Schema.Types.ObjectId,
      ref: "resume",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("apply", applySchema);
