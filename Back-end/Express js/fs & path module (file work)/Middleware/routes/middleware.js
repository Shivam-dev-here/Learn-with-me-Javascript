const express = require('express')
const router = express.router()

// # A MIDDLEWARE SPECIALY FOR THIS ROUTER 

router.use((req, res, next) => {
  console.log('Time:',Date.now());
  next()                               
})

router.get('/',(req,res)=>{
    res.send('HELLO BIRDS')
})

module.exports = router