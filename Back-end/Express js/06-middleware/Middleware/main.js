// # till now we know that, [req (came) (goes)] now middleware is used to modify request for example L8 (built in)
// Express js > guide > Writing Middleware

const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))          // /note.txt
const fs = require("fs")

// # Middleware  ? due to it changes request

app.use((req, res, next) => {
    fs.appendFileSync("log.txt",` ${Date.now()} is a ${req.method} \n`)      // # USE
  console.log("LOGGED");
  console.log(req.headers);                     // logs all headers
  req.harry = " i am being added in request"     //  /about  logs it
//   res.send('response sent')                   // res.send is used to send the response like return of a fun()
  next()                                   // next() is calling next middleware, if we cooment it request will hang (see in browser when refress)
})
app.use((req, res, next) => {
  console.log("next midleware");
  req.harry =" now i  am changed req"
  next()                               
})

app.get('/', (req, res) => {
  res.send('Hello World!')
}).get('/about', (req, res) => {
  res.send('Hello about')     
  console.log(req.harry);
                 
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// # TYPES OF MIDDLEWARE 5  M = {APP. ROUTER ERR BUILT IN (express.(static json urlencoded)) 3rd_party}