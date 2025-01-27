const express = require('express');
const cors = require('cors');
const app = express();

// CORS configuration
const corsOptions = {
  origin: 'https://ioinfo.shop', // Allow only your domain
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow specific methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allow specific headers
};

// Middleware to parse JSON requests
app.use(express.json());

// Enable CORS with the specified options
app.use(cors(corsOptions));

// API endpoint
app.get('/api/hello', (req, res) => {
  res.json({ message: 'New Hello, World! Connected to Backend successfully - action 1' });
});

// Start the server
const PORT = process.env.PORT || 8080; // Default to port 8080
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
