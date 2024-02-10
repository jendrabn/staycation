const { Schema, model } = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// userSchema.index({
//   username: 1,
// });

userSchema.pre("save", function (next) {
  if (this.isModified("password"))
    this.password = bcrypt.hashSync(this.password, 10);

  next();
});

module.exports = model("User", userSchema);
