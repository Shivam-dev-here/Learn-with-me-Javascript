//ES6 and Require is module
// npm init -y                                       skipp setup questions
// npm i express jsonwebtoken dotenv                 to use multiple modules
// npm i --global nodemon                            to i nodemon for global
// nodemon path of file                                 whenver chnages occur in file server restarts automatically for particular file
// npm i in terminal if modules deleted

// const { contentType } = require("express/lib/response");
// ctrl + c
console.log("Hello, World!");


// # SERVER USING REQUIRE, REMOVE L5 OF PACKAGE.JSON

// const { createServer } = require('node:http'); // here node:http is a module being used
// const hostname = '127.0.0.1';
// const port = 3000;
// const server = createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/HTML'); 
//   res.end('<h1> Hello World. Do you cophhhhhy</h1>');
// });
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
console.log("Below bye");

//TO work click on http://127.0.0.1:3000/ with {{{ctrl + clk}}} 

// # SERVER USING MODULE, ADD L5 OF PACKAGE.JSON (  "type":"module",  )
import http from "http"
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