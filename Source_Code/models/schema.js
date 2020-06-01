const mongoose = require('mongoose');

const validator = require('mongoose-unique-validator');

// User Schema
const UserSchema = mongoose.Schema ({
  firstname: {
    type: String
  },
  lastname: {
   type: String
  },
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});
UserSchema.plugin(validator);

module.exports = mongoose.model('User', UserSchema);