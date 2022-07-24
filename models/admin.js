const mongoose = require("mongoose");
const { Schema } = mongoose;

const adminSchema = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  profileImage: {
    type: String,
    default: "https://twitter.com/EstherAkunekwe/header_photo",
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = { Admin: mongoose.model("admin", adminSchema) };
