const { Schema, model } = require("mongoose");
const { ObjectId } = Schema;

const activitySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    isPopular: {
      type: Boolean,
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

module.exports = model("Activity", activitySchema);
