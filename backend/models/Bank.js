const { Schema, model } = require("mongoose");

const bankSchema = new Schema(
  {
    nameBank: {
      type: String,
      required: true,
    },
    nomorRekening: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Bank", bankSchema);
