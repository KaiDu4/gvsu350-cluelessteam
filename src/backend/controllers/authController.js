import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import pkg from 'bcryptjs';
import User from '../models/User.js';

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

export async function signin(req, res) {
  const{email, password} = req.body;

  try {
    const user = await User.findOne({email});
    if (!user) { 
      return res.status(404).json({message: 'User Not Found!'});
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch) { 
      return res.status(400).json({message: 'Invalid passowrd!'});
    }
    const token = jwt.sign(
      { id: user._id, 
        email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.json({ token, user: { id: user._id, email: user.email } });
    } catch (error) {
    res.status(500).json({ message: error.message });
    }
}

// router.get('/protected', (req, res) => {
//   const token = req.header('Authorization');
//   if (!token) return res.status(401).json({ message: 'Unauthorized' });

//   try {
//       const verified = jwt.verify(token, process.env.JWT_SECRET);
//       res.json({ message: 'Protected data', user: verified });
//   } catch (error) {
//       res.status(400).json({ message: 'Invalid token' });
//   }
// });


export default signup;