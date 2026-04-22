// get bootstap.com


const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');

//serves bootstrap file 3   OLD
// app.get('/', (req, res) => {
//   res.sendFile('templates/index/html', {root: __dirname})           
// })

//serves bootstrap file 3   NEW {closed}
// app.get('/', (req, res) => {
//   res.sendFile('index')           
// })

// using slug + console via params 6
// app.get('/blog/:slug', (req, res) =>{
//     let title = "Ejs without express blog"
//     let value = 34
//     console.log(req.params.slug);
    // res.sendFile("templates/index.html", {root:__dirname})      // basic without ejs
// })

// AFTER CHANGE (notes) == Correct way
//Uing Ejs with express
app.get('/', (req, res) =>{
    let title = "Ejs with express blog"
    let value = 34 
    let arr = ["must be string",2,3,4,"Hello bro"]
    // console.log(req.params.slug);
    res.render("index", {title:title, value:value, arr})      // basic with ejs L:14, L:43
}) 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
 