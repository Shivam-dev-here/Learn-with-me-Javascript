//npm i express@4        installs 4th version of express

// # REQUIRE SERVER
// const http = require('node:http');
// const hostname = '127.0.0.1';
// const port = 3000;
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World\n');
// });
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// }); 

// # EXPRESS SERVER

const express = require('express')
const app = express()
const port = 3000

// //app.[get, push, post, delete     (path, handler)        ]          NON MAINTANABLE THEREFOR CREATING A VAR. & USING REQ.PRAMS.VAR.
// app.get('/', (req, res) => {
//     res.send('Hello World!') })
// app.get('/about', (req, res) => {                           //http://127.0.0.1:3000/about     --> add /about at url
//     res.send('about hu mai na') })
// app.get('/bog', (req, res) => {                             //http://127.0.0.1:3000/blog     --> add /blog at url
//     res.send('blog hu mai') })



// # NON MAINTANABLE THEREFOR CREATING A VAR. & USING REQ.PRAMS.VAR.
// app.get('/:slug', (req, res) => {                                                       //single variable
//     console.log(req.params);
//     console.log(req.query);
//     res.send(`Hello ${req.params.slug}`)
// })

// app.get('/:slug/:sec', (req, res) => {                                                       //multi variable       3000/blog/intro-clg
//     res.send(`Hello ${req.params.slug} and ${req.params.sec}`)
// })
// app.use(express.static('public')) 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) 





// # STATIC FILES     -> Expressjs > getting started > static files



//on L42-- to work
app.use(express.static('public'))                  //in browser 3000/harry.txt will not work due to save other files to be access freely instead create a folder name public (standard) in same dir
