const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcryptjs");
const uniqueValidator = require('mongoose-unique-validator');


const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, require: true },
  password: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

userSchema.methods.toJSON = function() {

  let user = this;
  let userObject = user.toObject();
  delete userObject.password;

  return userObject;
}

userSchema.methods.encryptPassword = async password => {
  return await bcrypt.hash(password, 10);;
};

userSchema.methods.comparePassword = async function(password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.plugin(uniqueValidator, { message: '{PATH} debe de ser único' });

module.exports = mongoose.model('Usuario', userSchema);
