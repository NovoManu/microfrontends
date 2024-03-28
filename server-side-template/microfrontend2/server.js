const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const content = "<h1>Microfrontend 2</h1><p>This is the content for microfrontend 2.</p>";
  res.send(content);
});

// Start the server
const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

