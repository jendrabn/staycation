const { Schema, model } = require("mongoose");

const imageSchema = new Schema({
  imageUrl: {
    type: String,
    required: true,
  },
});

module.exports = model("Image", imageSchema);
