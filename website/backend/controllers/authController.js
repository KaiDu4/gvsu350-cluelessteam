import User from '../models/User.js';

import pkg from 'bcryptjs';
const { hash } = pkg;

export async function signup(req, res) {
  const { firstName, lastName, schoolDistrict, state, cellphone, email, password } = req.body;

  try {
    const hashedPassword = await hash(password, 10);
    const newUser = new User({ firstName, lastName, schoolDistrict, state, cellphone, email, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export default signup;