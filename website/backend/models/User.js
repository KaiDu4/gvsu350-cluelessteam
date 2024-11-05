import { Schema, model } from 'mongoose';

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

export default model('User', userSchema);