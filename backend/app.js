const express = require('express');
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// API endpoint
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

// Start the server
const PORT = process.env.PORT || 8080; // Default to port 8080
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
