const mongoose = require("mongoose");

const { Schema } = mongoose;

const companySchema = new Schema(
  {
    companyName: {
      type: String,
      required: true,
    },
    foundedAt: {
      type: Number,
      required: true,
    },
    fieldOfWork: {
      type: String,
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    address: {
      type: String,
    },
    phone: {
      type: String,
      //  TODO: pattern: "^d{10}$",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("company", companySchema);
