// const { contentType } = require("express/lib/response");
// ctrl + c
console.log("Hello, World!");

const { createServer } = require('node:http');
const hostname = '127.0.0.1';
const port = 3000;
const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/HTML');
  res.end('<h1> Hello World. Do you cophhhhhy</h1>');
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
console.log("Below helljbjo");

//TO work click on http://127.0.0.1:3000/ with {{{ctrl + clk}}}