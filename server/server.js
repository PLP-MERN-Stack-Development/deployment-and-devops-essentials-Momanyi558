// server/server.js
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import bugRoutes from './routes/bugRoutes.js'; // adjust if needed

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('🚀 Bug Tracker API is running');
});

app.use('/api/bugs', bugRoutes);

// MongoDB Connection
const mongoUri = process.env.MONGO_URI;

if (!mongoUri) {
  console.error('MongoDB URI is missing! Set MONGO_URI in environment variables.');
  process.exit(1);
}

mongoose
  .connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('🟢 MongoDB connected!'))
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });

// Port binding
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

export default app;





