const mongoose = require("mongoose");

const budgetSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    month: {
      type: Number,
      required: true,
      min: 1,
      max: 12,
    },
    year: {
      type: Number,
      required: true,
    },
    monthlyLimit: {
      type: Number,
      required: true,
      min: 0,
    },
  },
  {
    timestamps: true,
  }
);

// A user can have only one budget per month
budgetSchema.index(
  { user: 1, month: 1, year: 1 },
  { unique: true }
);

module.exports = mongoose.model("Budget", budgetSchema);