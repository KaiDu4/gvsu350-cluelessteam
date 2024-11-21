import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new Schema({
  firstName: {
    type: String,
    required: [true, 'Please enter a username'],
  },
  lastName: {
    type: String,
    required: [true, 'Please enter lastname'],
  },

  schoolDistrict: {
    type: String,
    required: [true, 'Please enter the school district'],
  },
  state: {
    type: String,
    required: [true, 'Please enter the state'],
  },
  cellphone: {
    type: String,
    required: [true, 'Please enter a valid phone number'],
    unique: true,
  },
  email: {
    type: String,
    required: [true, 'Please enter an email'],
    unique: true,
    match: [/.+\@.+\..+/, 'Please enter a valid email address'],
  },
  password: {
    type: String,
    required: [true, 'Please enter a password'],
    minlength: 6,
  },
});

// Method to hash password before saving the user to the database
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
      return next();
  }
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Method to compare password during sign-in
userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};


export default model('User', userSchema);
