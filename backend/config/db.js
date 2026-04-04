// Import mongoose
const mongoose = require('mongoose');

// Function to connect to the database
const connectDB = async () => {
  try {
    // Attempt to connect to MongoDB using the connection string from our .env file
    const conn = await mongoose.connect(process.env.MONGO_URI);

    // If connection is successful, log it to the console
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    // If there's an error, log it and exit the process
    console.error(`Error: ${error.message}`);
    process.exit(1); // Exit with a failure code
  }
};

// Export the function so we can use it in our server.js
module.exports = connectDB;