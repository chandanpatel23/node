// Import the HTTP module
const http = require('http');

// Create a server object
const server = http.createServer((req, res) => {
  // Set the response HTTP header with HTTP status and Content type
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (req.url === '/greet') {
    // If the request URL is '/greet', send a greeting message
    res.end("Greetings from the server!");
    return;
  }

  if (req.url === '/farewell') {
    // If the request URL is '/farewell', send a farewell message
    res.end("Farewell from the server!");
    return;
  }

  if (req.url === '/time') {
    // If the request URL is '/time', send the current server time
    res.end(`Current server time is: ${new Date().toLocaleTimeString()}`);
    return;
  }
  // Send the response body as 'Hello, World!'
  res.end("Hello, World!");
});

// Define the port to listen on const PORT = 3000;
    const PORT = 3000;
// Start the server and listen on the specified port
server.listen(PORT, 'localhost', () => {
  console.log(`Server running at http://localhost:${PORT}/`);
}); 