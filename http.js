const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to my homepage");
  } else if (req.url === "/about") {
    res.end("No about");
  } else {
    res.end(`
      <h1> Oops </h1>
      <p> we can't seeem to find the page you are looking for </p>
      <a href='/' > Back to home page </a>
    `);
  }
});

server.listen(5000);
