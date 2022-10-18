const { Schema, model } = require("mongoose");

const BankSchema = new Schema({
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
});

module.exports = model("Bank", BankSchema);
