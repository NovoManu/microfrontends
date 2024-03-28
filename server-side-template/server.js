const express = require('express');
const app = express();

// Define routes for different microfrontends
app.get('/microfrontend1', (req, res) => {
  // Fetch data or render content specific to microfrontend 1
  const content = "<h1>Microfrontend 1</h1><p>This is the content for microfrontend 1.</p>";
  res.send(content);
});

app.get('/microfrontend2', (req, res) => {
  // Fetch data or render content specific to microfrontend 2
  const content = "<h1>Microfrontend 2</h1><p>This is the content for microfrontend 2.</p>";
  res.send(content);
});

// Define main route to render the container application
app.get('/', (req, res) => {
  // Render the main template and include placeholders for microfrontends
  const mainContent = `
    <html>
      <head>
        <title>Container Application</title>
      </head>
      <body>
        <div id="microfrontend1"></div>
        <div id="microfrontend2"></div>
        <!-- Additional microfrontend placeholders can be added here -->
      </body>
    </html>
  `;
  res.send(mainContent);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

