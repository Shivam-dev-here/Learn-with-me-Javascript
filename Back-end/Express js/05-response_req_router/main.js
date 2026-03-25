// Express js > Getting started > Hello world
// npm init -y
// npm i express
// nodemon server.js

// # EXPLAINED POSTMAN


const express = require('express')
const blogs = require('./routes/blogs')
const shops = require('./routes/shops')

const app = express()
const port = 3000

app.use(express.static("public"))
app.use('/blogs', blogs)
app.use('/shops', shops)

app.get('/', (req, res) => {
  console.log("Hello get");
  res.send('Hello, I am get req')
})  

// NOT WORKING NEED TO ADD A ASYNC FUN() ? PUBLIC > INDEX.HTML > FUN() & L15 above app.get is compulsory
app.post('/', (req, res) => {
  console.log("Hello post");
  res.send('Hello, I am post req')
}).put('/', (req, res) => {               //works
  console.log("Hello PUT");
  res.send('Hello, I am PUT req')
})  

app.get("/index",(req, res) => {              
  console.log("INDEX: I Am");
  // res.send('Hello, I am index')         //for some line
  res.sendFile('templates/index.html', {root: __dirname})
})

app.get("/api",(req, res) => {             
  res.json({a:1, b:3, name:["meme", "King"]})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) 
 
