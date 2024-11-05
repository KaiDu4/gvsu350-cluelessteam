import express, { json } from 'express';
import connectDB from './db/connection.js';
import authRoutes from './routes/authRoutes.js';

const app = express();


// Connect to MongoDB
connectDB();
import dotenv from 'dotenv';
dotenv.config();
// Middleware
app.use(json());

// Routes
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));