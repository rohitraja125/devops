const http = require("http");

// Define the port and hostname for the server
const PORT = process.env.PORT || 5000;
const HOSTNAME = "localhost";

// Create the server
const server = http.createServer((req, res) => {
  // Set the response header
  res.writeHead(200, { "Content-Type": "text/plain" });

  // Write response data
  res.end("Hello, this is a basic Node.js server!");
});

// Start the server and listen for incoming requests
server.listen(PORT, HOSTNAME, () => {
  console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
});
