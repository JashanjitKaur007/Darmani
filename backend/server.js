// Import required packages
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

// Load environment variables from .env file AS EARLY AS POSSIBLE
// so any modules that read process.env during import see the values.
dotenv.config();

const connectDB = require('./config/db');
// Import routes AFTER dotenv is configured to avoid undefined envs in controllers
const userRoutes = require('./routes/userRoutes'); 
const chatRoutes = require('./routes/chatRoutes');

connectDB();
// Initialize the Express app
const app = express();

// Trust proxy for production environments
app.set('trust proxy', 1);

// Middlewares
// CORS configuration for production and development
const allowedOrigins = process.env.FRONTEND_ORIGIN 
  ? process.env.FRONTEND_ORIGIN.split(',').map(origin => origin.trim())
  : ['http://localhost:5173'];

app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.indexOf(origin) !== -1 || allowedOrigins.includes('*')) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
})); // Enable Cross-Origin Resource Sharing

// Increase body size limit for image uploads (base64 encoded images can be large)
app.use(express.json({ limit: '50mb' })); // Allow the server to accept JSON data in request bodies
app.use(express.urlencoded({ limit: '50mb', extended: true })); // Allow URL-encoded data

// Health check endpoint for deployment platforms
app.get('/healthz', (req, res) => {
  res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
});

// A simple test route to check if the server is running
app.get('/', (req, res) => {
  res.send('Hello! The Mental Health Companion API is running.');
});

app.use('/api/users', userRoutes);
app.use('/api/chat', chatRoutes);
// Define the port the server will run on
// Use the PORT from environment variables, or default to 5000
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});