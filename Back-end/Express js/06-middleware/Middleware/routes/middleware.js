const express = require('express')
const router = express.router()

router.use((req, res, next) => {
  console.log('Time:',Date.now());
  next()                               
})

router.get('/',(req,res)=>{
    res.send('Home: HELLO BIRDS')
})
router.get('/about',(req,res)=>{
    res.send('About: HELLO BIRDS')
})

module.exports = router