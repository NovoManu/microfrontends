const express = require('express');
const app = express();

const getMicrofrontendOneContent = async () => {
  return await fetch('http://localhost:3001').then((content) => {
    return content.text()
  }).then((html) => {
    return html
  })
}

const getMicrofrontendTwoContent = async () => {
  return await fetch('http://localhost:3002').then((content) => {
    return content.text()
  }).then((html) => {
    return html
  })
}

// Define main route to render the container application
app.get('*', async (req, res) => {
  const pages = {
    '/micro2': getMicrofrontendTwoContent,
    'default': getMicrofrontendOneContent
  }
  const page = pages[req.path] || pages.default
  const pageContent=  await page()

  // Render the main template and include placeholders for microfrontends
  const mainContent = `
    <html>
      <head>
        <title>Container Application</title>
      </head>
      <body>
        <div id="page-content">${pageContent}</div>
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

