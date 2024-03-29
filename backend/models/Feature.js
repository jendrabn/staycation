const { Schema, model } = require("mongoose");
const { ObjectId } = Schema;

const featureSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    qty: {
      type: Number,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    itemId: {
      type: ObjectId,
      ref: "Item",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Feature", featureSchema);
