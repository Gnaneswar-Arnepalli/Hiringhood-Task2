const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    user_fname: {
    type: String,
    required: true,
    trim: true
  },
  user_lname: {
    type: String,
    required: true,
    trim: true
  },
  user_id: {
    type: String,
    required: true,
    unique: true
  }
});

module.exports = mongoose.model("User", userSchema);