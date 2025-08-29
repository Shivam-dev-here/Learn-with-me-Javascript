// # ?USE DUE TO MAIN.JS REQ ARE HARD AND MESSED AND LOOKS BAD SO WE USE ROUTES TO MANAGE THEM EASILY
//EXPRESS JS > GUIDE > ROUTING > express.Router & CALL (below)

// localhost:3000/blogs will handle all pages afterwards /blogs that means this blogs.js will handle it

const express = require('express')
const router = express.Router()

// middleware that is specific to this router
// const timeLog = (req, res, next) => {
//   console.log('Time: ', Date.now())
//   next()
// }
// router.use(timeLog)

// define the home page route
router.get('/', (req, res) => {
  res.send('shops home page')
})
// define the about route
router.get('/about', (req, res) => {
  res.send('About shops')
})
router.get('/blogpost/:slug', (req, res) => {
  res.send(`fetch shoppost for ${req.params.slug}`)
})

module.exports = router
 