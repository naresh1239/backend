// Import required modules
const express = require('express');

// Create an instance of Express
const app = express();

// Define routes
app.get('/', (req, res) => {
  res.send('Welcome to the homepage!');
});

app.get('/about', (req, res) => {
  res.send('This is the about page.');
});

app.get('/contact', (req, res) => {
  res.send('Contact us at example@example.com');
});

// Handle 404 - Not Found
app.use((req, res) => {
  res.status(404).send('404 Not Found');
});

// Start the server on port 3000
const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
