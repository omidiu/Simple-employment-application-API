const mongoose = require("mongoose");

const { Schema } = mongoose;

const fileSchema = new Schema(
  {
    path: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("file", fileSchema);
