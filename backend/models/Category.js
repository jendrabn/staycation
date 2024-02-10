const { Schema, model } = require("mongoose");
const { ObjectId } = Schema;

const categorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    itemId: [
      {
        type: ObjectId,
        ref: "Item",
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = model("Category", categorySchema);
