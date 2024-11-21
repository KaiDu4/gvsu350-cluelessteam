import express, { json } from 'express';
import cors from 'cors';
import connectDB from './db/connection.js';
import authRoutes from './routes/authRoutes.js';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
// Connect to MongoDB
connectDB();

app.use(cors({
    origin: 'http://localhost:3000', // frontend URL
}));

app.use(json());

// Routes
app.use('/auth', authRoutes);
//app.use('/', authRoutes)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));